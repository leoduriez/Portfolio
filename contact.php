<?php
// Configuration
$to_email = "leo.duriezj@gmail.com";
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
    
    // Construire le contenu de l'email
    $email_subject = "Nouveau message de contact : $subject";
    $email_body = "Vous avez reçu un nouveau message depuis votre portfolio.\n\n";
    $email_body .= "Nom: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Sujet: $subject\n\n";
    $email_body .= "Message:\n$message\n";
    
    // En-têtes de l'email
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Envoyer l'email
    // Note: En local (MAMP), mail() ne fonctionne pas sans configuration
    // Pour tester, on force le succès. En production, décommenter la vraie logique.
    
    // VERSION TEST (à utiliser en local)
    header("Location: " . $success_redirect);
    exit;
    
    /* VERSION PRODUCTION (à décommenter pour la mise en ligne)
    if (mail($to_email, $email_subject, $email_body, $headers)) {
        // Succès
        header("Location: " . $success_redirect);
        exit;
    } else {
        // Erreur
        header("Location: " . $error_redirect);
        exit;
    }
    */
    
} else {
    // Si la page est accédée directement, rediriger vers l'accueil
    header("Location: index.php");
    exit;
}
?>
