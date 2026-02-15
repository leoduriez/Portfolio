<?php
/**
 * Script de traitement du formulaire de contact
 * - Envoie un email à leo.duriezj@gmail.com
 * - Stocke le message dans la base de données o2switch
 */

// Inclure la configuration de la base de données
require_once 'config.php';

// Configuration
$success_redirect = "index.php?success=1#contact";
$error_redirect = "index.php?error=1#contact";

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer et nettoyer les données du formulaire
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = strip_tags(trim($_POST["message"]));
    
    // Vérifier que les données sont valides
    if (empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: " . $error_redirect);
        exit;
    }
    
    // Variables pour suivre le succès des opérations
    $email_sent = false;
    $db_saved = false;
    
    // ========================================
    // 1. ENREGISTRER DANS LA BASE DE DONNÉES
    // ========================================
    try {
        $pdo = getDBConnection();
        
        if ($pdo) {
            // Préparer la requête d'insertion
            $sql = "INSERT INTO contact_messages (name, email, subject, message, ip_address, user_agent) 
                    VALUES (:name, :email, :subject, :message, :ip_address, :user_agent)";
            
            $stmt = $pdo->prepare($sql);
            
            // Récupérer l'adresse IP et le user agent
            $ip_address = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
            $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
            
            // Exécuter la requête
            $db_saved = $stmt->execute([
                ':name' => $name,
                ':email' => $email,
                ':subject' => $subject,
                ':message' => $message,
                ':ip_address' => $ip_address,
                ':user_agent' => substr($user_agent, 0, 255) // Limiter à 255 caractères
            ]);
            
            if ($db_saved) {
                error_log("Message de contact enregistré en base de données pour : $email");
            }
        }
    } catch (PDOException $e) {
        error_log("Erreur lors de l'enregistrement du message : " . $e->getMessage());
        // On continue même si la base de données échoue, pour essayer d'envoyer l'email
    }
    
    // ========================================
    // 2. ENVOYER L'EMAIL
    // ========================================
    
    // Construire le contenu de l'email
    $email_subject = "Nouveau message de contact : $subject";
    $email_body = "Vous avez reçu un nouveau message depuis votre portfolio.\n\n";
    $email_body .= "========================================\n";
    $email_body .= "Nom: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Sujet: $subject\n";
    $email_body .= "========================================\n\n";
    $email_body .= "Message:\n";
    $email_body .= "$message\n\n";
    $email_body .= "========================================\n";
    $email_body .= "Envoyé le : " . date('d/m/Y à H:i:s') . "\n";
    $email_body .= "IP : " . ($ip_address ?? 'unknown') . "\n";
    
    // En-têtes de l'email
    $headers = "From: Portfolio Contact <noreply@" . $_SERVER['HTTP_HOST'] . ">\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Sender-Name: $name\r\n";
    $headers .= "X-Sender-Email: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Envoyer l'email
    // Note: En local (MAMP), mail() ne fonctionne pas sans configuration SMTP
    // En production sur o2switch, la fonction mail() fonctionne directement
    
    $email_sent = @mail(CONTACT_EMAIL, $email_subject, $email_body, $headers);
    
    if ($email_sent) {
        error_log("Email de contact envoyé avec succès à : " . CONTACT_EMAIL);
    } else {
        error_log("Échec de l'envoi de l'email de contact");
    }
    
    // ========================================
    // 3. REDIRECTION SELON LE RÉSULTAT
    // ========================================
    
    // Si au moins une des deux opérations a réussi, on considère que c'est un succès
    if ($email_sent || $db_saved) {
        header("Location: " . $success_redirect);
        exit;
    } else {
        header("Location: " . $error_redirect);
        exit;
    }
    
} else {
    // Si la page est accédée directement, rediriger vers l'accueil
    header("Location: index.php");
    exit;
}
?>
