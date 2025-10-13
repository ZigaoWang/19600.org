/**
 * Treeman 19600 Website - Main JavaScript
 * Simple 2000s-style interactivity
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    showDesignPopup();
});

/**
 * Initialize mobile navigation toggle (only for mobile)
 */
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

/**
 * Show design philosophy banner on first visit
 */
function showDesignPopup() {
    if (!sessionStorage.getItem('designBannerShown')) {
        const header = document.querySelector('.site-header');
        if (header) {
            const banner = document.createElement('div');
            banner.className = 'design-banner';
            banner.innerHTML = `
                <button class="design-banner-close">&times;</button>
                <h3>Why Does This Website Look "Old"?</h3>
                <p><strong>Created in 2025</strong> - You might wonder why this website has a vintage aesthetic. We deliberately chose this design to stand out from those generic Google Sites, WordPress, or Wix templates.</p>
                <p>When Zigao came across <a href="https://team254.com" target="_blank">Team 254's website</a>, he fell in love with this vintage feel. We wanted to go full 2000s/2010s with fonts like Verdana, but that just wasn't the taste - Verdana is so bad at times. So we added some modern touches like system UI fonts for better readability while keeping the retro aesthetic.</p>
                <p>We want to seem like an old team... nah just kidding! We're actually a competitive team with great achievements - check out our <a href="achievements.html">awards page</a>!</p>
                <p><strong>We don't want to be just another team with a cookie-cutter website. We want you to remember us.</strong></p>
            `;
            header.insertAdjacentElement('afterend', banner);

            banner.querySelector('.design-banner-close').onclick = function() {
                banner.remove();
                sessionStorage.setItem('designBannerShown', 'true');
            };
        }
    }
}
