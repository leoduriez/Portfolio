<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo isset($meta_description) ? $meta_description : 'Portfolio de Léo Duriez, Développeur Web Full-Stack basé à Paris. Découvrez mes projets de développement web avec React, Node.js et MySQL pour créer des applications modernes et performantes.'; ?>">
    <meta property="og:title" content="<?php echo isset($og_title) ? $og_title : 'Portfolio Développeur Web - Léo Duriez'; ?>">
    <meta property="og:description" content="<?php echo isset($og_description) ? $og_description : 'Découvrez mes projets de développement web Full-Stack à Paris.'; ?>">
    <meta property="og:image" content="<?php echo isset($og_image) ? $og_image : 'assets/img/image-projet-1.jpg'; ?>">
    <meta property="og:url" content="https://leo-duriez.fr">
    <meta name="twitter:card" content="summary_large_image">

    <title><?php echo isset($page_title) ? $page_title : 'Léo Duriez – Développeur Web Full-Stack à Paris | React, Node.js & MySQL'; ?></title>
    <link rel="canonical" href="https://leo-duriez.fr/">
    <link rel="alternate" href="https://leo-duriez.fr" hreflang="fr">
    <link rel="alternate" href="https://leo-duriez.fr/en" hreflang="en">
    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Léo Duriez",
          "jobTitle": "Développeur Web Full-Stack",
          "url": "https://leo-duriez.fr",
          "sameAs": [
            "https://www.linkedin.com/in/léo-duriez-b213462b7/",
            "https://github.com/leoduriez"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Paris",
            "addressCountry": "FR"
          }
        }
    </script>
    <link rel="stylesheet" href="assets/style.css"/>
    <link rel="icon" type="image/x-icon" href="assets/img/logo.webp">
  </head>
  <body>

    <!-- Grid Background Canvas -->
    <canvas id="grid"></canvas>

    <!-- Scroll Progress Bar -->
    <div class="scroll-progress"></div>

    <!-- Back to Top Button -->
    <div class="back-to-top">↑</div>
