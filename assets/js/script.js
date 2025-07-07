// Navigation functionality
document.addEventListener( 'DOMContentLoaded', function () {
    // Mobile menu toggle
    const hamburger = document.querySelector( '.hamburger' );
    const navMenu = document.querySelector( '.nav-menu' );

    hamburger.addEventListener( 'click', function () {
        hamburger.classList.toggle( 'active' );
        navMenu.classList.toggle( 'active' );
    } );

    // Close mobile menu when clicking on a link
    document.querySelectorAll( '.nav-link' ).forEach( n => n.addEventListener( 'click', () => {
        hamburger.classList.remove( 'active' );
        navMenu.classList.remove( 'active' );
    } ) );

    // Navbar scroll effect
    window.addEventListener( 'scroll', function () {
        const navbar = document.querySelector( '.navbar' );
        if ( window.scrollY > 100 ) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    } );

    // Back to top button
    const backToTop = document.getElementById( 'backToTop' );

    window.addEventListener( 'scroll', function () {
        if ( window.scrollY > 300 ) {
            backToTop.classList.add( 'visible' );
        } else {
            backToTop.classList.remove( 'visible' );
        }
    } );

    backToTop.addEventListener( 'click', function () {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        } );
    } );

    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll( '[data-speed]' );

    window.addEventListener( 'scroll', function () {
        const scrolled = window.pageYOffset;

        floatingElements.forEach( element => {
            const speed = element.getAttribute( 'data-speed' );
            const yPos = -( scrolled * speed );
            element.style.transform = `translateY(${yPos}px)`;
        } );
    } );

    // AOS (Animate On Scroll) functionality
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver( function ( entries ) {
        entries.forEach( entry => {
            if ( entry.isIntersecting ) {
                entry.target.classList.add( 'aos-animate' );
            }
        } );
    }, observerOptions );

    document.querySelectorAll( '[data-aos]' ).forEach( element => {
        observer.observe( element );
    } );

    // Video player functionality
    window.playVideo = function () {
        const videoPlayer = document.getElementById( 'videoPlayer' );
        const playButton = videoPlayer.querySelector( '.play-button' );

        // Create video element
        const video = document.createElement( 'video' );
        video.src = 'assets/zobolicious-ad.mp4'; // Placeholder video
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        video.style.borderRadius = '20px';

        // Replace placeholder with video
        videoPlayer.innerHTML = '';
        videoPlayer.appendChild( video );

        // Fallback if video doesn't exist
        video.addEventListener( 'error', function () {
            videoPlayer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 1.2rem;">
                    <div style="text-align: center;">
                        <i class="fas fa-play-circle" style="font-size: 3rem; margin-bottom: 20px;"></i>
                        <p>Video coming soon!</p>
                    </div>
                </div>
            `;
        } );
    };

    // Portion-ometer interaction
    const portionWheel = document.querySelector( '.portion-wheel' );
    const portionNumber = document.querySelector( '.portion-number' );

    if ( portionWheel ) {
        portionWheel.addEventListener( 'click', function () {
            const currentPortion = parseInt( portionNumber.textContent );
            const newPortion = currentPortion === 5 ? 1 : currentPortion + 1;
            portionNumber.textContent = newPortion;

            // Update wheel colors based on portion
            const colors = [
                '#4CAF50',
                '#45a049',
                '#388E3C',
                '#2E7D32',
                '#1B5E20'
            ];

            const angle = ( 360 / 5 ) * newPortion;
            portionWheel.style.background = `conic-gradient(
                ${colors[newPortion - 1]} 0deg ${angle}deg,
                #ccc ${angle}deg 360deg
            )`;
        } );
    }

    // Social media feed hover effects
    const feedItems = document.querySelectorAll( '.feed-item' );

    feedItems.forEach( item => {
        item.addEventListener( 'mouseenter', function () {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        } );

        item.addEventListener( 'mouseleave', function () {
            this.style.transform = 'scale(1) rotate(0deg)';
        } );
    } );

    // Smooth scrolling for anchor links
    document.querySelectorAll( 'a[href^="#"]' ).forEach( anchor => {
        anchor.addEventListener( 'click', function ( e ) {
            e.preventDefault();
            const target = document.querySelector( this.getAttribute( 'href' ) );
            if ( target ) {
                target.scrollIntoView( {
                    behavior: 'smooth',
                    block: 'start'
                } );
            }
        } );
    } );

    // Form validation for contact forms
    const contactForms = document.querySelectorAll( 'form' );

    contactForms.forEach( form => {
        form.addEventListener( 'submit', function ( e ) {
            e.preventDefault();

            // Basic validation
            const inputs = form.querySelectorAll( 'input[required], textarea[required]' );
            let isValid = true;

            inputs.forEach( input => {
                if ( !input.value.trim() ) {
                    isValid = false;
                    input.style.borderColor = '#ff4444';
                } else {
                    input.style.borderColor = '#4CAF50';
                }
            } );

            if ( isValid ) {
                // Show success message
                showNotification( 'Message sent successfully!', 'success' );
                form.reset();
            } else {
                showNotification( 'Please fill in all required fields.', 'error' );
            }
        } );
    } );

    // Notification system
    function showNotification( message, type ) {
        const notification = document.createElement( 'div' );
        notification.className = `notification ${type}`;
        notification.textContent = message;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            ${type === 'success' ? 'background: #4CAF50;' : 'background: #ff4444;'}
        `;

        document.body.appendChild( notification );

        setTimeout( () => {
            notification.style.transform = 'translateX(0)';
        }, 100 );

        setTimeout( () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout( () => {
                document.body.removeChild( notification );
            }, 300 );
        }, 3000 );
    }

    // Product filter functionality
    const filterButtons = document.querySelectorAll( '.filter-btn' );
    const productItems = document.querySelectorAll( '.product-item' );

    filterButtons.forEach( button => {
        button.addEventListener( 'click', function () {
            const filter = this.getAttribute( 'data-filter' );

            // Update active button
            filterButtons.forEach( btn => btn.classList.remove( 'active' ) );
            this.classList.add( 'active' );

            // Filter products
            productItems.forEach( item => {
                if ( filter === 'all' || item.getAttribute( 'data-category' ) === filter ) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            } );
        } );
    } );

    // Search functionality
    const searchInput = document.querySelector( '.search-input' );
    if ( searchInput ) {
        searchInput.addEventListener( 'input', function () {
            const searchTerm = this.value.toLowerCase();
            const searchableItems = document.querySelectorAll( '.searchable' );

            searchableItems.forEach( item => {
                const text = item.textContent.toLowerCase();
                if ( text.includes( searchTerm ) ) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            } );
        } );
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll( '.faq-item' );

    faqItems.forEach( item => {
        const question = item.querySelector( '.faq-question' );
        const answer = item.querySelector( '.faq-answer' );

        question.addEventListener( 'click', function () {
            const isOpen = item.classList.contains( 'open' );

            // Close all other items
            faqItems.forEach( otherItem => {
                otherItem.classList.remove( 'open' );
                otherItem.querySelector( '.faq-answer' ).style.maxHeight = '0';
            } );

            // Toggle current item
            if ( !isOpen ) {
                item.classList.add( 'open' );
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        } );
    } );

    // Newsletter subscription
    const newsletterForm = document.querySelector( '.newsletter-form' );
    if ( newsletterForm ) {
        newsletterForm.addEventListener( 'submit', function ( e ) {
            e.preventDefault();
            const email = this.querySelector( 'input[type="email"]' ).value;

            if ( email ) {
                showNotification( 'Thanks for subscribing!', 'success' );
                this.reset();
            } else {
                showNotification( 'Please enter a valid email address.', 'error' );
            }
        } );
    }

    // Add loading animation
    window.addEventListener( 'load', function () {
        document.body.classList.add( 'loaded' );
    } );

    // Add CSS for animations
    const style = document.createElement( 'style' );
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        body:not(.loaded) {
            opacity: 0;
        }
        
        body.loaded {
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        .filter-btn.active {
            background: #4CAF50;
            color: white;
        }
        
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .faq-item.open .faq-question::after {
            transform: rotate(180deg);
        }
    `;
    document.head.appendChild( style );
} );

// Utility functions
function debounce( func, wait ) {
    let timeout;
    return function executedFunction( ...args ) {
        const later = () => {
            clearTimeout( timeout );
            func( ...args );
        };
        clearTimeout( timeout );
        timeout = setTimeout( later, wait );
    };
}

// Throttle function for scroll events
function throttle( func, limit ) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if ( !inThrottle ) {
            func.apply( context, args );
            inThrottle = true;
            setTimeout( () => inThrottle = false, limit );
        }
    };
}

// Export functions for use in other scripts
window.ZoboliciousUtils = {
    showNotification: function ( message, type ) {
        // Implementation moved to main script
    },
    debounce: debounce,
    throttle: throttle
}; 