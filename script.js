// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = link.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            // Smooth scrolling
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add smooth scrolling effect to all links with hashes
    (function() {
        'use strict';
        var anchorLinks = document.querySelectorAll('a[href^="#"]');
        for (var i = 0; i < anchorLinks.length; i++) {
            anchorLinks[i].addEventListener('click', function(e) {
                var targetID = this.getAttribute('href');
                e.preventDefault();
                document.getElementById(targetID).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    })();
});
