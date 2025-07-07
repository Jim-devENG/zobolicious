/**
 * Zobolicious Main JavaScript - WordPress Integration Ready
 * Contains all interactive functionality for the Zobolicious website
 */

( function () {
    'use strict';

    // DOM Ready function
    function domReady( callback ) {
        if ( document.readyState === 'loading' ) {
            document.addEventListener( 'DOMContentLoaded', callback );
        } else {
            callback();
        }
    }

    // Main initialization function
    function initZobolicious() {
        initMobileMenu();
        initSmoothScrolling();
        initFAQAccordion();
        initVideoPlayer();
        initAnimations();
        initFormValidation();
        initScrollEffects();
    }

    // Mobile Menu Functionality
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById( 'mobile-menu-button' );
        const mobileMenu = document.getElementById( 'mobile-menu' );

        if ( mobileMenuButton && mobileMenu ) {
            mobileMenuButton.addEventListener( 'click', function () {
                mobileMenu.classList.toggle( 'active' );

                // Toggle icon
                const icon = mobileMenuButton.querySelector( 'i' );
                if ( icon ) {
                    if ( mobileMenu.classList.contains( 'active' ) ) {
                        icon.className = 'fas fa-times text-xl';
                    } else {
                        icon.className = 'fas fa-bars text-xl';
                    }
                }
            } );

            // Close menu when clicking outside
            document.addEventListener( 'click', function ( event ) {
                if ( !mobileMenuButton.contains( event.target ) && !mobileMenu.contains( event.target ) ) {
                    mobileMenu.classList.remove( 'active' );
                    const icon = mobileMenuButton.querySelector( 'i' );
                    if ( icon ) {
                        icon.className = 'fas fa-bars text-xl';
                    }
                }
            } );
        }
    }

    // Smooth Scrolling for Anchor Links
    function initSmoothScrolling() {
        const links = document.querySelectorAll( 'a[href^="#"]' );

        links.forEach( link => {
            link.addEventListener( 'click', function ( e ) {
                const href = this.getAttribute( 'href' );

                if ( href === '#' ) return;

                const target = document.querySelector( href );
                if ( target ) {
                    e.preventDefault();

                    const offsetTop = target.offsetTop - 80; // Account for fixed header

                    window.scrollTo( {
                        top: offsetTop,
                        behavior: 'smooth'
                    } );
                }
            } );
        } );
    }

    // FAQ Accordion Functionality
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll( '.faq-item' );

        faqItems.forEach( item => {
            const question = item.querySelector( '.faq-question' );
            const answer = item.querySelector( '.faq-answer' );

            if ( question && answer ) {
                question.addEventListener( 'click', function () {
                    const isOpen = item.classList.contains( 'active' );

                    // Close all other FAQ items
                    faqItems.forEach( otherItem => {
                        if ( otherItem !== item ) {
                            otherItem.classList.remove( 'active' );
                            const otherAnswer = otherItem.querySelector( '.faq-answer' );
                            if ( otherAnswer ) {
                                otherAnswer.style.maxHeight = '0';
                            }
                        }
                    } );

                    // Toggle current item
                    if ( isOpen ) {
                        item.classList.remove( 'active' );
                        answer.style.maxHeight = '0';
                    } else {
                        item.classList.add( 'active' );
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    }
                } );
            }
        } );
    }

    // Video Player Functionality
    function initVideoPlayer() {
        const videoContainers = document.querySelectorAll( '.video-container' );

        videoContainers.forEach( container => {
            const playButton = container.querySelector( '.play-button' );
            const videoElement = container.querySelector( 'video' );

            if ( playButton && videoElement ) {
                playButton.addEventListener( 'click', function () {
                    if ( videoElement.paused ) {
                        videoElement.play();
                        playButton.style.display = 'none';
                    } else {
                        videoElement.pause();
                        playButton.style.display = 'flex';
                    }
                } );

                videoElement.addEventListener( 'ended', function () {
                    playButton.style.display = 'flex';
                } );
            }
        } );
    }

    // Animation on Scroll
    function initAnimations() {
        const animatedElements = document.querySelectorAll( '.fade-in, .slide-in, .scale-in' );

        const observer = new IntersectionObserver( ( entries ) => {
            entries.forEach( entry => {
                if ( entry.isIntersecting ) {
                    entry.target.classList.add( 'animate' );
                }
            } );
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        } );

        animatedElements.forEach( element => {
            observer.observe( element );
        } );
    }

    // Form Validation
    function initFormValidation() {
        const forms = document.querySelectorAll( '.zobo-form' );

        forms.forEach( form => {
            form.addEventListener( 'submit', function ( e ) {
                e.preventDefault();

                const formData = new FormData( form );
                const errors = validateForm( formData );

                if ( errors.length === 0 ) {
                    // Form is valid, you can submit here
                    console.log( 'Form is valid, submitting...' );
                    // In WordPress, you might want to use AJAX here
                    submitForm( formData );
                } else {
                    displayFormErrors( errors );
                }
            } );
        } );
    }

    // Form validation helper
    function validateForm( formData ) {
        const errors = [];

        // Email validation
        const email = formData.get( 'email' );
        if ( email && !isValidEmail( email ) ) {
            errors.push( 'Please enter a valid email address' );
        }

        // Required field validation
        const requiredFields = ['name', 'message'];
        requiredFields.forEach( field => {
            const value = formData.get( field );
            if ( !value || value.trim() === '' ) {
                errors.push( `${field.charAt( 0 ).toUpperCase() + field.slice( 1 )} is required` );
            }
        } );

        return errors;
    }

    // Email validation helper
    function isValidEmail( email ) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test( email );
    }

    // Display form errors
    function displayFormErrors( errors ) {
        const errorContainer = document.querySelector( '.form-errors' );
        if ( errorContainer ) {
            errorContainer.innerHTML = errors.map( error => `<p class="error">${error}</p>` ).join( '' );
            errorContainer.style.display = 'block';
        }
    }

    // Submit form (placeholder for WordPress integration)
    function submitForm( formData ) {
        // This would be replaced with WordPress AJAX or form submission
        console.log( 'Submitting form data:', Object.fromEntries( formData ) );

        // Show success message
        const successMessage = document.querySelector( '.form-success' );
        if ( successMessage ) {
            successMessage.style.display = 'block';
        }
    }

    // Scroll Effects
    function initScrollEffects() {
        const nav = document.querySelector( '.zobo-nav' );

        if ( nav ) {
            window.addEventListener( 'scroll', function () {
                if ( window.scrollY > 100 ) {
                    nav.classList.add( 'scrolled' );
                } else {
                    nav.classList.remove( 'scrolled' );
                }
            } );
        }
    }

    // Utility Functions
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

    // WordPress Integration Helpers
    function initWordPressIntegration() {
        // Check if we're in WordPress
        if ( typeof wp !== 'undefined' ) {
            // WordPress specific functionality
            console.log( 'WordPress detected, initializing WordPress integration...' );

            // Add WordPress admin bar offset
            const adminBar = document.getElementById( 'wpadminbar' );
            if ( adminBar ) {
                document.body.classList.add( 'wp-admin-bar' );
            }
        }
    }

    // Public API for WordPress integration
    window.Zobolicious = {
        init: initZobolicious,
        initWordPress: initWordPressIntegration,
        utils: {
            debounce: debounce,
            throttle: throttle
        }
    };

    // Auto-initialize when DOM is ready
    domReady( function () {
        initZobolicious();
        initWordPressIntegration();
    } );

} )(); 