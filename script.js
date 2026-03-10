document.addEventListener('DOMContentLoaded', () => {
    // 0. Mobile Navbar Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 1. Popup Notification Logic
    const popup = document.getElementById('notification-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const popupContactBtn = document.getElementById('popup-contact-btn');

    // Show popup after a short delay
    setTimeout(() => {
        popup.classList.add('show');
    }, 2000);

    // Close popup
    const closePopup = () => {
        popup.classList.remove('show');
    };

    closePopupBtn.addEventListener('click', closePopup);

    // Close popup when clicking the CTA inside it
    popupContactBtn.addEventListener('click', () => {
        closePopup();
        // The href="#contact" handles the scrolling natively
    });

    // 1.5 Number Counter Animation
    const counterElements = document.querySelectorAll('.counter-number');
    const counterObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const targetText = el.innerText;
                const isPlus = targetText.includes('+');
                const targetNumber = parseInt(targetText.replace(/\D/g, ''));

                if (!isNaN(targetNumber)) {
                    let current = 0;
                    const duration = 2000; // 2 seconds
                    const increment = targetNumber / (duration / 16); // 60fps

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetNumber) {
                            clearInterval(timer);
                            el.innerText = targetNumber + (isPlus ? '+' : '');
                        } else {
                            el.innerText = Math.floor(current) + (isPlus ? '+' : '');
                        }
                    }, 16);
                }
                observer.unobserve(el);
            }
        });
    }, counterObserverOptions);

    counterElements.forEach(el => counterObserver.observe(el));

    // 2. Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in-scroll');

    const scrollObserverOptions = {
        root: null,
        rootMargin: '50px', // Trigger slightly before it enters the viewport
        threshold: 0.05    // Trigger almost immediately upon entering
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, scrollObserverOptions);

    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // 3. Form Submission Prevent Default (Dummy behavior)
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            // Loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            try {
                const formData = new FormData(bookingForm);
                const response = await fetch('https://formsubmit.co/ajax/Drakash625@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
                    submitBtn.style.backgroundColor = 'var(--secondary)';

                    setTimeout(() => {
                        bookingForm.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.backgroundColor = '';
                        submitBtn.disabled = false;
                    }, 3000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                submitBtn.innerHTML = '<i class="fas fa-times"></i> Error! Try again.';
                submitBtn.style.backgroundColor = '#dc3545';

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }

    // 4. Navbar active state on scroll (Optional polish)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = 'none';
        }
    });
});
