// Traductions FR/EN pour le portfolio
const translations = {
  fr: {
    // Navigation
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_values: "Valeurs",
    nav_process: "Processus",
    nav_projects: "Projets",
    nav_contact: "Contact",
    
    // Hero Section
    hero_greeting: "Salut, je suis",
    hero_title: "Développeur Web Full-Stack",
    hero_location: "Basé à",
    hero_cv_btn: "Télécharger mon CV",
    hero_contact_btn: "Me contacter",
    
    // About Section
    about_title: "À PROPOS",
    about_p1: "Je suis Léo Duriez, Développeur Web Full-Stack passionné basé à Paris. Spécialisé dans la création d'applications web modernes et performantes, je maîtrise l'ensemble de la chaîne de développement.",
    about_p2: "Mon approche combine expertise technique et sens du détail pour créer des solutions web robustes et évolutives. Je travaille principalement avec React pour le frontend, Node.js pour le backend et MySQL pour la gestion des données.",
    about_p3: "Je suis disponible pour des projets freelance ou des opportunités professionnelles. N'hésitez pas à me contacter pour discuter de votre projet ou d'une collaboration.",
    
    // Values Section
    value1_title: "Rigueur",
    value1_desc: "Je m'engage à livrer un code propre, maintenable et bien documenté pour chaque projet.",
    value2_title: "Innovation",
    value2_desc: "Toujours à l'affût des dernières technologies pour proposer des solutions modernes.",
    value3_title: "Collaboration",
    value3_desc: "Le travail d'équipe et la communication sont au cœur de ma démarche professionnelle.",
    
    // Skills Section
    skills_title: "COMPÉTENCES",
    
    // Values Section
    values_title: "MES VALEURS",
    
    // Process Section
    process_title: "PROCESSUS DE DÉVELOPPEMENT",
    process_step1_title: "1. Analyse",
    process_step1_desc: "Étude des besoins client, analyse des fonctionnalités et définition de l'architecture technique du projet.",
    process_step2_title: "2. Conception",
    process_step2_desc: "Création de maquettes, choix des technologies et structuration de la base de données.",
    process_step3_title: "3. Développement",
    process_step3_desc: "Codage frontend et backend, intégration des fonctionnalités et optimisation des performances.",
    process_step4_title: "4. Déploiement",
    process_step4_desc: "Tests, corrections de bugs, mise en production et maintenance continue de l'application.",
    
    // Projects Section
    projects_title: "PROJETS",
    filter_all: "Tous",
    filter_fullstack: "Full-Stack",
    filter_frontend: "Frontend",
    filter_backend: "Backend",
    project1_title: "Site web professionnel",
    project1_subtitle: "Marbrier Armando Castanheira",
    project2_title: "Application web moderne",
    project2_subtitle: "Interface React & Node.js",
    
    // Contact Section
    contact_title: "CONTACTEZ-MOI",
    contact_intro: "Vous avez un projet en tête ? N'hésitez pas à me contacter !",
    contact_success: "Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
    contact_error: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou me contacter directement par email.",
    form_name: "Nom",
    form_email: "Email",
    form_subject: "Sujet",
    form_message: "Message",
    form_submit: "Envoyer le message",
    
    // Footer
    footer_rights: "Tous droits réservés",
    footer_legal: "Mentions légales",
    footer_privacy: "Politique de confidentialité"
  },
  
  en: {
    // Navigation
    nav_about: "About",
    nav_skills: "Skills",
    nav_values: "Values",
    nav_process: "Process",
    nav_projects: "Projects",
    nav_contact: "Contact",
    
    // Hero Section
    hero_greeting: "Hi, I'm",
    hero_title: "Full-Stack Web Developer",
    hero_location: "Based in",
    hero_cv_btn: "Download my CV",
    hero_contact_btn: "Contact me",
    
    // About Section
    about_title: "ABOUT",
    about_p1: "I'm Léo Duriez, a passionate Full-Stack Web Developer based in Paris. Specialized in creating modern and high-performance web applications, I master the entire development chain.",
    about_p2: "My approach combines technical expertise and attention to detail to create robust and scalable web solutions. I mainly work with React for frontend, Node.js for backend, and MySQL for data management.",
    about_p3: "I'm available for freelance projects or professional opportunities. Feel free to contact me to discuss your project or a collaboration.",
    
    // Values Section
    value1_title: "Rigor",
    value1_desc: "I commit to delivering clean, maintainable, and well-documented code for every project.",
    value2_title: "Innovation",
    value2_desc: "Always on the lookout for the latest technologies to offer modern solutions.",
    value3_title: "Collaboration",
    value3_desc: "Teamwork and communication are at the heart of my professional approach.",
    
    // Skills Section
    skills_title: "SKILLS",
    
    // Values Section
    values_title: "MY VALUES",
    
    // Process Section
    process_title: "DEVELOPMENT PROCESS",
    process_step1_title: "1. Analysis",
    process_step1_desc: "Study of client needs, feature analysis, and definition of the project's technical architecture.",
    process_step2_title: "2. Design",
    process_step2_desc: "Creation of mockups, choice of technologies, and database structuring.",
    process_step3_title: "3. Development",
    process_step3_desc: "Frontend and backend coding, feature integration, and performance optimization.",
    process_step4_title: "4. Deployment",
    process_step4_desc: "Testing, bug fixes, production deployment, and continuous application maintenance.",
    
    // Projects Section
    projects_title: "PROJECTS",
    filter_all: "All",
    filter_fullstack: "Full-Stack",
    filter_frontend: "Frontend",
    filter_backend: "Backend",
    project1_title: "Professional website",
    project1_subtitle: "Marble worker Armando Castanheira",
    project2_title: "Modern web application",
    project2_subtitle: "React & Node.js Interface",
    
    // Contact Section
    contact_title: "CONTACT ME",
    contact_intro: "Have a project in mind? Feel free to contact me!",
    contact_success: "Your message has been sent successfully! I will reply to you as soon as possible.",
    contact_error: "An error occurred while sending your message. Please try again or contact me directly by email.",
    form_name: "Name",
    form_email: "Email",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send message",
    
    // Footer
    footer_rights: "All rights reserved",
    footer_legal: "Legal notice",
    footer_privacy: "Privacy policy"
  }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
  // Sauvegarder la langue choisie
  localStorage.setItem('preferredLanguage', lang);
  
  // Mettre à jour tous les éléments avec data-translate
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      // Pour les inputs et textareas, modifier le placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Mettre à jour les boutons de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  
  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = lang;
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
  changeLanguage(savedLang);
  
  // Ajouter les event listeners sur les boutons de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
});
