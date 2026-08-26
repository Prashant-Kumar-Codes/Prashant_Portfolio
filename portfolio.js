/**
 * ═══════════════════════════════════════════════════════════════
 * PRASHANT KUMAR - PORTFOLIO INTERACTIVE LOGIC
 * Authentic Theme • Academic Journey Timeline • Project Details Modal
 * ═══════════════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ── 1. DOM Elements ──────────────────────────────────────
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');
    const backToTopBtn = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const statNumbers = document.querySelectorAll('.stat-number');
    const copyEmailBtn = document.getElementById('copyEmailBtn');

    // Timeline Elements
    const experienceSection = document.getElementById('experience');
    const timelineProgress = document.getElementById('timelineProgress');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Project Modal Elements
    const projectModalBackdrop = document.getElementById('projectModalBackdrop');
    const projectModalDialog = document.getElementById('projectModalDialog');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalTechTags = document.getElementById('modalTechTags');
    const modalActions = document.getElementById('modalActions');
    const modalImage = document.getElementById('modalImage');
    const modalRole = document.getElementById('modalRole');
    const modalStatus = document.getElementById('modalStatus');
    const modalDomain = document.getElementById('modalDomain');
    const openModalButtons = document.querySelectorAll('[data-open-project]');

    // ── 2. Project Details Database ──────────────────────────
    const projectsData = {
        aqi: {
            title: "AQI Smart Health Advisor",
            category: "Full-Stack | Machine Learning - Forecasting",
            description: "A production-grade web platform and predictive machine learning engine designed to monitor real-time air pollution levels across 10,000+ global cities. It translates complex pollutant indexes (PM2.5, PM10, NO2, O3) into proactive, personalized health advisories and forecasted trends.",
            features: [
                "Real-time air pollution tracking across 10,000+ cities globally.",
                "AI-driven personal health recommendations based on user sensitivity.",
                "Pollution forecasting algorithms predicting PM2.5 and PM10 shifts.",
                "Interactive maps and visual data trends with instant search.",
                "High-performance RESTful API endpoints for external data consumption."
            ],
            tech: ["Python", "Machine Learning", "FastAPI", "Pandas", "Scikit-Learn", "REST APIs", "Modern JS"],
            role: "Lead Full-Stack & ML Engineer",
            status: "Deployed & Live",
            domain: "Environmental AI & Analytics",
            image: "images/aqi_project.jpg",
            liveUrl: "https://aqi.prashantbuilds.in/",
            githubUrl: "https://github.com/Prashant-Kumar-Codes"
        },
        inspector: {
            title: "Business Inspector",
            category: "Full-Stack | Data Analysis | ML Forecasting & Churns",
            description: "An AI-powered intelligence platform that ingests raw business and customer transaction data to forecast revenue trends, identify high-value customer clusters, and predict customer churn risks through interactive analytical dashboards.",
            features: [
                "Predictive churn probability model evaluating customer transaction history.",
                "Revenue forecasting using supervised regression algorithms.",
                "Interactive executive dashboards with dynamic filtering and metric drill-downs.",
                "Customer segmentation based on RFM (Recency, Frequency, Monetary) metrics.",
                "Automated data cleaning and automated summary insight generator."
            ],
            tech: ["Python", "Scikit-Learn", "Data Analytics", "Pandas", "Flask", "Chart.js", "PostgreSQL"],
            role: "Data Scientist & Full-Stack Developer",
            status: "Deployed & Live",
            domain: "Business Intelligence & Predictive Analytics",
            image: "images/business_inspector_project.jpg",
            liveUrl: "https://inspector.prashantbuilds.in/",
            githubUrl: "https://github.com/Prashant-Kumar-Codes"
        },
        seic: {
            title: "SEIC - Smart Entrepreneur Investor Connect",
            category: "Full-Stack | Python, Flask, PostgreSQL & LLM",
            description: "A secure networking and matchmaking platform that bridges early-stage startups and angel investors. Features smart profile verification, LLM-powered pitch matching, and scalable PostgreSQL database schemas.",
            features: [
                "LLM-assisted matchmaking engine analyzing startup decks and investor preferences.",
                "Role-based authentication system with secure token management.",
                "Comprehensive startup profile management and pitch metrics.",
                "Clean RESTful API architecture connecting frontend and database.",
                "Scalable PostgreSQL database schema with relational integrity."
            ],
            tech: ["Python", "Flask", "PostgreSQL", "LLMs", "REST APIs", "HTML5/CSS3", "JavaScript"],
            role: "Backend & Systems Developer",
            status: "Completed & Maintained",
            domain: "FinTech & Founder Networking",
            image: "images/seic_project.jpg",
            liveUrl: null,
            githubUrl: "https://github.com/Prashant-Kumar-Codes"
        },
        nlp: {
            title: "Text Classification & NLP Suite",
            category: "Machine Learning | NLP & Sentiment Analysis",
            description: "A comprehensive Natural Language Processing suite incorporating sentiment classification, spam detection, and tokenization pipelines using TF-IDF feature extraction and machine learning classifiers.",
            features: [
                "Sentiment classification model with high precision and recall on reviews.",
                "Spam detection classifier filtering malicious or unsolicited text messages.",
                "Custom NLP preprocessing pipeline (Tokenization, Lemmatization, Stop-word removal).",
                "TF-IDF vectorizer and Naive Bayes / SVM classifier optimization.",
                "Interactive evaluation metrics with Confusion Matrix and ROC curve generation."
            ],
            tech: ["Python", "NLP", "Scikit-Learn", "NLTK", "TF-IDF", "Matplotlib", "Seaborn"],
            role: "ML & NLP Engineer",
            status: "Open Source Code",
            domain: "Natural Language Processing",
            image: "images/Text_Classification.jpg",
            liveUrl: null,
            githubUrl: "https://github.com/Prashant-Kumar-Codes/NLP/tree/main/7_NLP_Projects/1_Text_Classification/1_Sentiment_Analysis"
        },
        prediction: {
            title: "Machine Learning Prediction Models",
            category: "Supervised ML | Flood Forecasting & Irrigation",
            description: "A collection of predictive machine learning models built using Scikit-Learn. Focuses on solving high-stakes predictive challenges: accurate flood level forecasting and agricultural irrigation schedule optimization based on soil moisture and weather data.",
            features: [
                "Flood prediction model evaluating historical rainfall, river flow, and elevation metrics.",
                "Smart irrigation scheduling predictor optimizing agricultural water consumption.",
                "Extensive exploratory data analysis (EDA) and feature correlation mapping.",
                "Hyperparameter tuning and cross-validation across ensemble regressors.",
                "Modular Python scripts for easy inference and dataset loading."
            ],
            tech: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Regression Analysis", "Matplotlib"],
            role: "Machine Learning Developer",
            status: "Open Source Code",
            domain: "Predictive Analytics & Environmental ML",
            image: "images/Machine_Learning_Prediction.jpg",
            liveUrl: null,
            githubUrl: "https://github.com/Prashant-Kumar-Codes/Machine-Learning-With-Scikit-Learn/tree/main/Projects/Codes/3_Flood_Prediction"
        }
    };

    // ── 3. Project Details Modal Open / Close Logic ──────────
    function openProjectModal(projectId) {
        const data = projectsData[projectId];
        if (!data || !projectModalBackdrop) return;

        // Populate modal data
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalRole.textContent = data.role;
        modalStatus.textContent = data.status;
        modalDomain.textContent = data.domain;
        modalImage.src = data.image;
        modalImage.alt = data.title;

        // Populate Features List
        modalFeatures.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${feature}</span>`;
            modalFeatures.appendChild(li);
        });

        // Populate Tech Tags
        modalTechTags.innerHTML = '';
        data.tech.forEach(t => {
            const span = document.createElement('span');
            span.className = 'modal-tech-pill';
            span.textContent = t;
            modalTechTags.appendChild(span);
        });

        // Populate Actions (Live Demo / GitHub)
        modalActions.innerHTML = '';
        if (data.liveUrl) {
            const liveBtn = document.createElement('a');
            liveBtn.href = data.liveUrl;
            liveBtn.target = '_blank';
            liveBtn.rel = 'noopener noreferrer';
            liveBtn.className = 'btn-primary';
            liveBtn.innerHTML = `<span>Live Demo</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
            modalActions.appendChild(liveBtn);
        }

        if (data.githubUrl) {
            const gitBtn = document.createElement('a');
            gitBtn.href = data.githubUrl;
            gitBtn.target = '_blank';
            gitBtn.rel = 'noopener noreferrer';
            gitBtn.className = 'btn-secondary';
            gitBtn.innerHTML = `<i class="fa-brands fa-github"></i> <span>View Code</span>`;
            modalActions.appendChild(gitBtn);
        }

        // Reset modal dialog scroll to top before showing
        if (projectModalDialog) {
            projectModalDialog.scrollTop = 0;
        }

        // Show Modal
        projectModalBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (!projectModalBackdrop) return;
        projectModalBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Modal Trigger Listeners — stopPropagation prevents anchor scroll
    openModalButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const projectId = btn.getAttribute('data-open-project');
            openProjectModal(projectId);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
    }

    if (projectModalBackdrop) {
        projectModalBackdrop.addEventListener('click', (e) => {
            if (e.target === projectModalBackdrop) {
                closeProjectModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModalBackdrop && projectModalBackdrop.classList.contains('open')) {
            closeProjectModal();
        }
    });

    // ── 4. Academic Journey Interactive Scroll Timeline ──────
    let ticking = false;
    function updateAcademicJourneyTimeline() {
        if (!experienceSection || !timelineProgress || timelineItems.length === 0) return;

        const rect = experienceSection.getBoundingClientRect();
        const sectionHeight = experienceSection.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate progress percentage through the section
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            const visibleProgress = (windowHeight - rect.top) / (sectionHeight + windowHeight * 0.35);
            const clampedProgress = Math.min(Math.max(visibleProgress, 0), 1);
            timelineProgress.style.height = `${clampedProgress * 100}%`;
        }

        // Activate waypoint nodes as each card approaches viewport center
        timelineItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            if (itemRect.top <= windowHeight * 0.7) {
                item.classList.add('active-node');
                // Add staggered animation delay
                item.style.transitionDelay = `${index * 0.08}s`;
            } else {
                item.classList.remove('active-node');
            }
        });
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateAcademicJourneyTimeline();
                ticking = false;
            });
            ticking = true;
        }
    });
    updateAcademicJourneyTimeline();

    // ── 5. Smooth Scroll for ALL Navigation ───────────────────
    function smoothScrollTo(targetY, duration) {
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        let startTime = null;

        function easeInOutCubic(t) {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startY + distance * ease);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 5;

                smoothScrollTo(targetPosition, 900);

                history.pushState(null, null, targetId);

                if (navLinksContainer && navLinksContainer.classList.contains('open')) {
                    navLinksContainer.classList.remove('open');
                }
            }
        });
    });

    // ── 6. Sticky Navbar & Back to Top Button on Scroll ───────
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Active Link Highlight
        const sections = document.querySelectorAll('section[id], header[id]');
        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ── 7. Mobile Navigation Toggle ──────────────────────────
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
        });
    }

    // ── 8. Back to Top Click Handler ─────────────────────────
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo(0, 900);
        });
    }

    // ── 9. Copy Email to Clipboard ───────────────────────────
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const emailText = 'prashantkumar102369@gmail.com';
            navigator.clipboard.writeText(emailText).then(() => {
                const originalHtml = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = `<i class="fa-solid fa-check" style="color:var(--accent);"></i>`;
                copyEmailBtn.title = "Copied!";

                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalHtml;
                    copyEmailBtn.title = "Copy Email";
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy email: ", err);
            });
        });
    }

    // ── 10. IntersectionObserver for Reveal Animations ───────
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ── 11. Hero Stat Counter Animation ──────────────────────
    let statsAnimated = false;
    const animateStats = () => {
        if (statsAnimated) return;
        const heroStats = document.querySelector('.hero-stats');
        if (!heroStats) return;

        const rect = heroStats.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 50) {
            statNumbers.forEach(stat => {
                const targetText = stat.getAttribute('data-target');
                if (!targetText) return;

                const targetVal = parseFloat(targetText);
                const originalText = stat.textContent;
                const prefix = originalText.includes('#') ? '#' : '';
                const suffix = originalText.includes('+') ? '+' : '';
                const isDecimal = targetText.includes('.');

                let count = 0;
                const steps = 35;
                const increment = targetVal / steps;

                const updateCount = () => {
                    count += increment;
                    if (count < targetVal) {
                        stat.textContent = prefix + (isDecimal ? count.toFixed(2) : Math.ceil(count)) + suffix;
                        setTimeout(updateCount, 30);
                    } else {
                        stat.textContent = prefix + (isDecimal ? targetVal.toFixed(2) : targetVal) + suffix;
                    }
                };
                updateCount();
            });
            statsAnimated = true;
        }
    };

    window.addEventListener('scroll', animateStats);
    animateStats();

    // ── 12. Contact / Message Form (Triggers Mail Client) ────
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            const submitBtn = contactForm.querySelector('.submit-btn');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !subject || !message) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Please fill out all fields before submitting.';
                return;
            }

            if (!emailRegex.test(email)) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Please enter a valid email address.';
                return;
            }

            const originalBtnHtml = submitBtn.innerHTML;

            submitBtn.innerHTML = `<span>Opening Mail App...</span> <i class="fa-solid fa-envelope-open-text"></i>`;
            submitBtn.disabled = true;
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Opening your email client with pre-filled message...';

            const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoUrl = `mailto:prashantkumar102369@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

            setTimeout(() => {
                window.location.href = mailtoUrl;
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
            }, 600);
        });
    }

    // ── 13. Project Card 3D Tilt Effect ──────────────────────
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;
            
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ── 14. Staggered Project Card Reveal ────────────────────
    projectCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

});