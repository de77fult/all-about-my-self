document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const icon = themeBtn.querySelector('i');

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Language Translation
    // Language Translation
    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_experience: "Experience",
            nav_contact: "Social Media",
            hero_greeting: "Hello, I'm",
            hero_name: "Mohamed Ahmed Mohamed Khater",
            hero_title: "Python Learner | AI Enthusiast",
            hero_location: "USA",
            btn_projects: "View Projects",
            btn_contact: "Social Media",
            about_title: "About Me",
            about_p1: "I am a 14-year-old Python learner from Sudan, interested in Artificial Intelligence and intelligent systems. I started learning programming early and focus on understanding concepts through practice, experimentation, and building small projects.",
            about_p2: "I am learning Python with a focus on AI and data basics. I mainly learn through educational videos and by trying things myself, fixing mistakes, and improving my code.",
            about_p3: "My goal is to continue learning Python and AI, improve my skills, and in the future become an AI Engineer working on intelligent and robotic systems.",
            card_ai_title: "AI & Systems",
            card_ai_desc: "Focusing on intelligent systems",
            card_python_title: "Python",
            card_python_desc: "Building step by step",
            skills_title: "Skills",
            skill_prog: "Programming",
            skill_py: "Python (Beginner-Intermediate)",
            skill_game_logic: "Game Logic",

            skill_gamedev: "Game Development",
            skill_map: "Map Design",
            skill_tools: "Tools",
            projects_title: "Projects",
            proj_roblox_title: "Roblox Map",
            proj_roblox_desc: "A Roblox map I created that was played by 820+ players, helping me learn about game design and player interaction.",
            play_game: "Play Game",
            status_working: "Working on",
            status_available: "Available",
            exp_title: "Experience & Learning",
            exp_date1: "",
            exp_role1: "Independent Learner & Project Builder",
            exp_desc1: "Started learning Python basics, focusing on variables, loops, and functions. Built small command-line tools.",
            exp_list1_1: "Practicing Python by building small programs and games",
            exp_list1_2: "Learning AI and data basics step by step",
            exp_list1_3: "Improving through mistakes and experimentation",
            exp_date2: "",
            exp_role2: "What I’m Learning Now",
            exp_list2_1: "Python fundamentals & NumPy basics",
            exp_list2_2: "AI and intelligent systems concepts",
            exp_list2_3: "Logical thinking and problem-solving",
            contact_title: "Social Media",
            copyright: "&copy; 2025 Mohamed Ahmed Mohamed Khater. All rights reserved."
        },
        ar: {
            nav_about: "عنّي",
            nav_skills: "المهارات",
            nav_projects: "المشاريع",
            nav_experience: "الخبرة",
            nav_contact: "وسائل التواصل الاجتماعي",
            hero_greeting: "مرحباً، أنا",
            hero_name: "محمد أحمد محمد خاطر",
            hero_title: "متعلم بايثون | شغوف بالذكاء الاصطناعي",
            hero_location: "الولايات المتحدة الأمريكية",
            btn_projects: "عرض المشاريع",
            btn_contact: "تواصل معي",
            about_title: "نبذة عني",
            about_p1: "أنا متعلم بايثون عمري 14 عاماً من السودان، مهتم بالذكاء الاصطناعي والأنظمة الذكية. بدأت تعلم البرمجة مبكراً وأركز على فهم المفاهيم من خلال الممارسة والتجربة وبناء المشاريع الصغيرة.",
            about_p2: "أنا أتعلم بايثون مع التركيز على أساسيات الذكاء الاصطناعي والبيانات. أتعلم بشكل أساسي عبر الفيديوهات التعليمية وتجربة الأشياء بنفسي، وإصلاح الأخطاء، وتحسين الكود.",
            about_p3: "هدفي هو الاستمرار في تعلم بايثون والذكاء الاصطناعي، وتحسين مهاراتي، وأن أصبح في المستقبل مهندس ذكاء اصطناعي أعمل على الأنظمة الذكية والروبوتية.",
            card_ai_title: "الذكاء الاصطناعي والأنظمة",
            card_ai_desc: "التركيز على الأنظمة الذكية",
            card_python_title: "بايثون",
            card_python_desc: "البناء خطوة بخطوة",
            skills_title: "المهارات",
            skill_prog: "البرمجة",
            skill_py: "بايثون (مبتدئ-متوسط)",
            skill_game_logic: "منطق الألعاب",

            skill_gamedev: "تطوير الألعاب",
            skill_map: "تصميم الخرائط",
            skill_tools: "الأدوات",
            projects_title: "المشاريع",
            proj_roblox_title: "خريطة روبلوكس",
            proj_roblox_desc: "خريطة روبلوكس أنشأتها وتم لعبها من قبل أكثر من 820 لاعب، مما ساعدني على تعلم تصميم الألعاب وتفاعل اللاعبين.",
            play_game: "العب الآن",
            status_working: "قيد العمل",
            status_available: "متاح",
            exp_title: "الخبرة والتعلم",
            exp_date1: "",
            exp_role1: "متعلم مستقل وباني مشاريع",
            exp_desc1: "بدأت تعلم أساسيات بايثون، والتركيز على المتغيرات والحلقات والدوال. بنيت أدوات صغيرة تعمل بسطر الأوامر.",
            exp_list1_1: "ممارسة بايثون عبر بناء برامج وألعاب صغيرة",
            exp_list1_2: "تعلم أساسيات الذكاء الاصطناعي والبيانات خطوة بخطوة",
            exp_list1_3: "التحسين من خلال الأخطاء والتجريب",
            exp_date2: "",
            exp_role2: "ما أتعلمه الآن",
            exp_list2_1: "أساسيات بايثون و NumPy",
            exp_list2_2: "مفاهيم الذكاء الاصطناعي والأنظمة الذكية",
            exp_list2_3: "التفكير المنطقي وحل المشكلات",
            contact_title: "وسائل التواصل الاجتماعي",
            copyright: "&copy; 2025 محمد أحمد محمد خاطر. جميع الحقوق محفوظة."
        }
    };

    const langBtn = document.getElementById('lang-toggle');

    function setLanguage(lang) {
        if (lang === 'ar') {
            document.body.classList.add('rtl');
            document.documentElement.lang = 'ar';
            langBtn.textContent = 'EN';
        } else {
            document.body.classList.remove('rtl');
            document.documentElement.lang = 'en';
            langBtn.textContent = 'AR';
        }

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('lang', lang);
    }

    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    langBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-times');
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Image Modal Logic
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('full-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.project-card').forEach(card => {
        const img = card.querySelector('.project-img');
        if (img) {
            card.classList.add('has-image'); // Add class for styling
            card.addEventListener('click', function () {
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
            });
        }
    });

    if (closeBtn) {
        closeBtn.onclick = function () { // Modified to use closeBtn if it exists
            modal.style.display = "none";
        }
    }

    // Close on outside click
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.section-title, .project-card, .skill-category, .about-text, .highlight-card, .timeline-item');

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Handle animation class
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .animate-up {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);
});
