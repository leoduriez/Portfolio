"use strict";

// ======================================
// GRID BACKGROUND
// ======================================
const canvas = document.getElementById("grid");
if (!canvas) {
  console.warn('Canvas element with id "grid" not found');
}
const ctx = canvas ? canvas.getContext("2d") : null;

let width = canvas ? canvas.width = window.innerWidth : 0;
let height = canvas ? canvas.height = window.innerHeight : 0;

let mouse = { x: -9999, y: -9999 };
const squareSize = 80;
const grid = [];

function initGrid() {
  grid.length = 0;
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      grid.push({
        x,
        y,
        alpha: 0,
        fading: false,
        lastTouched: 0,
      });
    }
  }
}

function getCellAt(x, y) {
  return grid.find(cell =>
    x >= cell.x && x < cell.x + squareSize &&
    y >= cell.y && y < cell.y + squareSize
  );
}

if (canvas) {
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initGrid();
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const cell = getCellAt(mouse.x, mouse.y);
    if (cell && cell.alpha === 0) {
      cell.alpha = 1;
      cell.lastTouched = Date.now();
      cell.fading = false;
    }
  });
}

function drawGrid() {
  if (!ctx) return;
  
  ctx.clearRect(0, 0, width, height);
  const now = Date.now();

  for (let i = 0; i < grid.length; i++) {
    const cell = grid[i];

    // Start fading after 500ms
    if (cell.alpha > 0 && !cell.fading && now - cell.lastTouched > 500) {
      cell.fading = true;
    }

    if (cell.fading) {
      cell.alpha -= 0.02;
      if (cell.alpha <= 0) {
        cell.alpha = 0;
        cell.fading = false;
      }
    }

    if (cell.alpha > 0) {
      const centerX = cell.x + squareSize / 2;
      const centerY = cell.y + squareSize / 2;

      const gradient = ctx.createRadialGradient(
        centerX, centerY, 5,
        centerX, centerY, squareSize
      );
      gradient.addColorStop(0, `rgba(221, 181, 121, ${cell.alpha})`);
      gradient.addColorStop(1, `rgba(221, 181, 121, 0)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.3;
      ctx.strokeRect(cell.x + 0.5, cell.y + 0.5, squareSize - 1, squareSize - 1);
    }
  }

  requestAnimationFrame(drawGrid);
}

if (canvas && ctx) {
  initGrid();
  drawGrid();
}

// ======================================
// CUSTOM CURSOR - Dot follows mouse, Circle follows dot
// ======================================
// Create custom cursor elements
const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
const cursorCircle = document.createElement('div');
cursorCircle.classList.add('cursor-circle');
document.body.appendChild(cursorDot);
document.body.appendChild(cursorCircle);

// Track mouse position
let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let circleX = 0;
let circleY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor - dot follows mouse instantly, circle follows dot with delay
function animateCursor() {
  // Dot follows mouse directly (fast)
  const dotSpeed = 1;
  dotX += (mouseX - dotX) * dotSpeed;
  dotY += (mouseY - dotY) * dotSpeed;
  
  // Circle follows the dot position with delay (slow)
  const circleSpeed = 0.15;
  circleX += (dotX - circleX) * circleSpeed;
  circleY += (dotY - circleY) * circleSpeed;
  
  cursorDot.style.left = dotX + 'px';
  cursorDot.style.top = dotY + 'px';
  cursorCircle.style.left = circleX + 'px';
  cursorCircle.style.top = circleY + 'px';
  
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Add hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .nav-btn, .project-card, .filter-btn, .skill-tag, .cv-scroll-btn, .submit-btn');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorCircle.classList.add('hover');
    cursorDot.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursorCircle.classList.remove('hover');
    cursorDot.classList.remove('hover');
  });
});

// ======================================
// MICRO-INTERACTIONS AVANCÉES
// ======================================

// Effet de magnetic pour les boutons
document.querySelectorAll('.magnetic-button').forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translate(0, 0)';
  });
});

// Animation d'entrée progressive pour les éléments
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Animation différée pour les éléments multiples
      const elements = entry.target.querySelectorAll('.fade-in-element');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 100);
      });
    }
  });
}, observerOptions);

// Observer les sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Effet de typing pour les titres principaux
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Appliquer l'effet de typing au chargement
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('#hero h1');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.classList.add('typing-effect');
    // typeWriter(heroTitle, originalText, 30);
  }
});

// Micro-interactions pour les cartes
document.querySelectorAll('.project-card, .process-step, .skill-category').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Animation smooth pour les liens
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ======================================
// UTILITAIRES
// ======================================

/**
 * Fonction debounce pour limiter la fréquence d'exécution des fonctions
 * @param {Function} func - Fonction à exécuter
 * @param {number} wait - Délai en ms
 * @return {Function} - Fonction optimisée
 */
const debounce = (func, wait = 10) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

/**
 * Fonction pour faire défiler vers une section spécifique
 * @param {string} sectionId - ID de la section cible
 * @param {number} offset - Décalage vertical (par défaut: -80px)
 */
function scrollToSection(sectionId, offset = -80) {
  const target = document.querySelector(sectionId);
  if (!target) return;
  
  const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// ======================================
// CHARGEMENT INITIAL & LOADER
// ======================================

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 500);
  }
});

// ======================================
// NAVIGATION & SCROLLING
// ======================================

// Animation de la navbar au défilement
window.addEventListener('scroll', debounce(() => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
}));

// Indicateur de progression de défilement
const scrollProgress = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', debounce(() => {
  // Mise à jour de la barre de progression
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = `${scrolled}%`;
  }
  
  // Affichage du bouton retour en haut
  if (backToTop) {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
}));

// Gestion du bouton retour en haut
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Activation des liens de navigation selon la section visible
function handleNavHighlight() {
  // Obtenir toutes les sections
  const sections = document.querySelectorAll('section[id]');
  
  // Obtenir la position de défilement actuelle
  const scrollPosition = window.scrollY;
  
  // Hauteur de la navbar pour l'offset
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar ? navbar.offsetHeight : 80;
  
  // Vérifier quelle section est actuellement visible
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight - 20; // 20px de marge
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Retirer la classe active de tous les liens
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
      });
      
      // Ajouter la classe active au lien correspondant à la section
      const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Écouter l'événement de défilement pour la navigation active
window.addEventListener('scroll', debounce(handleNavHighlight, 100));

// ======================================
// INITIALISATION AU CHARGEMENT DU DOM
// ======================================

document.addEventListener('DOMContentLoaded', function() {
  // Gestion des liens de navigation
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    if (!link.classList.contains('nav-link')) {
      link.classList.add('nav-link');
    }
  });

  // Gestion des liens nav interne
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      // Ne traiter que les liens internes (commençant par #)
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Fermer le menu mobile si ouvert
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        if (nav && nav.classList.contains('active')) {
          nav.classList.remove('active');
          if (burger) burger.classList.remove('burger-active');
        }
        
        // Défilement vers la section cible
        setTimeout(() => {
          // Calculer l'offset selon la taille de la navbar
          const navbar = document.querySelector('#navbar');
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const offset = -navbarHeight;
          
          scrollToSection(targetId, offset);
        }, 10);
      }
    });
  });
  
  // Gestion du bouton "Voir mon travail"
  const scrollBtn = document.querySelector('.scroll-btn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToSection('#projets');
    });
  }
  
  // Gestion du logo (retour en haut)
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Gestion d'un éventuel bouton CV
  const cvBtn = document.querySelector('.cv-scroll-btn');
  if (cvBtn) {
    cvBtn.addEventListener('click', function(e) {
      // Laisser le comportement par défaut pour télécharger le fichier
      // Si une logique personnalisée est nécessaire, elle pourrait être ajoutée ici
    });
  }
  
  // Initialiser la mise en évidence des liens de navigation
  setTimeout(handleNavHighlight, 100);
});

// ======================================
// ANIMATIONS ET EFFETS VISUELS
// ======================================

// Observer pour les éléments à animer lors du défilement
const createObserver = (animationClass) => {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100); // Décalage progressif
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
};

const fadeInObserver = createObserver('visible');

// Observer les éléments avec animation d'entrée
document.querySelectorAll('.fade-in-element, .slide-in-left, .slide-in-right, .slide-in-bottom')
.forEach(element => {
  fadeInObserver.observe(element);
});

// Observer pour les éléments qui sortent de la vue
const fadeOutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.add('hidden');
    } else {
      entry.target.classList.remove('hidden');
    }
  });
}, { threshold: 0.1 });

// Observer les éléments qui doivent s'animer en sortant
document.querySelectorAll('.fade-out-element').forEach(element => {
  fadeOutObserver.observe(element);
});

// Effet de parallaxe pour les images
const parallaxImages = document.querySelectorAll('.parallax-img');

window.addEventListener('scroll', debounce(() => {
  parallaxImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Calculer le ratio de visibilité
      const visibilityRatio = Math.min(
        (windowHeight - rect.top) / (windowHeight + rect.height),
        1
      );
      
      // Effet plus subtil
      const moveY = visibilityRatio * 10; // Déplacement vertical réduit
      const scale = 1 + (visibilityRatio * 0.05); // Zoom plus subtil
      
      img.style.transform = `translateY(${moveY}px) scale(${scale})`;
    }
  });
}, 20)); // Augmenter légèrement la fréquence pour plus de fluidité

// Animation des cartes de projet
const projectCards = document.querySelectorAll('.project-card');

// Observer pour les cartes de projet avec animations différentes
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Animations alternées selon l'index
      if (index % 2 === 0) {
        entry.target.classList.add('slide-in-left');
      } else {
        entry.target.classList.add('slide-in-right');
      }
      projectObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Observer les cartes de projet avec délai
projectCards.forEach((card, index) => {
  setTimeout(() => {
    projectObserver.observe(card);
  }, index * 200); // Ajoute un délai entre chaque carte
});

// Observer pour les sections avec animations d'entrée/sortie
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const section = entry.target;
    const elements = section.querySelectorAll('.fade-in-element, .about-p');
    
    if (entry.isIntersecting) {
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100 * index);
      });
    } else {
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
        }, 50 * index);
      });
    }
  });
}, { threshold: 0.1, rootMargin: '-100px' });

// Observer les sections
document.querySelectorAll('section').forEach(section => {
  sectionObserver.observe(section);
});

// ======================================
// FILTRES DE PROJETS
// ======================================

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCardsFilter = document.querySelectorAll('.project-card');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activer le bouton cliqué
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      // Filtrer les projets
      projectCardsFilter.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

// ======================================
// MODALS ET POPUPS
// ======================================

// Gestion des modals pour mentions légales
const legalModal = document.getElementById('legal-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Contenu des mentions légales
const mentionsLegalesContent = `
  <h3>Éditeur du site</h3>
  <p>Léo Duriez<br>
  Adresse : Paris, France<br>
  Email : <a href="mailto:leo.duriezj@gmail.com">leo.duriezj@gmail.com</a></p>

  <h3>Hébergement</h3>
  <p>Ce site est hébergé par O2Swtich<br>
  Adresse : o2switch - 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France<br>
  Téléphone : 04 44 44 60 40</p>

  <h3>Propriété intellectuelle</h3>
  <p>L'ensemble du contenu de ce site (textes, images, éléments graphiques, logo, etc.) est la propriété exclusive de Léo Duriez. Toute reproduction ou modification est interdite sans autorisation écrite préalable.</p>

  <h3>Crédits</h3>
  <p>Design et développement : Léo Duriez</p>
`;

// Contenu de la politique de confidentialité
const politiqueConfidentialiteContent = `
  <h3>Collecte des informations</h3>
  <p>Ce site ne collecte aucune donnée personnelle hormis celles transmises par email.</p>

  <h3>Utilisation des cookies</h3>
  <p>Ce site n'utilise pas de cookies de suivi. Seuls des cookies techniques sont utilisés.</p>

  <h3>Liens externes</h3>
  <p>Léo Duriez n'est pas responsable des pratiques de confidentialité des sites externes.</p>

  <h3>Contact</h3>
  <p>Email : <a href="mailto:leo.duriezj@gmail.com">leo.duriezj@gmail.com</a></p>
`;

// Fonction pour ouvrir la modal
function openModal(title, content) {
  if (modalTitle && modalContent) {
    modalTitle.innerHTML = title;
    modalContent.innerHTML = content;
    if (legalModal) {
      legalModal.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  }
}

// Listeners pour les modals
document.getElementById('mentionsLegales')?.addEventListener('click', function(e) {
  e.preventDefault();
  openModal("Mentions Légales", mentionsLegalesContent);
});

document.getElementById('politiqueConfidentialite')?.addEventListener('click', function(e) {
  e.preventDefault();
  openModal("Politique de Confidentialité", politiqueConfidentialiteContent);
});

// Fermeture des modals
closeModal?.addEventListener('click', function() {
  if (legalModal) {
    legalModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

window.addEventListener('click', function(e) {
  if (e.target === legalModal) {
    legalModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// ======================================
// MEDIA QUERIES ET RESPONSIVE
// ======================================

// Gestion des changements de taille d'écran
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMediaQueryChange(e) {
  // Adapter l'offset de défilement aux mobiles/tablettes
  const isMobile = e.matches;
  const defaultOffset = isMobile ? -70 : -80; // Offset plus petit sur mobile
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.dataset.offset = defaultOffset;
  });
}

// Exécuter une fois au chargement
handleMediaQueryChange(mediaQuery);
// Puis écouter les changements
mediaQuery.addEventListener('change', handleMediaQueryChange);



// projet-pacific

// Animation pour les éléments qui apparaissent au scroll - Page d'audit Le Pacific
document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour loader
  const loader = document.querySelector('.loader');
  
  // Cacher le loader après le chargement complet
  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 800);
  });
  
  // Observer pour animer les éléments au scroll
  const fadeElements = document.querySelectorAll('.fade-in-element, .ux-problem-card, .strength-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
  
  // Barre de progression de défilement
  window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    document.querySelector('.scroll-progress').style.width = scrollProgress + '%';
    
    // Afficher/masquer le bouton de retour en haut
    if (scrollTop > 600) {
      document.querySelector('.back-to-top').classList.add('visible');
    } else {
      document.querySelector('.back-to-top').classList.remove('visible');
    }
  });
  
  // Fonctionnalité du bouton de retour en haut
  document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Navigation sticky
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.querySelector('nav').classList.add('scrolled');
    } else {
      document.querySelector('nav').classList.remove('scrolled');
    }
  });
  
  // Menu burger sur mobile
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  
  if (burger) {
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      burger.classList.toggle('burger-active');
      
      const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
      burger.setAttribute('aria-expanded', !expanded);
      
      const links = navLinks.querySelectorAll('a');
      links.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `linkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
    });
  }
  
  // Modales pour mentions légales et politique de confidentialité
  const modal = document.getElementById('legal-modal');
  const closeModal = document.querySelector('.close-modal');
  const mentionsLegales = document.getElementById('mentionsLegales');
  const politiqueConfidentialite = document.getElementById('politiqueConfidentialite');
  
  if (mentionsLegales && politiqueConfidentialite && modal) {
    mentionsLegales.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('modal-title').innerHTML = '<h2>Mentions Légales</h2>';
      document.getElementById('modal-body').innerHTML = `
        <p>Le site web leo-duriez.fr est édité par Léo Duriez, Développeur Web Full-Stack indépendant.</p>
        <p><strong>Contact :</strong> leo.duriezj@gmail.com</p>
        <p><strong>Hébergement :</strong> OVH SAS - 2 rue Kellermann - 59100 Roubaix - France</p>
        <p>Les informations contenues sur ce site sont aussi précises que possible, mais peuvent toutefois contenir des inexactitudes.</p>
      `;
      modal.style.display = 'block';
    });
    
    politiqueConfidentialite.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('modal-title').innerHTML = '<h2>Politique de Confidentialité</h2>';
      document.getElementById('modal-body').innerHTML = `
        <p>Le site leo-duriez.fr respecte votre vie privée et s'engage à protéger les données personnelles que vous pourriez lui fournir.</p>
        <p><strong>Données collectées :</strong> Les informations recueillies via les formulaires de contact ne sont utilisées que pour répondre à vos demandes et ne sont jamais partagées avec des tiers.</p>
        <p><strong>Cookies :</strong> Ce site n'utilise que des cookies techniques essentiels à son fonctionnement.</p>
        <p>Conformément à la loi, vous disposez d'un droit d'accès, de modification et de suppression de vos données.</p>
      `;
      modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  // Parallax sur les images
  document.addEventListener('mousemove', function(e) {
    const parallaxItems = document.querySelectorAll('.parallax-img');
    
    parallaxItems.forEach(item => {
      const speed = 0.01;
      const x = (window.innerWidth / 2 - e.pageX) * speed;
      const y = (window.innerHeight / 2 - e.pageY) * speed;
      
      item.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });
});

// Ajouts à intégrer dans le fichier JavaScript existant (app.js ou pacific-script.js)

document.addEventListener('DOMContentLoaded', function() {
  // Animation des éléments de la section méthodologie
  const methodologyItems = document.querySelectorAll('.methodology-item');
  const methodologyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  methodologyItems.forEach(item => {
    methodologyObserver.observe(item);
  });

  // Amélioration de l'expérience sur les cartes de problèmes UX
  const problemCards = document.querySelectorAll('.ux-problem-card');
  problemCards.forEach(card => {
    // Ajouter un effet de focus lors du survol
    card.addEventListener('mouseenter', function() {
      problemCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.style.opacity = '0.7';
        }
      });
    });

    card.addEventListener('mouseleave', function() {
      problemCards.forEach(otherCard => {
        otherCard.style.opacity = '1';
      });
    });
  });

  // Animation de l'icône d'impact dans le résumé d'impact
  const impactIcon = document.querySelector('.project-impact-summary .impact-icon');
  if (impactIcon) {
    setInterval(() => {
      impactIcon.style.transform = 'scale(1.1)';
      setTimeout(() => {
        impactIcon.style.transform = 'scale(1)';
      }, 300);
    }, 3000);
  }

  // Animation des métriques d'impact au défilement
  const impactMetrics = document.querySelectorAll('.impact-metric');
  const impactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const value = entry.target.querySelector('.impact-value');
        if (value) {
          // Animation de comptage
          const finalValue = value.textContent;
          value.textContent = "0%";
          
          let startValue = 0;
          let endValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
          let duration = 2000;
          let counter = setInterval(function() {
            startValue += 1;
            value.textContent = `+${startValue}%`;
            if (startValue >= endValue) {
              clearInterval(counter);
              value.textContent = finalValue;
            }
          }, duration / endValue);
        }
        
        // Ne déclencher l'animation qu'une seule fois
        impactObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

  impactMetrics.forEach(metric => {
    impactObserver.observe(metric);
  });

  // Animation pour la comparaison avant/après
  const comparisonItems = document.querySelectorAll('.comparison-item');
  
  comparisonItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const image = this.querySelector('img');
      if (image) {
        image.style.transform = 'scale(1.05)';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      const image = this.querySelector('img');
      if (image) {
        image.style.transform = 'scale(1)';
      }
    });
  });

  // Amélioration de l'animation des priorités dans la conclusion
  const priorityItems = document.querySelectorAll('.conclusion-priorities li');
  const priorityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.transform = 'translateX(0)';
          entry.target.style.opacity = '1';
        }, index * 100);
        priorityObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  priorityItems.forEach(item => {
    item.style.transform = 'translateX(-20px)';
    item.style.opacity = '0';
    item.style.transition = 'all 0.4s ease';
    priorityObserver.observe(item);
  });

  // Mise en évidence du point clé à retenir
  const keyTakeaway = document.querySelector('.key-takeaway');
  if (keyTakeaway) {
    setTimeout(() => {
      keyTakeaway.classList.add('highlight-pulse');
    }, 1000);
  }

  // Améliorer l'interaction avec la galerie de design
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      if (img) {
        // Créer une vue agrandie de l'image
        const overlay = document.createElement('div');
        overlay.classList.add('gallery-overlay');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';
        overlay.style.cursor = 'pointer';
        
        const enlargedImg = document.createElement('img');
        enlargedImg.src = img.src;
        enlargedImg.alt = img.alt;
        enlargedImg.style.maxWidth = '90%';
        enlargedImg.style.maxHeight = '90%';
        enlargedImg.style.objectFit = 'contain';
        enlargedImg.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.1)';
        enlargedImg.style.transition = 'transform 0.3s ease';
        
        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);
        
        // Ajouter une animation d'entrée
        overlay.style.opacity = '0';
        enlargedImg.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
          overlay.style.opacity = '1';
          enlargedImg.style.transform = 'scale(1)';
          overlay.style.transition = 'opacity 0.3s ease';
        }, 10);
        
        // Fermer l'overlay au clic
        overlay.addEventListener('click', function() {
          overlay.style.opacity = '0';
          enlargedImg.style.transform = 'scale(0.9)';
          
          setTimeout(() => {
            document.body.removeChild(overlay);
          }, 300);
        });
      }
    });
  });
});

// Effet parallaxe subtil sur l'image héro
const heroImage = document.querySelector('.project-hero img');
if (heroImage) {
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const speed = 0.05;
    
    if (scrollPosition <= 800) { // Limiter l'effet à la partie supérieure de la page
      heroImage.style.transform = `translateY(${scrollPosition * speed}px)`;
    }
  });
}

// ======================================
// MENU BURGER MOBILE
// ======================================
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');
  
  if (burgerMenu && navLinks) {
    // Toggle menu au clic sur le burger
    burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      
      // Mettre à jour l'attribut aria-expanded
      const isExpanded = this.classList.contains('active');
      this.setAttribute('aria-expanded', isExpanded);
      
      // Bloquer le scroll du body quand le menu est ouvert
      if (isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Fermer le menu au clic sur un lien
    navLinksItems.forEach(link => {
      link.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    
    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnBurger = burgerMenu.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnBurger && navLinks.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    
    // Fermer le menu si on redimensionne la fenêtre au-delà de 768px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
});