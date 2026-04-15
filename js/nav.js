document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', isOpen);
        toggle.classList.toggle('open', isOpen);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('open');
        });
    });
});
