/**
 * Prashant Kumar - Portfolio JavaScript Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // DOM Elements
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');
    const backToTopBtn = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const statNumbers = document.querySelectorAll('.stat-number');
    const copyEmailBtn = document.getElementById('copyEmailBtn');

    // ── 1. Custom Smooth Scroll for ALL internal anchor links & buttons ──
    // Uses requestAnimationFrame with easeInOutCubic for a visible, cinematic scroll
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

                // Update URL hash without jumping
                history.pushState(null, null, targetId);

                // Close mobile menu if open
                if (navLinksContainer && navLinksContainer.classList.contains('open')) {
                    navLinksContainer.classList.remove('open');
                }
            }
        });
    });

    // ── 2. Sticky Navbar & Back to Top Button on Scroll ──
    window.addEventListener('scroll', () => {
        // Sticky Navbar shadow
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to Top button visibility
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

    // ── 3. Mobile Navigation Toggle ──
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
        });
    }

    // ── 4. Back to Top Click Handler ──
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo(0, 900);
        });
    }

    // ── 5. Copy Email to Clipboard ──
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const emailText = 'itsprashantkumar@gmail.com';
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

    // ── 6. IntersectionObserver for Reveal Animations ──
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

    // ── 7. Hero Stat Counter Animation ──
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

    // ── 8. Contact / Message Form (Triggers Mail Client) ──
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

            // Show launching state
            submitBtn.innerHTML = `<span>Opening Mail App...</span> <i class="fa-solid fa-envelope-open-text"></i>`;
            submitBtn.disabled = true;
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Opening your email client with pre-filled message... Click send in your mail app!';

            // Construct mailto link with pre-filled fields
            const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoUrl = `mailto:itsprashantkumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

            setTimeout(() => {
                window.location.href = mailtoUrl;
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
            }, 600);
        });
    }

});