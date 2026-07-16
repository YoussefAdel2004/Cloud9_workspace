/* ==========================================================================
   Gallery & Video Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize GLightbox for Gallery
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            zoomable: true
        });
    }

    // 2. Video Player Logic
    const videoBtn = document.getElementById('play-video-btn');
    const video = document.getElementById('tour-video');
    
    if (videoBtn && video) {
        videoBtn.addEventListener('click', () => {
            const wrapper = video.closest('.video-wrapper');
            
            if (video.paused) {
                video.play();
                wrapper.classList.add('is-playing');
            }
        });
        
        video.addEventListener('click', () => {
            const wrapper = video.closest('.video-wrapper');
            
            if (!video.paused) {
                video.pause();
                wrapper.classList.remove('is-playing');
            }
        });

        // Pause video if scrolled out of view
        window.addEventListener('scroll', () => {
            if (!video.paused) {
                const rect = video.getBoundingClientRect();
                const isVisible = (
                    rect.top >= -rect.height && 
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + rect.height
                );
                
                if (!isVisible) {
                    video.pause();
                    video.closest('.video-wrapper').classList.remove('is-playing');
                }
            }
        });
    }
});
