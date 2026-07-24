/* ==========================================================================
   ندا | پورتفولیو طراح گرافیک — main.js
   ========================================================================== */

(() => {
  'use strict';

  // ---------- Translation Data ----------
  const translations = {
    fa: {
      'meta.title': 'ندا | طراح گرافیک حرفه‌ای — طراحی لوگو، هویت بصری و پوستر',
      'meta.description': 'ندا، طراح گرافیک با بیش از ۳ سال تجربه در طراحی لوگو، هویت بصری برند، پوستر و کارت ویزیت. از ایده تا واقعیت، خلق آثاری ماندگار برای برند شما.',
      'meta.keywords': 'طراح گرافیک, طراحی لوگو, هویت بصری, طراحی پوستر, کارت ویزیت, برندینگ, گرافیست, ندا, طراحی گرافیک لوکس',
      'meta.ogTitle': 'ندا | طراح گرافیک حرفه‌ای',
      'meta.ogDescription': 'از ایده تا واقعیت با ندا — طراحی لوگو، هویت بصری، پوستر و کارت ویزیت با کیفیتی لوکس و حرفه‌ای.',
      'meta.ogSiteName': 'ندا | طراح گرافیک',
      'skipLink': 'رفتن به محتوای اصلی',
      'logo.name': 'ندا',
      'logo.role': 'طراح گرافیک',
      'nav.home': 'خانه',
      'nav.about': 'درباره من',
      'nav.portfolio': 'گالری',
      'nav.collab': 'همکاری',
      'nav.contact': 'ارتباط با من',
      'header.cta': 'شروع پروژه',
      'hero.eyebrow': 'طراح گرافیک',
      'hero.titleSmall': 'از ایده تا واقعیت با',
      'hero.titleBig': 'نـــدا',
      'hero.subtitle': 'طراحی گرافیک جایی‌ست که خلاقیت با دقت و حرفه‌ای‌گری پیوند می‌خورد؛ من به برندها هویت می‌بخشم و ایده‌های شما را به آثاری بصری ماندگار تبدیل می‌کنم.',
      'hero.viewPortfolio': 'مشاهده نمونه کارها',
      'hero.startCollab': 'شروع همکاری',
      'stats.yearsExperience': 'سال تجربه',
      'stats.projects': 'پروژه موفق',
      'stats.clients': 'مشتری راضی',
      'stats.satisfaction': 'رضایت مشتریان',
      'about.eyebrow': 'من را بیشتر بشناسید',
      'about.title': 'درباره من',
      'about.bio1': ' من ندا هستم. متولد 1370 و فارغ‌التحصیل کارشناسی گرافیک.',
      'about.bio2': 'بیش از سه سال است که در زمینه طراحی گرافیک، لوگو، تدوین و ساخت انیمیشن فعالیت میکنم و دوره های تخصصی تدوین با Adobe Premiere، موبایل گرافی و هوش مصنوعی را گذرانده ام. ',
      'about.bio3': 'در هر پروژه سعی میکنم با خلاقیت، دقت و شناخت نیاز هر کسب و کار، طراحی هایی حرفه ای و ماندگار انجام دهم.',
      'about.bio4': 'کنار شما هستم تا با خلاقیت، دقت و شناخت و شناخت نیاز هر کسب و کار، به رشد و دیده شدنتان کمک کنم.',
      'about.letsTalk': 'بیایید صحبت کنیم',
      'skills.logo.title': 'طراحی لوگو و برندینگ',
      'skills.logo.desc': 'خلق هویت‌های بصری منحصربه‌فرد و ماندگار برای برند شما',
      'skills.poster.title': 'طراحی پوستر و تبلیغات',
      'skills.poster.desc': 'تولید آثار بصری تأثیرگذار برای کمپین‌ها و رویدادهای شما',
      'skills.card.title': 'طراحی کارت ویزیت',
      'skills.card.desc': 'طراحی حرفه‌ای برای اولین برداشت ماندگار از برند شما',
      'skills.identity.title': 'هوش مصنوعی',
      'skills.identity.desc': 'استفاده از جدیدترین ابزارها برای ارائه طراحی‌های مدرن',
      'skills.ui.title': 'طراحی انیمیشن و لوگوموشن',
      'skills.ui.desc': 'تجربه‌ای بصری زیبا، مدرن و کاربرپسند برای انیمیشن',
      'skills.consult.title': 'مشاوره خلاقانه',
      'skills.consult.desc': 'راهنمایی تخصصی برای بهترین انتخاب‌های بصری برند شما',
      'gallery.eyebrow': 'گالری من',
      'gallery.title': 'نمونه کارها',
      'gallery.desc': 'گزیده‌ای از پروژه‌های طراحی لوگو، پوستر و کارت ویزیت',
      'gallery.filter.all': 'همه',
      'gallery.filter.logo': 'لوگو',
      'gallery.filter.poster': 'پوستر',
      'gallery.filter.card': 'کارت ویزیت',
      'gallery.items.lamira.tag': 'لوگو',
      'gallery.items.lamira.title': 'هویت بصری کافه لمیرا',
      'gallery.items.avaran.tag': 'پوستر',
      'gallery.items.avaran.title': 'کمپین تابستانه آوران',
      'gallery.items.saya.tag': 'کارت ویزیت',
      'gallery.items.saya.title': 'استودیو معماری سایه',
      'gallery.items.vesta.tag': 'لوگو',
      'gallery.items.vesta.title': 'برند آرایشی وستا',
      'gallery.items.nayan.tag': 'پوستر',
      'gallery.items.nayan.title': 'جشنواره موسیقی نایان',
      'gallery.items.edalat.tag': 'کارت ویزیت',
      'gallery.items.edalat.title': 'وکالت خانه عدالت',
      'gallery.items.zeitun.tag': 'لوگو',
      'gallery.items.zeitun.title': 'رستوران زیتون سیاه',
      'gallery.items.mah.tab.tag': 'پوستر',
      'gallery.items.mah.tab.title': 'نمایشگاه هنری مهتاب',
      'collab.eyebrow': 'همکاری',
      'collab.title': 'من کمکت می‌کنم',
      'collab.desc': 'ایده‌ات رو با من در میان بذار. کافیه چند خط درباره پروژه‌ات بنویسی؛ من ظرف کمتر از ۲۴ ساعت باهات تماس می‌گیرم تا با هم مسیر رسیدن به یک اثر خاص رو شروع کنیم.',
      'collab.point1': 'مشاوره اولیه رایگان',
      'collab.point2': 'پاسخ‌گویی سریع و شفاف',
      'collab.point3': 'طراحی اختصاصی متناسب با برند شما',
      'form.name.label': 'نام و نام خانوادگی',
      'form.name.placeholder': 'مثلاً: سارا محمدی',
      'form.contact.label': 'شماره تماس یا ایمیل',
      'form.contact.placeholder': ' ۰۰۰۰ ۰۰۰ ۰۹۱۲',
      'form.projectType.label': 'نوع پروژه',
      'form.projectType.select': 'یک گزینه انتخاب کنید',
      'form.projectType.logo': 'طراحی لوگو',
      'form.projectType.identity': 'ساخت انیمیشن',
      'form.projectType.poster': 'طراحی پوستر',
      'form.projectType.card': 'کارت ویزیت',
      'form.projectType.other': 'سایر موارد',
      'form.desc.label': 'درباره پروژه‌ات بگو',
      'form.desc.placeholder': 'کمی درباره برند، هدف و سلیقه‌ات بنویس...',
      'form.submit': 'ارسال درخواست مشاوره',
      'contact.name': 'ندا',
      'contact.role': 'طراح گرافیک & کارگردان هنری',
      'contact.phone.label': 'تماس تلفنی',
      'contact.email.label': 'ایمیل',
      'contact.location.label': 'موقعیت',
      'contact.location.value': 'تهران، ایران',
      'contact.hours.label': 'ساعات پاسخ‌گویی',
      'contact.hours.value': 'شنبه تا پنج‌شنبه، ۹ تا ۱۸',
      'contact.socials.label': 'من را دنبال کنید',
      'footer.copyright': '© <span id="currentYear"></span> تمامی حقوق برای ندا محفوظ است.'
    },
    en: {
      'meta.title': 'Neda | Professional Graphic Designer — Logo, Brand Identity & Poster Design',
      'meta.description': 'Neda, a graphic designer with over 3 years of experience in logo design, brand identity, posters, and business cards. From idea to reality, creating lasting works for your brand.',
      'meta.keywords': 'graphic designer, logo design, brand identity, poster design, business card, branding, graphic artist, Neda, luxury graphic design',
      'meta.ogTitle': 'Neda | Professional Graphic Designer',
      'meta.ogDescription': 'From idea to reality with Neda — logo, brand identity, poster, and business card design with luxury and professional quality.',
      'meta.ogSiteName': 'Neda | Graphic Designer',
      'skipLink': 'Skip to main content',
      'logo.name': 'Neda',
      'logo.role': 'Graphic Designer',
      'nav.home': 'Home',
      'nav.about': 'About Me',
      'nav.portfolio': 'Gallery',
      'nav.collab': 'Collaboration',
      'nav.contact': 'Contact Me',
      'header.cta': 'Start Project',
      'hero.eyebrow': 'Graphic Designer',
      'hero.titleSmall': 'From idea to reality with',
      'hero.titleBig': 'Neda',
      'hero.subtitle': 'Graphic design is where creativity meets precision and professionalism; I give brands identity and turn your ideas into lasting visual works.',
      'hero.viewPortfolio': 'View Portfolio',
      'hero.startCollab': 'Start Collaboration',
      'stats.yearsExperience': 'Years Experience',
      'stats.projects': 'Successful Projects',
      'stats.clients': 'Happy Clients',
      'stats.satisfaction': 'Client Satisfaction',
      'about.eyebrow': 'Get to know me better',
      'about.title': 'About Me',
      'about.bio1': "I'm Neda, born in 1991, and hold a Bachelor's degree in Graphic Design.",
      'about.bio2': "With over three years of experience in graphic design, logo design, video editing, and animation, I have completed specialized training in Adobe Premiere, mobile graphics, and AI-powered design tools.",
      'about.bio3': "In every project, I strive to combine creativity, attention to detail, and a deep understanding of each business's unique needs to create professional and lasting designs.",
      'about.bio4': "I'm here to help your brand grow and stand out through creativity, attention to detail, and a deep understanding of your business needs.",
      'about.letsTalk': "Let's talk",
      'skills.logo.title': 'Logo & Branding Design',
      'skills.logo.desc': 'Creating unique and lasting visual identities for your brand',
      'skills.poster.title': 'Poster & Advertising Design',
      'skills.poster.desc': 'Producing impactful visual works for your campaigns and events',
      'skills.card.title': 'Business Card Design',
      'skills.card.desc': 'Professional design for a lasting first impression of your brand',
      'skills.identity.title': 'AI',
      'skills.identity.desc': 'Leveraging the latest tools to create modern designs.',
      'skills.ui.title': 'Animation & Logomoaion Design',
      'skills.ui.desc': 'A beautiful, modern, and user-friendly visual experience for animation',
      'skills.consult.title': 'Creative Consulting',
      'skills.consult.desc': 'Expert guidance for the best visual choices for your brand',
      'gallery.eyebrow': 'My Gallery',
      'gallery.title': 'Portfolio',
      'gallery.desc': 'A selection of logo, poster, and business card design projects',
      'gallery.filter.all': 'All',
      'gallery.filter.logo': 'Logo',
      'gallery.filter.poster': 'Poster',
      'gallery.filter.card': 'Business Card',
      'gallery.items.lamira.tag': 'Logo',
      'gallery.items.lamira.title': 'Lamira Cafe Brand Identity',
      'gallery.items.avaran.tag': 'Poster',
      'gallery.items.avaran.title': 'Avaran Summer Campaign',
      'gallery.items.saya.tag': 'Business Card',
      'gallery.items.saya.title': 'Saya Architecture Studio',
      'gallery.items.vesta.tag': 'Logo',
      'gallery.items.vesta.title': 'Vesta Cosmetics Brand',
      'gallery.items.nayan.tag': 'Poster',
      'gallery.items.nayan.title': 'Nayan Music Festival',
      'gallery.items.edalat.tag': 'Business Card',
      'gallery.items.edalat.title': 'Edalat Law Firm',
      'gallery.items.zeitun.tag': 'Logo',
      'gallery.items.zeitun.title': 'Black Olive Restaurant',
      'gallery.items.mah.tab.tag': 'Poster',
      'gallery.items.mah.tab.title': 'Mahtab Art Exhibition',
      'collab.eyebrow': 'Collaboration',
      'collab.title': 'I Can Help You',
      'collab.desc': "Share your idea with me. Just write a few lines about your project; I'll contact you in less than 24 hours so we can start the path to a special work together.",
      'collab.point1': 'Free initial consultation',
      'collab.point2': 'Fast and transparent response',
      'collab.point3': 'Custom design tailored to your brand',
      'form.name.label': 'Full Name',
      'form.name.placeholder': 'e.g., Sarah Mohammadi',
      'form.contact.label': 'Phone Number or Email',
      'form.contact.placeholder': '0912 000 0000',
      'form.projectType.label': 'Project Type',
      'form.projectType.select': 'Select an option',
      'form.projectType.logo': 'Logo Design',
      'form.projectType.identity': 'َnimation',
      'form.projectType.poster': 'Poster Design',
      'form.projectType.card': 'Business Card',
      'form.projectType.other': 'Other',
      'form.desc.label': 'Tell me about your project',
      'form.desc.placeholder': 'Write a bit about your brand, goals, and taste...',
      'form.submit': 'Send Consultation Request',
      'contact.name': 'Neda',
      'contact.role': 'Graphic Designer & Art Director',
      'contact.phone.label': 'Phone',
      'contact.email.label': 'Email',
      'contact.location.label': 'Location',
      'contact.location.value': 'Tehran, Iran',
      'contact.hours.label': 'Response Hours',
      'contact.hours.value': 'Saturday to Thursday, 9 AM to 6 PM',
      'contact.socials.label': 'Follow Me',
      'footer.copyright': '© <span id="currentYear"></span> All rights reserved for Neda.'
    }
  };

  // Current language
  let currentLang = localStorage.getItem('neda-lang') || 'fa';

  /* ---------- Utilities ---------- */
  const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const toPersianDigits = (input) =>
    String(input).replace(/[0-9]/g, (digit) => PERSIAN_DIGITS[digit]);

  // ---------- Language Switching ----------
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('neda-lang', lang);

    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    const contentWrapper = document.getElementById('content-wrapper');
    if (contentWrapper) {
      contentWrapper.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    }
    htmlEl.style.fontFamily = lang === 'fa' ? 'var(--font-fa)' : 'var(--font-latin)';

    // Update the language switch slider position
    const langSwitch = document.getElementById('langBtn');
    if (langSwitch) {
      langSwitch.setAttribute('data-lang', lang);
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderEls.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    const metaEls = document.querySelectorAll('[data-i18n][name], [data-i18n][property]');
    metaEls.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.setAttribute('content', translations[lang][key]);
      }
    });

    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl && translations[lang]['meta.title']) {
      titleEl.textContent = translations[lang]['meta.title'];
    }

    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      const year = new Date().getFullYear();
      yearSpan.textContent = lang === 'fa' ? toPersianDigits(year) : year;
    }

    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach((el) => {
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;
      el.textContent = lang === 'fa' ? toPersianDigits(target) : target;
    });
  }

  /* ---------- Footer year ---------- */
  const initYear = () => {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      const year = new Date().getFullYear();
      yearEl.textContent = currentLang === 'fa' ? toPersianDigits(year) : year;
    }
  };

  /* ---------- Header: scrolled state ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const updateHeaderState = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    updateHeaderState();
  }

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  const closeMobileMenu = () => {
    if (!menuToggle || !mainNav) return;
    menuToggle.classList.remove('is-active');
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  /* ---------- Active nav link while scrolling ---------- */
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const trackedSections = navLinks
    .map((link) => {
      const href = link.getAttribute('href');
      return href && href.startsWith('#') ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && trackedSections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const matchingLink = navLinks.find(
            (link) => link.getAttribute('href') === `#${entry.target.id}`
          );
          if (!matchingLink) return;
          navLinks.forEach((link) => link.classList.remove('is-active'));
          matchingLink.classList.add('is-active');
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    trackedSections.forEach((section) => navObserver.observe(section));
  }

  /* ---------- Animated stat counters ---------- */
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1600;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(eased * target);
      el.textContent = currentLang === 'fa' ? toPersianDigits(currentValue) : currentValue;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && revealTargets.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');

          if (entry.target.classList.contains('hero-stats')) {
            entry.target.querySelectorAll('[data-count]').forEach(animateCount);
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: no IntersectionObserver support — just show everything
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Ambient cursor glow ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (cursorGlow && supportsHover) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const renderGlow = () => {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      requestAnimationFrame(renderGlow);
    };
    requestAnimationFrame(renderGlow);
  } else if (cursorGlow) {
    cursorGlow.style.display = 'none';
  }

  /* ---------- Gallery: category filter ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach((item) => {
        const matches = filter === 'all' || item.getAttribute('data-category') === filter;
        item.classList.toggle('is-filtered-out', !matches);
      });
    });
  });

  /* ---------- Gallery: lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxMedia = document.getElementById('lightboxMedia');
  const lightboxCaption = document.getElementById('lightboxCaption');

  const openLightbox = (item) => {
    if (!lightbox || !lightboxMedia || !lightboxCaption) return;

    const media = item.querySelector('.gallery-media');
    const title = item.querySelector('.gallery-caption h3');
    const tag = item.querySelector('.gallery-tag');

    lightboxMedia.innerHTML = '';
    if (media) {
      const clone = media.cloneNode(true);
      clone.style.position = 'static';
      clone.style.width = '100%';
      clone.style.height = '100%';
      lightboxMedia.appendChild(clone);

      const paletteClass = Array.from(media.classList).find((c) => c.startsWith('gm--'));
      lightboxMedia.className = 'lightbox-media' + (paletteClass ? ` ${paletteClass}` : '');
    }

    const tagText = tag ? tag.textContent.trim() : '';
    const titleText = title ? title.textContent.trim() : '';
    lightboxCaption.textContent = tagText && titleText ? `${tagText} — ${titleText}` : titleText || tagText;

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => openLightbox(item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });
  });

  if (lightbox) {
    lightbox.querySelectorAll('[data-close]').forEach((el) => {
      el.addEventListener('click', closeLightbox);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }

  /* ---------- Consultation form (front-end demo only) ----------
     No backend is wired up yet. Swap the setTimeout below for a real
     fetch() call to your email service, CRM, or API endpoint. */
  const form = document.getElementById('collabForm');
  const formStatus = document.getElementById('formStatus');

  if (form && formStatus) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      requiredFields.forEach((field) => {
        if (!field.value.trim()) isValid = false;
      });

      if (!isValid) {
        formStatus.textContent = currentLang === 'fa' ? 'لطفاً همه فیلدهای الزامی را تکمیل کنید.' : 'Please fill in all required fields.';
        formStatus.classList.add('is-error');
        return;
      }

      formStatus.classList.remove('is-error');
      formStatus.textContent = currentLang === 'fa' ? 'در حال ارسال درخواست...' : 'Sending request...';

      const submitBtn = form.querySelector('.form-submit');
      if (submitBtn) submitBtn.disabled = true;

      setTimeout(() => {
        formStatus.textContent = currentLang === 'fa' ? 'درخواست شما با موفقیت ارسال شد! به‌زودی با شما تماس می‌گیریم.' : 'Your request has been sent successfully! We will contact you soon.';
        if (submitBtn) submitBtn.disabled = false;
        form.reset();
      }, 900);
    });
  }

  // ---------- Language toggle button ----------
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const newLang = currentLang === 'fa' ? 'en' : 'fa';
      setLanguage(newLang);
    });
  }

  // ---------- Initialize everything ----------
  // Set initial data-lang on switch
  const langSwitch = document.getElementById('langBtn');
  if (langSwitch) {
    langSwitch.setAttribute('data-lang', currentLang);
  }
  setLanguage(currentLang);
  initYear();
})();