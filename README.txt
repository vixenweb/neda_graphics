Neda | Graphic Designer Portfolio

A modern, luxurious portfolio website for Neda, a graphic designer, featuring a purple/neon aesthetic, glassmorphism design, an animated 3D background, and full multilingual support (Persian / English / Arabic) with automatic RTL/LTR switching.

🔗 Live Demo: https://nedavisuals.ir

✨ Features
Multilingual support (FA / EN / AR) with a language switcher and automatic RTL/LTR layout.
Animated hero background powered by a custom WebGL shader (Three.js), rendered only while the hero section is visible for improved performance and battery efficiency.
Luxury glassmorphism UI with a purple/neon theme and subtle animations throughout the website.
Portfolio gallery with category filters (Logo, Poster, Business Card, Animation) and a lightbox preview.
Consultation form integrated directly with Formspree—no backend required.
Smart caching using a Service Worker for faster repeat visits.
Fully responsive and accessibility-conscious, including support for prefers-reduced-motion, aria-labels, and more.


🛠 Technologies
HTML5 & CSS3 (Custom Properties, no framework)
Vanilla JavaScript (no build tools)
Three.js for the animated hero shader
Formspree for contact form handling
Service Worker API for client-side caching
Vazirmatn font (Persian/Arabic) and Manrope font (English)


📁 Project Structure
├── index.html          # Main page structure
├── style.css           # Stylesheet
├── main.js             # Website logic (translations, gallery, contact form, hero animation, etc.)
├── sw.js               # Service Worker for static asset caching
├── .htaccess           # Server-side cache configuration (Apache/cPanel)
├── _headers            # Server-side cache configuration (Netlify/Cloudflare Pages)
└── assets/
    └── images/         # Gallery images, icons, and metadata assets


Multilingual content is managed using data-i18n attributes. All Persian, English, and Arabic translations are stored inside the translations object in main.js.

To add or edit translations, simply update that object.


📄 License

All design and content rights belong to Neda.

The source code is provided solely for this project and may not be copied, redistributed, or reused without permission.