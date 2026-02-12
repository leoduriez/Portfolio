<?php
// Variables pour les meta tags
$page_title = "Léo Duriez – Développeur Web Full-Stack à Paris | React, Node.js & MySQL";
$meta_description = "Portfolio de Léo Duriez, Développeur Web Full-Stack basé à Paris. Découvrez mes projets de développement web avec React, Node.js et MySQL pour créer des applications modernes et performantes.";
$og_title = "Portfolio Développeur Web - Léo Duriez";
$og_description = "Découvrez mes projets de développement web Full-Stack à Paris.";
$og_image = "assets/img/image-projet-1.jpg";

// Vérifier les messages de confirmation du formulaire de contact
$contact_success = isset($_GET['success']) && $_GET['success'] == '1';
$contact_error = isset($_GET['error']) && $_GET['error'] == '1';

// Include header
include 'includes/header.php';

// Include navigation
include 'includes/nav.php';
?>

    <!-- Hero Section -->
    <section id="hero">
        <div class="container">
            <h1><span data-translate="hero_greeting">Salut, je suis</span> <span class="highlight">Léo</span><br><span class="designer-title" data-translate="hero_title">Développeur Web Full-Stack</span><br><span data-translate="hero_location">Basé à</span> <span class="highlight">Paris</span></h1>
            <div class="hero-buttons">
                <a href="assets/pdf/cv-duriez-leo.pdf" target="_blank" class="cv-scroll-btn shimmer-button magnetic-button" data-translate="hero_cv_btn">
                    Télécharger mon CV
                </a>
                <a href="#contact" class="cv-scroll-btn shimmer-button magnetic-button" data-translate="hero_contact_btn">
                    Me contacter
                </a>
            </div>
            
        </div>
    </section>
    
   <!-- About Section -->
    <section id="apropos">
        <div class="container">
            <h2 class="fade-in-element" data-translate="about_title">À PROPOS</h2>
            <div class="about-content">
                <p class="about-p fade-in-element" data-translate="about_p1">Je suis Léo Duriez, Développeur Web Full-Stack passionné basé à Paris.
                    Spécialisé dans la création d'applications web modernes et performantes, je maîtrise l'ensemble de la chaîne de développement.</p>
                <br>
                <p class="about-p fade-in-element" data-translate="about_p2">Mon approche combine expertise technique et sens du détail pour créer des solutions web robustes et évolutives. Je travaille principalement avec React pour le frontend, Node.js pour le backend et MySQL pour la gestion des données.</p>
                <br>
                <p class="about-p fade-in-element" data-translate="about_p3">Je suis disponible pour des projets freelance ou des opportunités professionnelles.
                    N'hésitez pas à me contacter pour discuter de votre projet ou d'une collaboration.</p>
            </div>
        </div>
    </section>

    <!-- Section compétences -->
<section id="competences">
    <div class="container">
            <h2 class="fade-in-element" data-translate="skills_title">COMPÉTENCES</h2>
        <div class="skills-grid">
            <div class="skill-category fade-in-element">
                <h3>Frontend</h3>
                <div class="skill-tags">
                    <span class="skill-tag">React</span>
                    <span class="skill-tag">HTML5</span>
                    <span class="skill-tag">CSS3</span>
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">Responsive Design</span>
                </div>
            </div>
            <div class="skill-category fade-in-element">
                <h3>Backend</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Node.js</span>
                    <span class="skill-tag">Express</span>
                    <span class="skill-tag">API REST</span>
                    <span class="skill-tag">MySQL</span>
                </div>
            </div>
            <div class="skill-category fade-in-element">
                <h3>Outils & Méthodes</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Git</span>
                    <span class="skill-tag">GitHub</span>
                    <span class="skill-tag">VS Code</span>
                    <span class="skill-tag">Agile</span>
                </div>
            </div>
            <div class="skill-category fade-in-element">
                <h3>Autres</h3>
                <div class="skill-tags">
                    <span class="skill-tag">SEO</span>
                    <span class="skill-tag">Performance Web</span>
                    <span class="skill-tag">Accessibilité</span>
                    <span class="skill-tag">UX/UI</span>
                </div>
            </div>
        </div>
    </div>
</section>

    <!-- Section Mes Valeurs -->
    <section id="valeurs">
        <div class="container">
            <h2 class="fade-in-element" data-translate="values_title">MES VALEURS</h2>
            <div class="values-grid">
                <div class="value-card fade-in-element">
                    <div class="value-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
                        </svg>
                    </div>
                    <h3 data-translate="value1_title">Rigueur</h3>
                    <p data-translate="value1_desc">Je m'engage à livrer un code propre, maintenable et bien documenté pour chaque projet.</p>
                </div>
                <div class="value-card fade-in-element">
                    <div class="value-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L12 6"/>
                            <path d="M12 18L12 22"/>
                            <circle cx="12" cy="12" r="4"/>
                            <path d="M4.93 4.93l2.83 2.83"/>
                            <path d="M16.24 16.24l2.83 2.83"/>
                            <path d="M2 12h4"/>
                            <path d="M18 12h4"/>
                            <path d="M4.93 19.07l2.83-2.83"/>
                            <path d="M16.24 7.76l2.83-2.83"/>
                        </svg>
                    </div>
                    <h3 data-translate="value2_title">Innovation</h3>
                    <p data-translate="value2_desc">Toujours à l'affût des dernières technologies pour proposer des solutions modernes.</p>
                </div>
                <div class="value-card fade-in-element">
                    <div class="value-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                    <h3 data-translate="value3_title">Collaboration</h3>
                    <p data-translate="value3_desc">Le travail d'équipe et la communication sont au cœur de ma démarche professionnelle.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION PROCESSUS -->
<section id="processus">
    <div class="container">
        <h2 class="fade-in-element" data-translate="process_title">PROCESSUS DE DÉVELOPPEMENT</h2>
        <div class="process-steps">
            <div class="process-step fade-in-element">
                <h3 data-translate="process_step1_title">1. Analyse</h3>
                <p data-translate="process_step1_desc">Étude des besoins client, analyse des fonctionnalités et définition de l'architecture technique du projet.</p>
            </div>
            <div class="process-step fade-in-element">
                <h3 data-translate="process_step2_title">2. Conception</h3>
                <p data-translate="process_step2_desc">Création de maquettes, choix des technologies et structuration de la base de données.</p>
            </div>
            <div class="process-step fade-in-element">
                <h3 data-translate="process_step3_title">3. Développement</h3>
                <p data-translate="process_step3_desc">Codage frontend et backend, intégration des fonctionnalités et optimisation des performances.</p>
            </div>
            <div class="process-step fade-in-element">
                <h3 data-translate="process_step4_title">4. Déploiement</h3>
                <p data-translate="process_step4_desc">Tests, corrections de bugs, mise en production et maintenance continue de l'application.</p>
            </div>
        </div>
    </div>
</section>

    <!-- Projects Section -->
    <section id="projets">
        <div class="container">
            <h2 class="fade-in-element" data-translate="projects_title">PROJETS</h2>
            <div class="project-filters fade-in-element">
                <button class="filter-btn shimmer-button" data-filter="all" data-translate="filter_all">Tous</button>
                <button class="filter-btn shimmer-button" data-filter="fullstack" data-translate="filter_fullstack">Full-Stack</button>
                <button class="filter-btn shimmer-button" data-filter="frontend" data-translate="filter_frontend">Frontend</button>
                <button class="filter-btn shimmer-button" data-filter="backend" data-translate="filter_backend">Backend</button>
            </div>
            <div class="projects-grid">
                <!-- Project Armando Castanheira -->
                <div class="project-card parallax-img" data-category="fullstack" onclick="window.open('https://armando-castanheira.fr', '_blank')">
                    <img src="assets/img/mockup-armando-castanheira.webp" alt="Site web Armando Castanheira : marbrier professionnel" class="project-img" loading="lazy">
                    <h3 class="project-title" data-translate="project1_title">Site web professionnel</h3>
                    <p class="project-subtitle" data-translate="project1_subtitle">Marbrier Armando Castanheira</p>
                    <div class="project-tech">
                        <span class="tech-tag">WordPress</span>
                        <span class="tech-tag">HTML/CSS</span>
                        <span class="tech-tag">PHP</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                </div>

                <!-- Project 2 - Exemple -->
                <div class="project-card parallax-img" data-category="frontend" onclick="window.location.href='projet2.php'">
                    <img src="assets/img/mockup-lyk.png" alt="Application web moderne avec React" class="project-img" loading="lazy">
                    <h3 class="project-title" data-translate="project2_title">Application web moderne</h3>
                    <p class="project-subtitle" data-translate="project2_subtitle">Interface React & Node.js</p>
                    <div class="project-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <h2 class="fade-in-element" data-translate="contact_title">CONTACTEZ-MOI</h2>
            <p class="contact-intro fade-in-element" data-translate="contact_intro">Vous avez un projet en tête ? N'hésitez pas à me contacter !</p>
            
            <?php if ($contact_success): ?>
                <div class="alert alert-success fade-in-element">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span data-translate="contact_success">Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
                </div>
            <?php endif; ?>
            
            <?php if ($contact_error): ?>
                <div class="alert alert-error fade-in-element">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span data-translate="contact_error">Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou me contacter directement par email.</span>
                </div>
            <?php endif; ?>
            
            <form class="contact-form fade-in-element" id="contactForm" action="contact.php" method="POST">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name" data-translate="form_name">Nom *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email" data-translate="form_email">Email *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="subject" data-translate="form_subject">Sujet *</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                    <label for="message" data-translate="form_message">Message *</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" class="submit-btn shimmer-button" data-translate="form_submit">Envoyer le message</button>
            </form>
        </div>
    </section>

<?php
// Include footer
include 'includes/footer.php';
?>
