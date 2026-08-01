/* ==========================================================================
   ندا | پورتفولیو طراح گرافیک — main.js
   ========================================================================== */

(() => {
  'use strict';

  // ---------- Translation Data ----------
  const translations = {
    fa: {
      'meta.title': 'Neda Visuals',
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
      'hero.eyebrow': 'طراح گرافیک و تولید کننده هوش مصنوعی',
      'hero.titleSmall': 'از ایده تا تصویر نهایی',
      'hero.titleBig': '<span class="latin">Neda Visuals</span>',
      'hero.subtitle': 'ساخت تبلیغات بصری<br>طراحی، گرافیک، چاپ، انیمیشن<br>با یه ظاهر حرفه‌ای، بیشتر دیده شو و بیشتر بفروش',
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
      'gallery.filter.animation': 'انیمیشن',
      'gallery.items.lamira.tag': 'لوگو',
      'gallery.items.avaran.tag': 'پوستر',
      'gallery.items.saya.tag': 'کارت ویزیت',
      'gallery.items.vesta.tag': 'لوگو',
      'gallery.items.edalat.tag': 'کارت ویزیت',
      'gallery.items.zeitun.tag': 'لوگو',
      'gallery.items.mah.tab.tag': 'پوستر',
      'gallery.items.caramella.tag': 'انیمیشن',
      'gallery.items.peyvand.tag': 'انیمیشن',
      'gallery.items.logo01.title': 'املاک منصوری',
      'gallery.items.poster01.title': 'شکلات coco',
      'gallery.items.card01.title': 'دکتر آرمانی',
      'gallery.items.logo02.title': 'شیراز ملک',
      'gallery.items.card02.title': 'شرکت فنی مهندسی کارنو',
      'gallery.items.logo03.title': 'املاک هاشمی',
      'gallery.items.poster03.title': 'پیانو ملوویا',
      'gallery.items.animation01.title': 'ادیت موشن',
      'gallery.items.animation02.title': 'هایپرمارکت',
      'gallery.items.poster04.title': 'هنگ درام نوا',
      'gallery.items.poster05.title': 'املاک میرفردی',
      'gallery.items.poster06.title': 'نوبرانه جمشیدی',
      'gallery.items.poster08.title': 'موتور سیکلت برتر',
      'gallery.items.logo04.title': 'لنا VIP',
      'gallery.items.logo05.title': 'کافه نورا',
      'gallery.items.logo06.title': 'کافی تایم',
      'gallery.items.logo07.title': 'توزیع قطعات موبایل Fix Phone',
      'gallery.items.logo08.title': 'املاک پژمان میرفردی',
      'gallery.items.logo09.title': 'آیریک',
      'gallery.items.logo10.title': 'نوبرانه جمشیدی',
      'gallery.items.poster07.title': 'کافه پدر',
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
      'contact.role': 'طراح گرافیک و تولید کننده هوش مصنوعی',
      'contact.phone.label': 'تماس تلفنی',
      'contact.email.label': 'ایمیل',
      'contact.location.label': 'موقعیت',
      'contact.location.value': 'شیراز، ایران',
      'contact.hours.label': 'ساعات پاسخ‌گویی',
      'contact.hours.value': 'هرروز، ۹ تا ۲۱',
      'contact.socials.label': 'من را دنبال کنید',
      'footer.copyright': '© <span id="currentYear"></span> تمامی حقوق برای ندا محفوظ است.'
    },
    en: {
      'meta.title': 'Neda Visuals',
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
      'hero.eyebrow': 'Graphic Designer & AI Creator',
      'hero.titleSmall': 'From idea to final image',
      'hero.titleBig': '<span class="latin">Neda Visuals</span>',
      'hero.subtitle': 'Creating visual advertisements<br>design, graphics, print, animation<br>With a professional appearance, be seen more and sell more',
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
      'skills.identity.title': 'AI Design',
      'skills.identity.desc': 'Leveraging the latest tools to create modern designs',
      'skills.ui.title': 'Animation & Motion Design',
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
      'gallery.filter.animation': 'Animation',
      'gallery.items.lamira.tag': 'Logo',
      'gallery.items.avaran.tag': 'Poster',
      'gallery.items.saya.tag': 'Business Card',
      'gallery.items.vesta.tag': 'Logo',
      'gallery.items.edalat.tag': 'Business Card',
      'gallery.items.zeitun.tag': 'Logo',
      'gallery.items.mah.tab.tag': 'Poster',
      'gallery.items.caramella.tag': 'Animation',
      'gallery.items.peyvand.tag': 'Animation',
      'gallery.items.logo01.title': 'Mansouri Real Estate',
      'gallery.items.poster01.title': 'Coco Chocolate',
      'gallery.items.card01.title': 'Dr. Armani',
      'gallery.items.logo02.title': 'Shiraz Melk Real Estate',
      'gallery.items.card02.title': 'Carno Engineering Co.',
      'gallery.items.logo03.title': 'Hashemi',
      'gallery.items.poster03.title': 'Melovia Piano',
      'gallery.items.animation01.title': 'Motion Edit',
      'gallery.items.animation02.title': 'Hypermarket',
      'gallery.items.poster04.title': 'Nava Hang Drum Academy',
      'gallery.items.poster05.title': 'Mirfardi Real Estate',
      'gallery.items.poster06.title': 'Jamshidi Fresh Produce',
      'gallery.items.poster08.title': 'Bartar Motorcycles',
      'gallery.items.logo04.title': 'Lena VIP',
      'gallery.items.logo05.title': 'Nora Café',
      'gallery.items.logo06.title': 'CoffeeTime',
      'gallery.items.logo07.title': 'ManstFix Phone Mobile Parts Distributionate',
      'gallery.items.logo08.title': 'Pezhman Mirfardi Real Estate',
      'gallery.items.logo09.title': 'َAyrik',
      'gallery.items.logo10.title': 'Nobaraneh Jamshidi',
      'gallery.items.poster07.title': 'Pedar Café',
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
      'form.projectType.identity': 'Animation Design',
      'form.projectType.poster': 'Poster Design',
      'form.projectType.card': 'Business Card',
      'form.projectType.other': 'Other',
      'form.desc.label': 'Tell me about your project',
      'form.desc.placeholder': 'Write a bit about your brand, goals, and taste...',
      'form.submit': 'Send Consultation Request',
      'contact.name': 'Neda',
      'contact.role': 'Graphic Designer & AI Creator',
      'contact.phone.label': 'Phone',
      'contact.email.label': 'Email',
      'contact.location.label': 'Location',
      'contact.location.value': 'Shiraz, Iran',
      'contact.hours.label': 'Response Hours',
      'contact.hours.value': 'Every day, 9 AM to 9 PM',
      'contact.socials.label': 'Follow Me',
      'footer.copyright': '© <span id="currentYear"></span> All rights reserved for Neda.'
    },
    ar: {
      'meta.title': 'Neda_Visuals',
      'meta.description': 'ندى، مصممة جرافيك بخبرة أكثر من ۳ سنوات في تصميم الشعارات والهوية البصرية والملصقات وبطاقات العمل. من الفكرة إلى الواقع، أبدع أعمالًا بصرية دائمة.',
      'meta.keywords': 'مصممة جرافيك, تصميم شعار, هوية بصرية, تصميم ملصق, بطاقة عمل, براندينج, فنانة جرافيك, ندى, تصميم فاخر',
      'meta.ogTitle': 'ندى | مصممة جرافيك محترفة',
      'meta.ogDescription': 'من الفكرة إلى الواقع مع ندى — تصميم شعار وهوية بصرية وملصقات بجودة فاخرة ومحترفة.',
      'meta.ogSiteName': 'ندى | مصممة جرافيك',
      'skipLink': 'الانتقال إلى المحتوى الرئيسي',
      'logo.name': 'ندى',
      'logo.role': 'مصممة جرافيك',
      'nav.home': 'الرئيسية',
      'nav.about': 'من أنا',
      'nav.portfolio': 'المعرض',
      'nav.collab': 'تعاون',
      'nav.contact': 'اتصل بي',
      'header.cta': 'بدء المشروع',
      'hero.eyebrow': 'مصممة جرافيك ومنتجة ذكاء اصطناعي',
      'hero.titleSmall': 'من الفكرة إلى الصورة النهائية',
      'hero.titleBig': '<span class="latin">Neda Visuals</span>',
      'hero.subtitle': 'إنشاء إعلانات بصرية<br>تصميم، الجرافيك، الطباعة، الرسوم المتحركة الدعائية<br>بمظهر احترافي، كن أكثر رؤية وازدهر بالمبيعات',
      'hero.viewPortfolio': 'عرض الأعمال',
      'hero.startCollab': 'بدء التعاون',
      'stats.yearsExperience': 'سنوات خبرة',
      'stats.projects': 'مشاريع ناجحة',
      'stats.clients': 'عملاء راضون',
      'stats.satisfaction': 'رضا العملاء',
      'about.eyebrow': 'تعرف عليّ أكثر',
      'about.title': 'من أنا',
      'about.bio1': 'أنا ندى. ولدت عام 1411 وتخرجت في بكالوريوس التصميم الجرافيكي.',
      'about.bio2': 'لدي أكثر من ثلاث سنوات من الخبرة في تصميم الجرافيك، الشعارات، المونتاج وإنشاء الرسوم المتحركة. كما أنني أكملت دورات متخصصة في المونتاج باستخدام Adobe Premiere، وتصوير الهاتف، والذكاء الاصطناعي.',
      'about.bio3': 'في كل مشروع أسعى لتقديم تصميمات محترفة ودائمة مع الإبداع والدقة وفهم احتياجات كل عمل.',
      'about.bio4': 'أنا هنا معك بالإبداع والدقة وفهم احتياجاتك لمساعدتك على النمو والظهور.',
      'about.letsTalk': 'هيا نتحدث',
      'skills.logo.title': 'تصميم الشعار والهوية',
      'skills.logo.desc': 'خلق هويات بصرية فريدة ودائمة لعلامتك التجارية',
      'skills.poster.title': 'تصميم الملصقات والإعلانات',
      'skills.poster.desc': 'إنتاج أعمال بصرية مؤثرة لحملاتك وفعالياتك',
      'skills.card.title': 'تصميم بطاقة العمل',
      'skills.card.desc': 'تصميم احترافي لأول انطباع يدوم عن علامتك',
      'skills.identity.title': 'الذكاء الاصطناعي',
      'skills.identity.desc': 'استخدام أحدث الأدوات لتقديم تصميمات عصرية',
      'skills.ui.title': 'تصميم الرسوم المتحركة والموشن',
      'skills.ui.desc': 'تجربة بصرية جميلة، حديثة وسهلة الاستخدام للرسوم المتحركة',
      'skills.consult.title': 'استشارات إبداعية',
      'skills.consult.desc': 'إرشاد متخصص لأفضل الخيارات البصرية لعلامتك',
      'gallery.eyebrow': 'معرضي',
      'gallery.title': 'أعمالي',
      'gallery.desc': 'مختارة من مشاريع تصميم الشعارات والملصقات وبطاقات العمل',
      'gallery.filter.all': 'الكل',
      'gallery.filter.logo': 'شعار',
      'gallery.filter.poster': 'ملصق',
      'gallery.filter.card': 'بطاقة عمل',
      'gallery.filter.animation': 'رسوم متحركة',
      'gallery.items.lamira.tag': 'شعار',
      'gallery.items.avaran.tag': 'ملصق',
      'gallery.items.saya.tag': 'بطاقة عمل',
      'gallery.items.vesta.tag': 'شعار',
      'gallery.items.edalat.tag': 'بطاقة عمل',
      'gallery.items.zeitun.tag': 'شعار',
      'gallery.items.mah.tab.tag': 'ملصق',
      'gallery.items.caramella.tag': 'رسوم متحركة',
      'gallery.items.peyvand.tag': 'رسوم متحركة',
      'gallery.items.logo01.title': 'وكالة المنصوري العقارية',
      'gallery.items.poster01.title': 'شوكولاتة كوكو',
      'gallery.items.card01.title': 'الدكتور أرماني',
      'gallery.items.logo02.title': 'شيراز ملك العقارية',
      'gallery.items.card02.title': 'شركة كارنو للهندسة الفنية',
      'gallery.items.logo03.title': 'وكالة الهاشمی العقارية',
      'gallery.items.poster03.title': 'بيانو ميلوفيا',
      'gallery.items.animation01.title': 'مونتاج موشن',
      'gallery.items.animation02.title': 'هايبر ماركت',
      'gallery.items.poster04.title': 'أكاديمية نَوا للهانغ درام',
      'gallery.items.poster05.title': 'وكالة مير فردي العقارية',
      'gallery.items.poster06.title': 'منتجات جمشيدي الطازجة',
      'gallery.items.poster08.title': 'دراجات برتر النارية',
      'gallery.items.logo04.title': 'لينا VIP',
      'gallery.items.logo05.title': 'مقهى نورا',
      'gallery.items.logo06.title': 'مقهى كوفي تايم',
      'gallery.items.logo07.title': 'فيكس فون لتوزيع قطع غيار الهواتف',
      'gallery.items.logo08.title': 'العقارات بيجمان ميرفردي',
      'gallery.items.logo09.title': 'آيريك',
      'gallery.items.logo10.title': 'نوبارانه جمشيدي',
      'gallery.items.poster07.title': 'مقهى بيدر',
      'collab.eyebrow': 'تعاون',
      'collab.title': 'أنا هنا لأساعدك',
      'collab.desc': 'شارك فكرتك معي. اكتفِ بكتابة بضع سطور عن مشروعك؛ سأتواصل معك في أقل من ۲۴ ساعة حتى نبدأ معًا طريق خلق عمل مميز.',
      'collab.point1': 'استشارة أولية مجانية',
      'collab.point2': 'رد سريع وواضح',
      'collab.point3': 'تصميم مخصص يتناسب مع علامتك',
      'form.name.label': 'الاسم الكامل',
      'form.name.placeholder': 'مثلاً: نادية عبده',
      'form.contact.label': 'رقم الهاتف أو البريد الإلكتروني',
      'form.contact.placeholder': '٠٩١٢ ٠٠٠ ٠٠٠٠',
      'form.projectType.label': 'نوع المشروع',
      'form.projectType.select': 'اختر خيارًا',
      'form.projectType.logo': 'تصميم شعار',
      'form.projectType.identity': 'تصميم هوية',
      'form.projectType.poster': 'تصميم ملصق',
      'form.projectType.card': 'بطاقة عمل',
      'form.projectType.other': 'أخرى',
      'form.desc.label': 'حدثني عن مشروعك',
      'form.desc.placeholder': 'اكتب قليلاً عن علامتك، هدفك، وذوقك...',
      'form.submit': 'إرسال طلب استشارة',
      'contact.name': 'ندى',
      'contact.role': 'مصممة جرافيك ومنتجة ذكاء اصطناعي',
      'contact.phone.label': 'الهاتف',
      'contact.email.label': 'البريد الإلكتروني',
      'contact.location.label': 'الموقع',
      'contact.location.value': 'شيراز، ایران',
      'contact.hours.label': 'ساعات الرد',
      'contact.hours.value': 'كل يوم، 9 صباحًا حتى 9 مساءً',
      'contact.socials.label': 'تابعني',
      'footer.copyright': '© <span id="currentYear"></span> كل الحقوق محفوظة لندى.'
    }
  };

  // Current language
  let currentLang = localStorage.getItem('neda-lang') || 'fa';

  /* ---------- Utilities ---------- */
  const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const toPersianDigits = (input) =>
    String(input).replace(/[0-9]/g, (digit) => PERSIAN_DIGITS[digit]);

  const hexToVec3 = (hex) => {
    let value = hex.trim();
    if (value.startsWith('#')) value = value.slice(1);

    let r = 255;
    let g = 255;
    let b = 255;

    if (value.length === 3) {
      r = parseInt(value[0] + value[0], 16);
      g = parseInt(value[1] + value[1], 16);
      b = parseInt(value[2] + value[2], 16);
    } else if (value.length === 6) {
      r = parseInt(value.slice(0, 2), 16);
      g = parseInt(value.slice(2, 4), 16);
      b = parseInt(value.slice(4, 6), 16);
    }

    return new THREE.Vector3(r / 255, g / 255, b / 255);
  };

  const initHeroFloatingLines = () => {
    const container = document.getElementById('heroLines');
    if (!container) return;
    if (typeof THREE === 'undefined') {
      container.classList.add('hero-lines-fallback');
      return;
    }

    // Respect the OS-level "reduce motion" setting: we still draw one static frame
    // so the section isn't left blank, but we never start the animation loop below.
    const prefersReducedMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const vertexShader = `
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

    const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(vec3(47.0, 75.0, 162.0) / 255.0, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(vec3(233.0, 71.0, 245.0) / 255.0, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t) {
  if (lineGradientCount <= 0) {
    return vec3(1.0);
  }

  float clampedT = clamp(t, 0.0, 0.9999);
  float scaled = clampedT * float(lineGradientCount - 1);
  int idx = int(floor(scaled));
  float f = fract(scaled);
  int idx2 = min(idx + 1, lineGradientCount - 1);

  vec3 c1 = lineGradient[idx];
  vec3 c2 = lineGradient[idx2];
  return mix(c1, c2, f) * 0.5;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;
  float x_offset = offset;
  float x_movement = time * 0.1;
  float amp = sin(offset + time * 0.2) * 0.3;
  float y = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;

  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);
  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }

  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t);
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t);
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t);
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`;

    const topWavePosition = new THREE.Vector3(10.0, 0.5, -0.4);
    const middleWavePosition = new THREE.Vector3(5.0, 0.0, 0.2);
    const bottomWavePosition = new THREE.Vector3(2.0, -0.7, 0.4);

    const linesGradient = ['#d52678', '#ffb2dd', '#2a0c1c'];

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(1, 1, 1) },
      animationSpeed: { value: 1.8 },
      enableTop: { value: true },
      enableMiddle: { value: true },
      enableBottom: { value: true },
      topLineCount: { value: 6 },
      middleLineCount: { value: 6 },
      bottomLineCount: { value: 6 },
      topLineDistance: { value: 8.5 * 0.01 },
      middleLineDistance: { value: 8.5 * 0.01 },
      bottomLineDistance: { value: 8.5 * 0.01 },
      topWavePosition: { value: topWavePosition },
      middleWavePosition: { value: middleWavePosition },
      bottomWavePosition: { value: bottomWavePosition },
      iMouse: { value: new THREE.Vector2(-1000, -1000) },
      interactive: { value: true },
      bendRadius: { value: 8.0 },
      bendStrength: { value: -2.0 },
      bendInfluence: { value: 0.0 },
      parallax: { value: true },
      parallaxStrength: { value: 0.2 },
      parallaxOffset: { value: new THREE.Vector2(0, 0) },
      lineGradient: { value: Array.from({ length: 8 }, () => new THREE.Vector3(1, 1, 1)) },
      lineGradientCount: { value: linesGradient.length }
    };

    linesGradient.forEach((color, index) => {
      uniforms.lineGradient.value[index].copy(hexToVec3(color));
    });

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' });
    const pixelRatioCap = window.innerWidth <= 640 ? 1 : 1.5;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatioCap));
    renderer.setSize(container.clientWidth || 1, container.clientHeight || 1, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    const mouse = new THREE.Vector2(0, 0);
    const parallaxOffset = new THREE.Vector2(0, 0);

    const setSize = () => {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      renderer.setSize(width, height, false);
      const canvasWidth = renderer.domElement.width;
      const canvasHeight = renderer.domElement.height;
      uniforms.iResolution.value.set(canvasWidth, canvasHeight, 1);
    };

    setSize();

    const resizeHandler = () => {
      setSize();
    };

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(setSize)
      : null;

    if (resizeObserver) {
      resizeObserver.observe(container);
    } else {
      window.addEventListener('resize', resizeHandler);
    }

    const heroSection = container.closest('.hero') || container;

    let targetBendInfluence = 0;
    const targetParallaxOffset = new THREE.Vector2(0, 0);

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const dpr = renderer.getPixelRatio();
      mouse.set(x * dpr, (rect.height - y) * dpr);
      uniforms.iMouse.value.copy(mouse);
      targetBendInfluence = 1.0;

      if (uniforms.parallax.value) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = (x - centerX) / rect.width;
        const offsetY = -(y - centerY) / rect.height;
        targetParallaxOffset.set(offsetX * uniforms.parallaxStrength.value, offsetY * uniforms.parallaxStrength.value);
      }
    };

    const handlePointerLeave = () => {
      targetBendInfluence = 0.0;
      if (uniforms.parallax.value) {
        targetParallaxOffset.set(0, 0);
      }
    };

    heroSection.addEventListener('pointermove', handlePointerMove);
    heroSection.addEventListener('pointerleave', handlePointerLeave);

    let rafId = 0;
    let lastFrameTime = performance.now();
    let isLoopRunning = false;
    // How quickly the bend/parallax intensity fades in and out — high enough to feel
    // immediate, but smooth enough to avoid a hard jump when the pointer leaves the hero.
    const fadeSpeed = 10;

    const renderFrame = () => {
      const now = performance.now();
      const delta = Math.min((now - lastFrameTime) / 1000, 0.1);
      lastFrameTime = now;

      uniforms.iTime.value = clock.getElapsedTime();

      const fadeAmount = 1 - Math.exp(-fadeSpeed * delta);
      uniforms.bendInfluence.value += (targetBendInfluence - uniforms.bendInfluence.value) * fadeAmount;
      parallaxOffset.x += (targetParallaxOffset.x - parallaxOffset.x) * fadeAmount;
      parallaxOffset.y += (targetParallaxOffset.y - parallaxOffset.y) * fadeAmount;
      uniforms.parallaxOffset.value.copy(parallaxOffset);

      renderer.render(scene, camera);
    };

    const renderLoop = () => {
      renderFrame();
      rafId = requestAnimationFrame(renderLoop);
    };

    const startLoop = () => {
      if (isLoopRunning || prefersReducedMotion) return;
      isLoopRunning = true;
      lastFrameTime = performance.now();
      renderLoop();
    };

    const stopLoop = () => {
      isLoopRunning = false;
      cancelAnimationFrame(rafId);
    };

    // Draw one static frame immediately so the section is never left blank —
    // this covers both the reduced-motion case and the brief moment before the
    // visibility observer below reports its first result.
    renderFrame();

    // The single biggest performance win here: a full-screen WebGL shader is expensive,
    // so only keep it animating while the hero is actually scrolled into view AND the
    // browser tab is active. Everywhere else on the page, the GPU/CPU simply don't do
    // this work at all.
    const loopVisibility = { inViewport: true, tabVisible: document.visibilityState !== 'hidden' };
    const syncLoopState = () => {
      if (loopVisibility.inViewport && loopVisibility.tabVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    };

    let heroVisibilityObserver = null;
    if ('IntersectionObserver' in window) {
      heroVisibilityObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            loopVisibility.inViewport = entry.isIntersecting;
            syncLoopState();
          });
        },
        { threshold: 0 }
      );
      heroVisibilityObserver.observe(heroSection);
    } else {
      syncLoopState();
    }

    const handleVisibilityChange = () => {
      loopVisibility.tabVisible = document.visibilityState !== 'hidden';
      syncLoopState();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const cleanup = () => {
      stopLoop();
      if (heroVisibilityObserver) heroVisibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', resizeHandler);
      }
      heroSection.removeEventListener('pointermove', handlePointerMove);
      heroSection.removeEventListener('pointerleave', handlePointerLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };

    window.addEventListener('unload', cleanup);
  };

  // ---------- Language Switching ----------
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('neda-lang', lang);

    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    const contentWrapper = document.getElementById('content-wrapper');
    if (contentWrapper) {
      contentWrapper.setAttribute('dir', lang === 'fa' || lang === 'ar' ? 'rtl' : 'ltr');
    }
    htmlEl.style.fontFamily = lang === 'fa' || lang === 'ar' ? 'var(--font-fa)' : 'var(--font-latin)';

    const langSelectCurrent = document.getElementById('langSelectCurrent');
    if (langSelectCurrent) {
      langSelectCurrent.textContent = lang.toUpperCase();
    }

    const langDropdown = document.getElementById('langDropdown');
    if (langDropdown) {
      langDropdown.querySelectorAll('li').forEach((li) => {
        li.setAttribute('aria-selected', String(li.getAttribute('data-lang') === lang));
      });
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
    lightboxMedia.className = 'lightbox-media';
    if (media) {
      const clone = media.cloneNode(true);
      // Let the cloned media keep its intrinsic aspect ratio inside the lightbox.
      clone.style.position = 'static';
      clone.style.maxWidth = '100%';
      clone.style.height = 'auto';
      clone.style.background = 'none';
      lightboxMedia.appendChild(clone);

      const video = clone.querySelector('video');
      if (video) {
        video.controls = true;
        video.removeAttribute('preload');
        video.play().catch(() => {
          /* Autoplay-with-sound can be blocked by the browser; controls let the user hit play manually. */
        });
      }
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
    const video = lightboxMedia ? lightboxMedia.querySelector('video') : null;
    if (video) {
      video.pause();
    }
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

  /* ---------- Consultation form ----------
     Submits to Formspree (https://formspree.io/f/meeyvdeg) via fetch/AJAX
     so the page never reloads and the existing inline status message
     keeps working in both languages. */
  const form = document.getElementById('collabForm');
  const formStatus = document.getElementById('formStatus');
  const contactField = document.getElementById('contactInfo');
  const replyToField = document.getElementById('formReplyTo');

  if (form && formStatus) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Silently drop the submission if the honeypot field was filled by a bot
      const honeypot = form.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value) return;

      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      requiredFields.forEach((field) => {
        if (!field.value.trim()) isValid = false;
      });

      if (!isValid) {
        formStatus.textContent = currentLang === 'fa' ? 'لطفاً همه فیلدهای الزامی را تسمیل کنید.' : 'Please fill in all required fields.';
        formStatus.classList.add('is-error');
        return;
      }

      const contactValue = contactField ? contactField.value.trim() : '';
      const isEmail = contactValue && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);

      if (replyToField) {
        if (isEmail) {
          replyToField.value = contactValue;
        } else {
          replyToField.value = '';
        }
      }

      formStatus.classList.remove('is-error');
      formStatus.textContent = currentLang === 'fa' ? 'در حال ارسال درخواست...' : 'Sending request...';

      const submitBtn = form.querySelector('.form-submit');
      if (submitBtn) submitBtn.disabled = true;

      const formData = new FormData(form);
      if (!isEmail) {
        formData.delete('_replyto');
      }

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            formStatus.classList.remove('is-error');
            formStatus.textContent = currentLang === 'fa'
              ? 'درخواست شما با موفقیت ارسال شد! به‌زودی با شما تماس می‌گیریم.'
              : 'Your request has been sent successfully! We will contact you soon.';
            form.reset();
            return;
          }
          throw new Error('submission-failed');
        })
        .catch(() => {
          formStatus.classList.add('is-error');
          formStatus.textContent = currentLang === 'fa'
            ? 'مشکلی در ارسال پیش اومد. لطفاً دوباره تلاش کنید یا مستقیم از راه‌های ارتباطی دیگه پیام بدید.'
            : 'Something went wrong. Please try again, or reach out directly using the contact details below.';
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  // ---------- Language selector (dropdown) ----------
  const langSelectBtn = document.getElementById('langSelectBtn');
  const langDropdown = document.getElementById('langDropdown');

  const positionLangDropdown = () => {
    if (!langSelectBtn || !langDropdown) return;
    const rect = langSelectBtn.getBoundingClientRect();
    const dropdownWidth = langDropdown.offsetWidth || 84;
    let left = rect.left + rect.width / 2 - dropdownWidth / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - dropdownWidth - 8));
    langDropdown.style.top = `${rect.bottom + 10}px`;
    langDropdown.style.left = `${left}px`;
  };

  const closeLangDropdown = () => {
    if (!langDropdown || !langSelectBtn) return;
    langDropdown.classList.remove('is-open');
    langDropdown.setAttribute('aria-hidden', 'true');
    langSelectBtn.setAttribute('aria-expanded', 'false');
  };

  const openLangDropdown = () => {
    if (!langDropdown || !langSelectBtn) return;
    positionLangDropdown();
    langDropdown.classList.add('is-open');
    langDropdown.setAttribute('aria-hidden', 'false');
    langSelectBtn.setAttribute('aria-expanded', 'true');
  };

  if (langSelectBtn && langDropdown) {
    langSelectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.contains('is-open');
      if (isOpen) {
        closeLangDropdown();
      } else {
        openLangDropdown();
      }
    });

    langDropdown.querySelectorAll('li[data-lang]').forEach((li) => {
      li.addEventListener('click', () => {
        const selectedLang = li.getAttribute('data-lang');
        if (selectedLang) {
          setLanguage(selectedLang);
        }
        closeLangDropdown();
        langSelectBtn.focus();
      });
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.classList.contains('is-open')) return;
      if (e.target === langSelectBtn || langSelectBtn.contains(e.target) || langDropdown.contains(e.target)) return;
      closeLangDropdown();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langDropdown.classList.contains('is-open')) {
        closeLangDropdown();
        langSelectBtn.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (langDropdown.classList.contains('is-open')) positionLangDropdown();
    });
    window.addEventListener('scroll', () => {
      if (langDropdown.classList.contains('is-open')) positionLangDropdown();
    }, { passive: true });
  }

  // ---------- Initialize everything ----------
  setLanguage(currentLang);
  initYear();
  initHeroFloatingLines();
})();

/* ---------- Service worker (caching for fast repeat visits) ----------
   Registered outside the main IIFE, after the page has finished loading,
   so it never competes with anything above for bandwidth/CPU. See sw.js
   for the actual caching strategy. Fails silently on http:// / file://
   or any host that doesn't allow it — the site works exactly the same
   either way, it just won't get the caching speed-up. */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      /* no-op: caching is a bonus, not a requirement */
    });
  });
}