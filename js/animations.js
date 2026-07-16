/* ==========================================================================
   GSAP Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const heroTl = gsap.timeline();
    
    heroTl.fromTo('.hero-bg', 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.5, ease: "power2.out" }
    )
    .fromTo('.badge', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 
        "-=1.0"
    )
    .fromTo('.reveal-text', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, 
        "-=0.6"
    )
    .fromTo('.hero-subtitle', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.4"
    )
    .fromTo('.hero-buttons', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.6"
    )
    .fromTo('.loved-by', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.6"
    )
    .fromTo('.scroll-indicator', 
        { opacity: 0 }, 
        { opacity: 1, duration: 1 }, 
        "-=0.3"
    );

    // Fade Up Elements
    gsap.utils.toArray('.gs-reveal-up').forEach(element => {
        gsap.fromTo(element, 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Fade Left Elements
    gsap.utils.toArray('.gs-reveal-left').forEach(element => {
        gsap.fromTo(element, 
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Fade Right Elements
    gsap.utils.toArray('.gs-reveal-right').forEach(element => {
        gsap.fromTo(element, 
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Scale Up Elements (Video Container)
    gsap.utils.toArray('.gs-scale-up').forEach(element => {
        gsap.fromTo(element, 
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Staggered Elements (Cards, Gallery Items)
    // We group them by their parent container to stagger correctly
    const staggerContainers = ['.services-grid', '.menu-grid', '.testimonials-grid', '.masonry-grid'];
    
    staggerContainers.forEach(containerSelector => {
        const container = document.querySelector(containerSelector);
        if (container) {
            const items = container.querySelectorAll('.gs-stagger');
            if (items.length > 0) {
                gsap.fromTo(items, 
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        }
    });
    
    // Parallax effect on hero image on scroll
    gsap.to('.hero-image', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // --- Premium Enhancements ---

    // 1. Animated Counters (About Section)
    gsap.utils.toArray('.counter').forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            once: true, // Only animate once
            onEnter: () => {
                const target = parseInt(counter.getAttribute('data-target'));
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2.5,
                    snap: { innerHTML: 1 },
                    ease: "power2.out"
                });
            }
        });
    });

});
