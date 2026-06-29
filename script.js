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
            nav_open_source: "Open Source",
            nav_contact_videos: "Videos",
            nav_experience: "Experience",
            nav_contact: "Contact Me",
            hero_greeting: "Hello, I'm",
            hero_greeting_pill: "Welcome to my tech space, buddy!",
            hero_name: "Mohamed Wael",
            hero_title: "Full-Stack Developer & Open Source Contributor",
            hero_desc: "I'm Mohamed Wael, I build full-stack web applications and blazing fast websites. I love contributing to open-source tools and creating content to help the developer community on YouTube and TikTok.",
            hero_location: "USA",
            btn_projects: "Check My Projects",
            btn_contact: "Social Media",
            btn_youtube: "YouTube Channel",
            about_title: "About Me",
            about_p1: "I am Mohamed Wael, a developer interested in full-stack web development, building clean interfaces, and participating in open-source projects. I enjoy creating content and sharing technical solutions with other developers.",
            about_p2: "I build responsive, high-performance web applications and tools. I focus on modern architectures, responsive layouts, and user-centric features.",
            about_p3: "My goal is to continue learning and building modern applications, contributing to the tech community, and helping other developers level up.",
            card_ai_title: "Full-Stack Web Dev",
            card_ai_desc: "Building clean applications",
            card_python_title: "Open Source",
            card_python_desc: "Sharing tools for everyone",
            skills_title: "Skills",
            skill_prog: "Programming",
            skill_py: "JavaScript & Python",
            skill_game_logic: "HTML & CSS",
            skill_gamedev: "Web Development",
            skill_map: "React & Next.js",
            skill_tools: "Tools & Git",
            projects_title: "Projects & Codes I've Cooked",
            proj_roblox_title: "Roblox Map",
            proj_roblox_desc: "A Roblox map I created that was played by 820+ players, helping me learn about game design and player interaction.",
            play_game: "Try Now",
            status_working: "Working on",
            status_available: "Available",
            exp_title: "Experience & Learning",
            exp_date1: "",
            exp_role1: "Independent Learner & Project Builder",
            exp_desc1: "Started learning Python basics, focusing on variables, loops, and functions. Built small command-line tools.",
            exp_list1_1: "Practicing programming by building applications and web tools",
            exp_list1_2: "Learning modern web frameworks and backend integrations",
            exp_list1_3: "Improving through open-source contributions and community projects",
            exp_date2: "",
            exp_role2: "What I’m Learning Now",
            exp_list2_1: "Full-Stack architectures",
            exp_list2_2: "Advanced system integrations and APIs",
            exp_list2_3: "Creating valuable content on YouTube and TikTok",
            contact_title: "Social Media",
            copyright: "&copy; 2026 Mohamed Wael. All rights reserved.",
            open_source_title: "Open Source Projects",
            open_source_subtitle: "Free tools and software I built for everyone to contribute and develop (click card to view code)",
            
            // Admin Panel Translations
            photo_hidden: "Profile Secured",
            admin_panel_title: "Admin Control Center",
            verifying_identity: "Verifying Identity...",
            checking_ip: "Checking visitor IP address against system policy...",
            access_denied: "Access Denied",
            ip_not_authorized: "Your IP address is not authorized to access this administration panel.",
            security_logged: "This security incident has been logged. Cyber Security policy strictly enforces access controls.",
            photo_mgmt: "Photo Management",
            photo_mgmt_desc: "Toggle visibility of your profile photo on the homepage.",
            photo_visible: "Photo Status: Visible",
            photo_hidden_status: "Photo Status: Hidden",
            delete_photo_btn: "Delete Profile Photo",
            restore_photo_btn: "Restore Profile Photo",
            add_project: "Add New Project",
            add_project_desc: "Fill out details in English and Arabic to expand your portfolio.",
            save_project: "Add Project"
        },
        ar: {
            nav_home: "الرئيسية",
            nav_about: "عنّي",
            nav_skills: "المهارات",
            nav_projects: "المشاريع",
            nav_open_source: "أوبن سورس",
            nav_contact_videos: "فيديوهاتي",
            nav_experience: "الخبرة",
            nav_contact: "كلمني",
            hero_greeting: "مرحباً، أنا",
            hero_greeting_pill: "منور يا زميلي في مساحتي التقنية",
            hero_name: "معاك محمد وائل",
            hero_title: "Full-Stack Developer & Open Source Contributor",
            hero_desc: "أنا محمد وائل، بعمل تطبيقات ويب متكاملة ومواقع طلقة، وبحب أشارك في بناء الأدوات مفتوحة المصدر وصناعة المحتوى، اللي بيفيد مجتمع المطورين على يوتيوب وتيك توك.",
            hero_location: "الولايات المتحدة الأمريكية",
            btn_projects: "بص على مشاريعي",
            btn_contact: "تواصل معي",
            btn_youtube: "تابعني على يوتيوب",
            about_title: "نبذة عني",
            about_p1: "أنا محمد وائل، مطور برمجيات مهتم بتطوير الويب المتكامل وبناء واجهات مستخدم متميزة والمشاركة في المشاريع مفتوحة المصدر. أحب صناعة المحتوى التقني ومشاركة الحلول البرمجية مع المطورين.",
            about_p2: "أعمل على بناء تطبيقات ويب سريعة ومصممة بعناية فائقة. أركز على الأداء العالي والتصميم المستجيب وتوفير تجربة مستخدم فريدة.",
            about_p3: "هدفي هو الاستمرار في التعلم وبناء التطبيقات الحديثة، والمساهمة الفعالة في المجتمع التقني لمساعدة زملائي المطورين على التطور.",
            card_ai_title: "تطوير الويب المتكامل",
            card_ai_desc: "بناء تطبيقات ويب متكاملة",
            card_python_title: "مشاريع مفتوحة المصدر",
            card_python_desc: "مشاركة الأدوات البرمجية للجميع",
            skills_title: "المهارات",
            skill_prog: "البرمجة",
            skill_py: "جافا سكريبت وبايثون",
            skill_game_logic: "HTML & CSS",
            skill_gamedev: "تطوير الويب",
            skill_map: "React & Next.js",
            skill_tools: "أدوات التطوير و Git",
            projects_title: "المشاريع والأكواد اللي طبختها",
            proj_roblox_title: "خريطة روبلوكس",
            proj_roblox_desc: "خريطة روبلوكس أنشأتها وتم لعبها من قبل أكثر من 820 لاعب، مما ساعدني على تعلم تصميم الألعاب وتفاعل اللاعبين.",
            play_game: "جرب الآن",
            status_working: "قيد العمل",
            status_available: "متاح",
            exp_title: "الخبرة والتعلم",
            exp_date1: "",
            exp_role1: "متعلم مستقل وباني مشاريع",
            exp_desc1: "بدأت تعلم أساسيات بايثون، والتركيز على المتغيرات والحلقات والدوال. بنيت أدوات صغيرة تعمل بسطر الأوامر.",
            exp_list1_1: "ممارسة البرمجة عبر بناء برامج وأدوات ويب مفيدة",
            exp_list1_2: "تعلم أطر العمل الحديثة وتكاملات الخوادم والـ APIs",
            exp_list1_3: "التحسين المستمر من خلال المساهمة في المشاريع مفتوحة المصدر",
            exp_date2: "",
            exp_role2: "ما أتعلمه الآن",
            exp_list2_1: "هندسة الويب الكامل (Full-Stack)",
            exp_list2_2: "تطبيقات الويب المتقدمة والأنظمة المتكاملة",
            exp_list2_3: "صناعة محتوى تقني متميز على يوتيوب وتيك توك",
            contact_title: "وسائل التواصل الاجتماعي",
            copyright: "&copy; 2026 محمد وائل. جميع الحقوق محفوظة.",
            open_source_title: "مشاريع مفتوحة المصدر (Open Source)",
            open_source_subtitle: "أدوات وبرامج مجانية عملتها وللجميع للمشاركة والتطوير (اضغط على الكارت لفتح الكود)",
            
            // Admin Panel Translations (Arabic)
            photo_hidden: "الحساب محمي",
            admin_panel_title: "لوحة التحكم الإدارية",
            verifying_identity: "التحقق من الهوية...",
            checking_ip: "جاري فحص عنوان الـ IP الخاص بك مع سياسة النظام...",
            access_denied: "تم رفض الدخول",
            ip_not_authorized: "عنوان الـ IP الخاص بك غير مصرح له بالدخول للوحة الإدارة.",
            security_logged: "تم تسجيل هذا الحدث الأمني. تفرض سياسة الأمن السيبراني ضوابط صارمة للوصول.",
            photo_mgmt: "إدارة الصورة الشخصية",
            photo_mgmt_desc: "تبديل ظهور صورتك الشخصية على الصفحة الرئيسية.",
            photo_visible: "حالة الصورة: مرئية",
            photo_hidden_status: "حالة الصورة: مخفية",
            delete_photo_btn: "حذف الصورة الشخصية",
            restore_photo_btn: "استعادة الصورة الشخصية",
            add_project: "إضافة مشروع جديد",
            add_project_desc: "أدخل التفاصيل باللغتين الإنجليزية والعربية لتوسيع معرض أعمالك.",
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
        
        // Dynamically re-render projects in the selected language
        if (typeof renderProjects === 'function') {
            renderProjects(lang);
        }
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

    /* ==========================================================================
       Dynamic Portfolio Management & Cyber Admin Controls
       ========================================================================== */

    // 1. Project Database & Renderer
    const defaultProjects = [
        {
            id: 'default_roblox',
            title: {
                en: "Roblox Map",
                ar: "خريطة روبلوكس"
            },
            tech: "Roblox Studio",
            desc: {
                en: "A Roblox map I created that was played by 820+ players, helping me learn about game design and player interaction.",
                ar: "خريطة روبلوكس أنشأتها وتم لعبها من قبل أكثر من 820 لاعب، مما ساعدني على تعلم تصميم الألعاب وتفاعل اللاعبين."
            },
            img: "roblox_map.png",
            link: "https://www.roblox.com/games/134300561660119/arbain-stealer",
            status: "available",
            icon: "fas fa-cube"
        }
    ];

    window.renderProjects = function(lang) {
        const container = document.getElementById('projects-container');
        if (!container) return;

        const customProjects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
        const allProjects = [...defaultProjects, ...customProjects];
        
        // Detect if admin is authenticated or hash route is active
        const isAdmin = localStorage.getItem('admin_authenticated') === 'true' || window.location.hash === '#mohamed';

        container.innerHTML = '';

        allProjects.forEach(proj => {
            const titleText = proj.title[lang] || proj.title['en'];
            const descText = proj.desc[lang] || proj.desc['en'];
            const statusClass = proj.status === 'working' ? 'working' : 'available';
            const statusVal = proj.status === 'working'
                ? (lang === 'ar' ? 'قيد العمل' : 'Working on')
                : (lang === 'ar' ? 'متاح' : 'Available');
            
            const isCustom = proj.id !== 'default_roblox';

            const card = document.createElement('div');
            card.className = `project-card ${proj.img ? 'has-image' : ''}`;

            card.innerHTML = `
                ${proj.img ? `
                <div class="project-img-container">
                    <img src="${proj.img}" alt="${titleText}" class="project-img">
                </div>
                ` : ''}
                <div class="card-icon"><i class="${proj.icon || 'fas fa-cube'}"></i></div>
                <h3>${titleText}</h3>
                <p class="tech-stack">${proj.tech}</p>
                <p>${descText}</p>
                <div class="project-actions">
                    <a href="${proj.link}" target="_blank" class="project-link" style="animation: none;">
                        ${translations[lang].play_game || 'Try Now'} <i class="fas fa-external-link-alt"></i>
                    </a>
                    ${isAdmin && isCustom ? `
                    <button class="btn-delete-card-proj danger-btn" data-id="${proj.id}" style="padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; border: 1px solid rgba(255, 51, 102, 0.3); background: rgba(255, 51, 102, 0.1); color: #ff3366;" title="${lang === 'ar' ? 'حذف المشروع' : 'Delete Project'}">
                        <i class="fas fa-trash-alt"></i> ${lang === 'ar' ? 'حذف' : 'Delete'}
                    </button>
                    ` : `<span class="status-badge ${statusClass}">${statusVal}</span>`}
                </div>
            `;

            // Zoom image lightbox interaction
            if (proj.img) {
                const imgElement = card.querySelector('.project-img');
                card.addEventListener('click', function(e) {
                    if (e.target.closest('.project-link') || e.target.closest('.status-badge') || e.target.closest('.btn-delete-card-proj')) {
                        return;
                    }
                    const dynamicModal = document.getElementById('image-modal');
                    const dynamicModalImg = document.getElementById('full-image');
                    const dynamicCaptionText = document.getElementById('caption');
                    if (dynamicModal && dynamicModalImg && dynamicCaptionText) {
                        dynamicModal.style.display = "block";
                        dynamicModalImg.src = imgElement.src;
                        dynamicCaptionText.innerHTML = imgElement.alt;
                    }
                });
            }

            // Bind click to homepage delete button
            if (isAdmin && isCustom) {
                const delBtn = card.querySelector('.btn-delete-card-proj');
                if (delBtn) {
                    delBtn.addEventListener('click', function(e) {
                        e.stopPropagation(); // Avoid opening lightbox image modal!
                        const idToDelete = this.getAttribute('data-id');
                        deleteCustomProject(idToDelete);
                    });
                }
            }

            container.appendChild(card);
        });
    };

    // Initial project rendering
    renderProjects(document.documentElement.lang || 'en');

    // 2. Profile Photo Controller (Delete/Restore)
    const profileImg = document.getElementById('profile-photo-img');
    const profilePlaceholder = document.getElementById('profile-photo-placeholder');
    const togglePhotoBtn = document.getElementById('toggle-photo-btn');
    const togglePhotoBtnText = document.getElementById('toggle-photo-btn-text');
    const photoStatusDot = document.getElementById('photo-status-dot');
    const photoStatusText = document.getElementById('photo-status-text');

    function updatePhotoUI() {
        const isDeleted = localStorage.getItem('portfolio_photo_deleted') === 'true';
        const currentLang = document.documentElement.lang || 'en';
        const heroImageContainer = document.getElementById('hero-image-container');

        if (isDeleted) {
            if (heroImageContainer) heroImageContainer.style.display = 'none';
            
            // Dashboard updates
            if (photoStatusDot) {
                photoStatusDot.classList.remove('active');
            }
            if (photoStatusText) {
                photoStatusText.textContent = currentLang === 'ar' ? "حالة الصورة: مخفية" : "Photo Status: Hidden";
            }
            if (togglePhotoBtn) {
                togglePhotoBtn.className = 'btn-dashboard primary-btn'; // Green/Cyan highlight
                togglePhotoBtn.style.background = '#00ff88';
                togglePhotoBtn.style.color = '#000';
            }
            if (togglePhotoBtnText) {
                togglePhotoBtnText.textContent = currentLang === 'ar' ? "استعادة الصورة الشخصية" : "Restore Profile Photo";
                const iconElement = togglePhotoBtn.querySelector('i');
                if (iconElement) {
                    iconElement.className = 'fas fa-undo';
                }
            }
        } else {
            if (heroImageContainer) heroImageContainer.style.display = 'flex';
            if (profileImg) profileImg.style.display = 'block';
            if (profilePlaceholder) profilePlaceholder.style.display = 'none';

            // Dashboard updates
            if (photoStatusDot) {
                photoStatusDot.classList.add('active');
            }
            if (photoStatusText) {
                photoStatusText.textContent = currentLang === 'ar' ? "حالة الصورة: مرئية" : "Photo Status: Visible";
            }
            if (togglePhotoBtn) {
                togglePhotoBtn.className = 'btn-dashboard danger-btn';
                togglePhotoBtn.style.background = '';
                togglePhotoBtn.style.color = '';
            }
            if (togglePhotoBtnText) {
                togglePhotoBtnText.textContent = currentLang === 'ar' ? "حذف الصورة الشخصية" : "Delete Profile Photo";
                const iconElement = togglePhotoBtn.querySelector('i');
                if (iconElement) {
                    iconElement.className = 'fas fa-trash-alt';
                }
            }
        }
    }

    // Set initial photo state
    updatePhotoUI();

    if (togglePhotoBtn) {
        togglePhotoBtn.addEventListener('click', () => {
            const isDeleted = localStorage.getItem('portfolio_photo_deleted') === 'true';
            localStorage.setItem('portfolio_photo_deleted', (!isDeleted).toString());
            updatePhotoUI();
        });
    }

    // 3. Admin Security Routing & Modal Controller
    const adminModal = document.getElementById('admin-modal');
    const adminClose = document.querySelector('.admin-close');
    const adminVerificationView = document.getElementById('admin-verification-view');
    const adminDeniedView = document.getElementById('admin-denied-view');
    const adminDashboardView = document.getElementById('admin-dashboard-view');
    
    const visitorIpDisplay = document.getElementById('visitor-ip-display');
    const deniedIpVal = document.getElementById('denied-ip-val');

    // Authorized developer IP (detected from system environment)
    const AUTHORIZED_IP = '46.110.178.138';

    function openAdminPanel() {
        if (!adminModal) return;
        adminModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable page scrolling
        
        // Reset Views
        adminVerificationView.style.display = 'block';
        adminDeniedView.style.display = 'none';
        adminDashboardView.style.display = 'none';
        
        if (visitorIpDisplay) visitorIpDisplay.textContent = 'IP: Scanning...';
        updatePhotoUI(); // Sync photo dashboard status
        renderAdminProjectsList(); // Load custom projects in dashboard

        // Check if access is local (localhost, file system) -> Grant direct access
        const isLocal = window.location.protocol === 'file:' || 
                        window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1' || 
                        window.location.hostname === '::1';

        // Retrieve visitor IP using a secure JSON service
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => {
                const visitorIp = data.ip;
                if (visitorIpDisplay) visitorIpDisplay.textContent = `IP: ${visitorIp}`;
                
                setTimeout(() => {
                    if (visitorIp === AUTHORIZED_IP || isLocal) {
                        // Grant access
                        adminVerificationView.style.display = 'none';
                        adminDashboardView.style.display = 'block';
                    } else {
                        // Access Denied
                        adminVerificationView.style.display = 'none';
                        adminDeniedView.style.display = 'block';
                        if (deniedIpVal) deniedIpVal.textContent = visitorIp;
                    }
                }, 1500); // 1.5s delay for realistic security scan aesthetics
            })
            .catch(err => {
                console.warn('IP fetch failed, falling back to network protocols:', err);
                if (visitorIpDisplay) visitorIpDisplay.textContent = 'IP: Off-grid / Local';
                
                setTimeout(() => {
                    if (isLocal) {
                        // Local developer access -> grant clearance
                        adminVerificationView.style.display = 'none';
                        adminDashboardView.style.display = 'block';
                    } else {
                        // External network error or offline -> restrict access
                        adminVerificationView.style.display = 'none';
                        adminDeniedView.style.display = 'block';
                        if (deniedIpVal) deniedIpVal.textContent = 'Offline / Unknown';
                    }
                }, 1500);
            });
    }

    function closeAdminPanel() {
        if (!adminModal) return;
        adminModal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
        
        // Remove hash from address bar without page jump
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }

    if (adminClose) {
        adminClose.addEventListener('click', closeAdminPanel);
    }

    // Close admin panel clicking outside of the content container
    if (adminModal) {
        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) {
                closeAdminPanel();
            }
        });
    }

    // Detect router hash change triggers
    function checkHashRoute() {
        if (window.location.hash === '#mohamed') {
            openAdminPanel();
        } else {
            if (adminModal && adminModal.style.display === 'flex') {
                closeAdminPanel();
            }
        }
    }

    window.addEventListener('hashchange', checkHashRoute);
    checkHashRoute(); // Check hash route on page load

    // 3.5 Secret Admin Bypass (Easter Egg Override)
    let deniedClicks = 0;
    const deniedShieldIcon = document.querySelector('#admin-denied-view .shield-icon');
    if (deniedShieldIcon) {
        deniedShieldIcon.style.cursor = 'pointer';
        deniedShieldIcon.addEventListener('click', () => {
            deniedClicks++;
            if (deniedClicks >= 5) {
                deniedClicks = 0;
                const currentLang = document.documentElement.lang || 'en';
                const passcode = prompt(currentLang === 'ar' ? 'أدخل رمز التجاوز الأمني الخاص بالمسؤول:' : 'Enter Admin Security Override Passcode:');
                if (passcode === 'mk-cyber-2026') {
                    localStorage.setItem('admin_authenticated', 'true');
                    
                    if (adminDeniedView) adminDeniedView.style.display = 'none';
                    if (adminDashboardView) adminDashboardView.style.display = 'block';
                    
                    renderProjects(currentLang);
                    renderAdminProjectsList();
                    
                    showCyberAlert(
                        currentLang === 'ar' ? 'تجاوز ناجح' : 'Bypass Granted',
                        currentLang === 'ar' ? 'تم التحقق من رمز المرور وتجاوز جدار الحماية بنجاح!' : 'Passcode verified. Administrative firewall bypass successful!',
                        true
                    );
                } else if (passcode !== null) {
                    showCyberAlert(
                        currentLang === 'ar' ? 'فشل التحقق' : 'Bypass Failed',
                        currentLang === 'ar' ? 'رمز مرور غير صحيح. تم تسجيل محاولة الاختراق!' : 'Invalid passcode. Unauthorized override attempt logged!',
                        false
                    );
                }
            }
        });
    }

    // 4. Custom Project Addition Form
    // 4. Custom Project Addition Form
    const addProjectForm = document.getElementById('add-project-form');
    if (addProjectForm) {
        addProjectForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fileInput = document.getElementById('proj-image-file');
            const file = fileInput && fileInput.files ? fileInput.files[0] : null;

            function saveProjectWithImage(imgData) {
                // Extract values
                const titleEn = document.getElementById('proj-title-en').value.trim();
                const titleAr = document.getElementById('proj-title-ar').value.trim();
                const tech = document.getElementById('proj-tech').value.trim();
                const status = document.getElementById('proj-status').value;
                const link = document.getElementById('proj-link').value.trim();
                const descEn = document.getElementById('proj-desc-en').value.trim();
                const descAr = document.getElementById('proj-desc-ar').value.trim();

                // Construct new project object
                const newProject = {
                    id: 'custom_' + Date.now(),
                    title: {
                        en: titleEn,
                        ar: titleAr
                    },
                    tech: tech,
                    desc: {
                        en: descEn,
                        ar: descAr
                    },
                    img: imgData || null, // Base64 data URL
                    link: link,
                    status: status,
                    icon: 'fas fa-code' // Elegant default code icon
                };

                try {
                    // Save to localStorage
                    const customProjects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
                    customProjects.push(newProject);
                    localStorage.setItem('portfolio_projects', JSON.stringify(customProjects));

                    // Reset form
                    addProjectForm.reset();

                    // Re-render projects and notify
                    const currentLang = document.documentElement.lang || 'en';
                    renderProjects(currentLang);
                    renderAdminProjectsList(); // Refresh admin list
                    
                    // Show custom alert
                    showCyberAlert(
                        currentLang === 'ar' ? 'نجاح العملية' : 'System Secure Publish',
                        currentLang === 'ar' ? 'تمت إضافة المشروع بنجاح!' : 'Your new project has been safely published to your portfolio!',
                        true
                    );
                    
                    // Close panel
                    closeAdminPanel();
                } catch (err) {
                    console.error("QuotaExceededError or other error during storage:", err);
                    const currentLang = document.documentElement.lang || 'en';
                    showCyberAlert(
                        currentLang === 'ar' ? 'فشل الحفظ' : 'Publish Failed',
                        currentLang === 'ar' 
                            ? 'الصورة المرفوعة كبيرة جداً! يرجى رفع صورة بحجم أصغر (أقل من 1 ميجابايت).' 
                            : 'The selected image is too large! Please upload a smaller image file (under 1MB).',
                        false
                    );
                }
            }

            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    saveProjectWithImage(event.target.result);
                };
                reader.onerror = function() {
                    console.error("FileReader failed");
                    saveProjectWithImage(null);
                };
                reader.readAsDataURL(file);
            } else {
                saveProjectWithImage(null);
            }
        });
    }

    // 5. Custom Projects CRUD Manager inside Dashboard
    function renderAdminProjectsList() {
        const listContainer = document.getElementById('admin-custom-projects-list');
        if (!listContainer) return;

        const customProjects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
        const currentLang = document.documentElement.lang || 'en';

        if (customProjects.length === 0) {
            listContainer.innerHTML = `<div class="empty-list-msg">${currentLang === 'ar' ? 'لا توجد مشاريع مخصصة مضافة حالياً.' : 'No custom projects added yet.'}</div>`;
            return;
        }

        listContainer.innerHTML = '';
        customProjects.forEach(proj => {
            const item = document.createElement('div');
            item.className = 'custom-proj-item';
            
            const titleVal = proj.title[currentLang] || proj.title['en'];
            const thumbnailHTML = proj.img 
                ? `<img src="${proj.img}" alt="${titleVal}" class="custom-proj-thumbnail">` 
                : `<div class="custom-proj-thumbnail-placeholder"><i class="fas fa-code"></i></div>`;

            item.innerHTML = `
                <div class="custom-proj-info">
                    ${thumbnailHTML}
                    <div class="custom-proj-details">
                        <span class="custom-proj-title-val">${titleVal}</span>
                        <span class="custom-proj-tech-val">${proj.tech}</span>
                    </div>
                </div>
                <button class="btn-delete-proj" data-id="${proj.id}" title="${currentLang === 'ar' ? 'حذف المشروع' : 'Delete Project'}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;

            // Bind click to delete project
            item.querySelector('.btn-delete-proj').addEventListener('click', function() {
                const idToDelete = this.getAttribute('data-id');
                deleteCustomProject(idToDelete);
            });

            listContainer.appendChild(item);
        });
    }

    function deleteCustomProject(id) {
        const customProjects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
        const filteredProjects = customProjects.filter(proj => proj.id !== id);
        localStorage.setItem('portfolio_projects', JSON.stringify(filteredProjects));
        
        const currentLang = document.documentElement.lang || 'en';
        renderProjects(currentLang);
        renderAdminProjectsList();
        
        showCyberAlert(
            currentLang === 'ar' ? 'تم حذف المشروع' : 'Project Deleted', 
            currentLang === 'ar' ? 'تمت إزالة المشروع بنجاح من معرض أعمالك.' : 'The project was successfully removed from your portfolio.', 
            true
        );
    }

    // 6. Custom Glassmorphic Cyber Alert Controller
    const cyberAlertOverlay = document.getElementById('cyber-alert');
    const cyberAlertTitle = document.getElementById('cyber-alert-title');
    const cyberAlertMsg = document.getElementById('cyber-alert-msg');
    const cyberAlertBtn = document.getElementById('cyber-alert-btn');

    window.showCyberAlert = function(title, message, isSuccess = true) {
        if (!cyberAlertOverlay) {
            alert(message); // Fallback
            return;
        }
        
        if (cyberAlertTitle) cyberAlertTitle.textContent = title;
        if (cyberAlertMsg) cyberAlertMsg.textContent = message;
        
        const iconContainer = cyberAlertOverlay.querySelector('.cyber-alert-icon');
        if (iconContainer) {
            if (isSuccess) {
                iconContainer.className = 'cyber-alert-icon t-green';
                iconContainer.innerHTML = '<i class="fas fa-shield-alt"></i>';
            } else {
                iconContainer.className = 'cyber-alert-icon t-red';
                iconContainer.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            }
        }
        
        cyberAlertOverlay.style.display = 'flex';
    };

    if (cyberAlertBtn) {
        cyberAlertBtn.addEventListener('click', () => {
            if (cyberAlertOverlay) {
                cyberAlertOverlay.style.display = 'none';
            }
        });
    }

    if (cyberAlertOverlay) {
        cyberAlertOverlay.addEventListener('click', (e) => {
            if (e.target === cyberAlertOverlay) {
                cyberAlertOverlay.style.display = 'none';
            }
        });
    }

    // 7. Live Cyber Terminal Logging Loop
    const cyberLogs = document.getElementById('cyber-logs');
    if (cyberLogs) {
        const logTemplatesEn = [
            { tag: '[OK]', type: 't-green', text: 'Handshake complete with Sudanese gateway...' },
            { tag: '[SCAN]', type: 't-cyan', text: 'Analyzing system dependencies: Pygame & Roblox active' },
            { tag: '[SECURE]', type: 't-green', text: 'Port audit completed: 0 vulnerabilities flagged' },
            { tag: '[INFO]', type: 't-yellow', text: 'Mohamed Khater learning agent initialized' },
            { tag: '[SCAN]', type: 't-cyan', text: 'Scanning local subnets for firewall penetration...' },
            { tag: '[SECURE]', type: 't-green', text: 'Sudan gateway firewall operating at 100% efficiency' },
            { tag: '[OK]', type: 't-green', text: 'Connected to local portfolio database engine.' },
            { tag: '[INFO]', type: 't-yellow', text: 'Status update: Cyber Security Specialist in progress' },
            { tag: '[OK]', type: 't-green', text: 'Kali Linux monitoring active on secure shell' }
        ];

        const logTemplatesAr = [
            { tag: '[جاهز]', type: 't-green', text: 'اكتمل الاتصال مع البوابة السودانية بنجاح...' },
            { tag: '[فحص]', type: 't-cyan', text: 'تحليل متطلبات النظام: بايثون وروبلوكس نشطين' },
            { tag: '[آمن]', type: 't-green', text: 'اكتمل تدقيق المنافذ: لم يتم العثور على ثغرات' },
            { tag: '[معلومات]', type: 't-yellow', text: 'تم بدء عميل التعلم الخاص بمحمد خاطر' },
            { tag: '[فحص]', type: 't-cyan', text: 'فحص الشبكات المحلية بحثاً عن اختراق جدار الحماية...' },
            { tag: '[آمن]', type: 't-green', text: 'جدار حماية بوابة السودان يعمل بكفاءة 100٪' },
            { tag: '[جاهز]', type: 't-green', text: 'متصل بقاعدة بيانات معرض الأعمال المحلية.' },
            { tag: '[معلومات]', type: 't-yellow', text: 'تحديث الحالة: أخصائي أمن سيبراني قيد التدريب' },
            { tag: '[جاهز]', type: 't-green', text: 'مراقبة كالي لينكس نشطة على الغلاف الآمن' }
        ];

        let logIndex = 0;

        function addTerminalLog() {
            const currentLang = document.documentElement.lang || 'en';
            const templates = currentLang === 'ar' ? logTemplatesAr : logTemplatesEn;
            const log = templates[logIndex];

            const logLine = document.createElement('div');
            logLine.className = 'terminal-line';
            logLine.innerHTML = `<span class="${log.type}">${log.tag}</span> ${log.text}`;
            
            cyberLogs.appendChild(logLine);
            cyberLogs.scrollTop = cyberLogs.scrollHeight;

            logIndex = (logIndex + 1) % templates.length;
        }

        // Add first 3 logs immediately
        setTimeout(addTerminalLog, 200);
        setTimeout(addTerminalLog, 800);
        setTimeout(addTerminalLog, 1400);

        // Periodically append new logs
        setInterval(addTerminalLog, 3500);
    }
});
