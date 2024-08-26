'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Mountain click events
    const mountainElements = document.querySelectorAll('#mountain-one, #mountain-two');
    mountainElements.forEach(function(element) {
        element.addEventListener('click', function() {
            mountainElements.forEach(function(mountainElement) {
                mountainElement.classList.toggle('active');
                mountainElement.classList.toggle('inactive');
            });
            const tabImages = document.querySelectorAll('#tab-one-image, #tab-two-image');
            tabImages.forEach(function(tabImage) {
                tabImage.classList.toggle('active-tab-image');
                tabImage.classList.toggle('inactive-tab-image');
            });
            const scheduleSection = document.querySelector('#schedule-section');
            scheduleSection.classList.toggle('active-section');
            scheduleSection.classList.toggle('inactive-section');
        });
    });

    // Accordion button click events
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.toggle('collapsed');
            const correspondingCollapse = document.querySelector(button.getAttribute('href'));
            correspondingCollapse.classList.toggle('show');
        });
    });
});
