document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    // Handle scroll event for sticky header
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    // Initial check in case page is loaded scrolled down
    handleScroll();
    
    // Attach scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Handle mobile menu toggle
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('open');
            mobileNav.classList.toggle('open');
            
            // Prevent background scrolling when menu is open
            if (mobileNav.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('open');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
});
