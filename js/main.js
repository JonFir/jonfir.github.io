document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Mobile dropdown toggles
    const dropdowns = document.querySelectorAll('.main-nav .dropdown');
    
    function setupDropdowns() {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            if (link) {
                // Remove existing listeners
                link.removeEventListener('click', dropdownClickHandler);
                // Add new listener
                link.addEventListener('click', dropdownClickHandler);
            }
        });
    }
    
    function dropdownClickHandler(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = this.closest('.dropdown');
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
        }
    }
    
    // Initial setup
    setupDropdowns();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('active') && 
            !event.target.closest('.main-nav') && 
            !event.target.closest('.menu-toggle')) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    // Update dropdown behavior on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
        setupDropdowns();
    });
});