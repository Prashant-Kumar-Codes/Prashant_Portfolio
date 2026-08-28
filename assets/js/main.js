
$(function(){

    $(window).on('load', function () {
        $('.page-loader').delay('500').fadeOut(1000);
    });

    $(document).ready(function() {

        $(document).on('click', '.icon-menu', function() {
            $('.responsive-sidebar-menu').addClass('active');
        });
        $(document).on('click', '.responsive-sidebar-menu .overlay', function() {
            $('.responsive-sidebar-menu').removeClass('active');
        });

        $(document).on('click', '.menu li .scroll-to', function() {
            $('.responsive-sidebar-menu').removeClass('active');
        })


        $(document).on('click', ".color-boxed a", function() {
            $(".color-boxed a").removeClass("clr-active");
            $(this).addClass("clr-active");
        });
        
        $(document).on('click', ".global-color .setting-toggle", function() {
            $(".global-color").addClass("active");
        });

        $(document).on('click', ".global-color .inner .overlay, .global-color .inner .global-color-option .close-settings", function() {
            $(".global-color").removeClass("active");
        });

    });

    $(window).scroll(function() {
            
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            $('.page-section').each(function(i) {
                if ($(this).position().top <= windscroll - -1) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {

            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

        if (windscroll >= 0) {
            $('.scroll-to-page').each(function(i) {

                var wscrolldecress = windscroll + 1;
                // console.log(wscrolldecress);
                if ($(this).position().top <= wscrolldecress - 0) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {
            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

    }).scroll();







    if ($('.testimonial-slider').length) {
        var testimonial = $('.testimonial-slider').owlCarousel({
            items: 1,
            margin: 30,
            stagePadding: 0,
            smartSpeed: 450,
            autoHeight: true,
            loop: false,
            nav: false,
            dots: false,
            onInitialized  : counter, //When the plugin has initialized.
            onTranslated : counter //When the translation of the stage has finished.
        });

        $('.testimonial-nav .next').on('click', function() {
            testimonial.trigger('next.owl.carousel');
        })
        $('.testimonial-nav .prev').on('click', function() {
            testimonial.trigger('prev.owl.carousel', [300]);
        })


        function counter(event) {
            var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item
        
        // it loop is true then reset counter from 1
        if(item > items) {
                item = item - items
        }
        $('#testimonial-slide-count').html("<span class='left'>"+item+"</span> / "+items)
        }
    }

    // function remove_is_active() {
    //     $(".menu .scroll-to").removeClass("active");
    // }

    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // var container = document.querySelector("#smooth-content");

    // var height;
    // function setHeight() {
    //     height = container.clientHeight;


    //     document.body.style.height = height + "px";
    // }
    // ScrollTrigger.addEventListener("refreshInit", setHeight);

    // gsap.to(container, {
    //     y: () => -(height - document.documentElement.clientHeight),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: container,
    //         start: "top top",
    //         end: "bottom bottom",
    //         scrub: 1,
    //         invalidateOnRefresh: true,
    //     }
    // });

    window.addEventListener('scroll', {
        scroll_animations,
    });


    // Array.prototype.slice.call(document.querySelectorAll(".page-section")).forEach(function (e, t) {
    //     ScrollTrigger.create({
    //         trigger: e,
    //         id: t + 1,
    //         start: "top center",
    //         end: function () {
    //             return "+=".concat(e.clientHeight - 30);
    //         },
    //         toggleActions: "play reverse none reverse",
    //         toggleClass: { targets: e, className: "active" },
    //         onToggle: function () {
    //             $(".menu .scroll-to").removeClass("active"), "" != e.id && $('.menu .scroll-to[href*="#' + e.id + '"]').addClass("active");
    //         },
    //     });
    // });

    // document.querySelectorAll('.scroll-to').forEach((e) => {
    //     const target = e.getAttribute('href');
    //     const targetEl = document.querySelector(target);
    //     // const targetRect = targetEl.getBoundingClientRect();


    //     var offset = gsap.getProperty("#smooth-content", "y");
    //     var position = jQuery(target).get(0).getBoundingClientRect().top - offset;
    

    //     e.addEventListener('click', (e) => {
    //         e.preventDefault();

    //         gsap.to(window, {
    //             scrollTo: position,
    //             ease: "power4",
    //             duration: 0.1,
    //             onToggle: function () {
    //                 console.log('toggle');
    //                 remove_is_active();
    //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
    //             },
    //             onLeaveBack: function () {
    //                 console.log('leave back');
    //                 remove_is_active();
    //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
    //             },
    //             onLeave: function () {
    //                 console.log('leave');
    //                 remove_is_active();
    //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
    //             },
    //             overwrite: !0,
    //         });
    //     });

        
    
    // });

});



function scroll_animations() {
    // var allow_on_mobile = !0;
    // if (typeof config_scroll_animation_on_mobile !== "undefined") allow_on_mobile = config_scroll_animation_on_mobile;
    // if (allow_on_mobile == !1 && is_mobile_device) return;
    var defaults = {
        duration: 1.2,
        ease: "power4.out",
        animation: "fade_from_bottom",
        once: !1,
    };
    gsap.utils.toArray(".scroll-animation").forEach(function (box) {
        var gsap_obj = {};
        var settings = {
            // ease: box.dataset.animationEase || defaults.ease,
            duration: box.dataset.animationDuration || defaults.duration,
        };
        var animations = {
            fade_from_bottom: {
                y: 180,
                opacity: 0,
            },
            fade_from_top: {
                y: -180,
                opacity: 0,
            },
            fade_from_left: {
                x: -180,
                opacity: 0,
            },
            fade_from_right: {
                x: 180,
                opacity: 0,
            },
            fade_in: {
                opacity: 0,
            },
            rotate_up: {
                y: 180,
                rotation: 10,
                opacity: 0,
            },
        };
        var scroll_trigger = {
            scrollTrigger: {
                trigger: box,
                once: defaults.once,
                start: "top bottom+=20%",
                // start: "top bottom+=5%",
                toggleActions: "play none none reverse",
                markers: !1,
            },
        };
        jQuery.extend(gsap_obj, settings);
        jQuery.extend(gsap_obj, animations[box.dataset.animation || defaults.animation]);
        jQuery.extend(gsap_obj, scroll_trigger);
        gsap.from(box, gsap_obj);
    });
}
scroll_animations();

/* ═══════════════════════════════════════════════════════════════
   PROJECT DETAILS MODAL LOGIC
   ═══════════════════════════════════════════════════════════════ */
var projectsDatabase = {
    aqi: {
        title: "AQI Smart Health Advisor",
        category: "Full-Stack • Machine Learning Forecasting",
        image: "assets/images/portfolio1.jpg",
        description: "Monitors real-time air pollution metrics across 10,000+ cities globally and provides proactive AI health recommendations and forecast trends based on PM2.5, PM10, NO2, and O3 levels.",
        tech: ["Python", "FastAPI", "Machine Learning", "Scikit-Learn", "Pandas", "REST APIs"],
        demoUrl: "https://aqi.prashantbuilds.in/",
        githubUrl: "https://github.com/Prashant-Kumar-Codes",
        subprojects: null
    },
    inspector: {
        title: "Business Inspector",
        category: "Full-Stack • Data Analysis & ML Predictions",
        image: "assets/images/portfolio2.jpg",
        description: "An AI-driven intelligence dashboard that converts raw sales and customer transaction records into predictive churn indicators, revenue projections, and customer segmentation clusters.",
        tech: ["Python", "Flask", "Scikit-Learn", "Data Analytics", "Pandas", "Chart.js", "PostgreSQL"],
        demoUrl: "https://inspector.prashantbuilds.in/",
        githubUrl: "https://github.com/Prashant-Kumar-Codes",
        subprojects: null
    },
    seic: {
        title: "SEIC - Smart Entrepreneur Investor Connect",
        category: "Full-Stack • Python Flask, PostgreSQL & LLM",
        image: "assets/images/portfolio3.jpg",
        description: "A structured networking platform bridging startup founders with angel investors. Includes authentication, secure databases, RESTful endpoints, and LLM-powered pitch matching.",
        tech: ["Python", "Flask", "PostgreSQL", "LLM Matching", "REST APIs", "Modern JS"],
        demoUrl: "https://seic.prashantbuilds.in/",
        githubUrl: "https://github.com/Prashant-Kumar-Codes",
        subprojects: null
    },
    nlp: {
        title: "Text Classification & NLP Suite",
        category: "Group Project • Natural Language Processing",
        image: "assets/images/portfolio4.jpg",
        description: "A comprehensive collection of Natural Language Processing models designed to analyze, clean, and classify text data using custom NLP preprocessing pipelines and ML classifiers.",
        tech: ["Python", "NLP", "Scikit-Learn", "TF-IDF", "Sentiment Analysis", "Spam Detection"],
        demoUrl: null,
        githubUrl: "https://github.com/Prashant-Kumar-Codes/NLP",
        subprojects: [
            {
                title: "1. Sentiment Analysis Model",
                description: "Classifies user reviews and text inputs into polarity categories with high precision using TF-IDF feature vectors and optimized classifiers.",
                url: "https://github.com/Prashant-Kumar-Codes/NLP/tree/main/7_NLP_Projects/1_Text_Classification/1_Sentiment_Analysis"
            },
            {
                title: "2. Spam Message Classifier",
                description: "Automated text classifier filtering spam and malicious messages using natural language preprocessing and probabilistic ML models.",
                url: "https://github.com/Prashant-Kumar-Codes/NLP"
            }
        ]
    },
    prediction: {
        title: "Machine Learning Prediction Models",
        category: "Group Project • Supervised Machine Learning",
        image: "assets/images/portfolio5.jpg",
        description: "A curated suite of predictive machine learning models built using Scikit-Learn to tackle real-world predictive challenges in flood risk forecasting and agricultural water management.",
        tech: ["Python", "Scikit-Learn", "Regression", "NumPy", "Pandas", "Feature Engineering"],
        demoUrl: null,
        githubUrl: "https://github.com/Prashant-Kumar-Codes/Machine-Learning-With-Scikit-Learn",
        subprojects: [
            {
                title: "1. Flood Level Forecasting",
                description: "Supervised regression and classification model analyzing rainfall history, river basin metrics, and geography to predict flood occurrences.",
                url: "https://github.com/Prashant-Kumar-Codes/Machine-Learning-With-Scikit-Learn/tree/main/Projects/Codes/3_Flood_Prediction"
            },
            {
                title: "2. Smart Irrigation Scheduling",
                description: "Optimizes agricultural water usage by predicting precise irrigation timings based on soil moisture and ambient temperature.",
                url: "https://github.com/Prashant-Kumar-Codes/Machine-Learning-With-Scikit-Learn"
            }
        ]
    }
};

function renderProjectModal(projectId) {
    var data = projectsDatabase[projectId];
    if (!data) return;

    var container = document.getElementById('modalDynamicContent');
    if (!container) return;

    var techHtml = data.tech.map(function(t) {
        return '<span class="modal-tech-pill">' + t + '</span>';
    }).join('');

    var subprojectsHtml = '';
    if (data.subprojects && data.subprojects.length > 0) {
        subprojectsHtml = '<div class="modal-subprojects-container">' +
            '<h4>Included Sub-Projects &amp; Repositories</h4>';
        
        data.subprojects.forEach(function(sub) {
            subprojectsHtml += '<div class="subproject-card">' +
                '<div class="subproject-info">' +
                    '<h5>' + sub.title + '</h5>' +
                    '<p>' + sub.description + '</p>' +
                '</div>' +
                '<a href="' + sub.url + '" target="_blank" rel="noopener noreferrer" class="subproject-btn">' +
                    '<i class="fa-brands fa-github"></i> <span>View Code</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>' +
                '</a>' +
            '</div>';
        });

        subprojectsHtml += '</div>';
    }

    var actionsHtml = '<div class="modal-actions-bar">';
    if (data.demoUrl) {
        actionsHtml += '<a href="' + data.demoUrl + '" target="_blank" rel="noopener noreferrer" class="modal-action-btn-primary">' +
            '<span>Live Demo</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>' +
        '</a>';
    }
    if (data.githubUrl) {
        actionsHtml += '<a href="' + data.githubUrl + '" target="_blank" rel="noopener noreferrer" class="modal-action-btn-secondary">' +
            '<i class="fa-brands fa-github"></i> <span>' + (data.subprojects ? 'Main Repository' : 'GitHub Repository') + '</span>' +
        '</a>';
    }
    actionsHtml += '</div>';

    container.innerHTML = 
        '<div class="modal-header-meta">' +
            '<span class="modal-category-badge">' + data.category + '</span>' +
            '<h2 class="modal-project-title">' + data.title + '</h2>' +
        '</div>' +
        '<div class="modal-image-wrap">' +
            '<img src="' + data.image + '" alt="' + data.title + '">' +
        '</div>' +
        '<div class="modal-desc-block">' +
            '<h4>Overview</h4>' +
            '<p>' + data.description + '</p>' +
        '</div>' +
        '<div class="modal-desc-block">' +
            '<h4>Technologies &amp; Tools</h4>' +
            '<div class="modal-tech-pills">' + techHtml + '</div>' +
        '</div>' +
        subprojectsHtml +
        actionsHtml;

    var modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    var modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

$(document).on('click', '[data-project-id]', function(e) {
    e.preventDefault();
    var projectId = $(this).data('project-id');
    renderProjectModal(projectId);
});

$(document).on('click', '.project-card-trigger', function(e) {
    e.preventDefault();
    var parent = $(this).closest('[data-project-id]');
    if (parent.length) {
        var projectId = parent.data('project-id');
        renderProjectModal(projectId);
    }
});

$(document).on('click', '#modalCloseBtn', function() {
    closeProjectModal();
});

$(document).on('click', '#projectModal', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

$(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});