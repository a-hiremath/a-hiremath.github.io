document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger'); 
    const theMenu = document.getElementById('menu'); 
    const navContainer = document.getElementById('navContainer');

    function toggleMenu() {
        if (theMenu.classList.contains('hidden')) {
            // Open the menu
            theMenu.classList.remove('hidden');
            setTimeout(() => {
                theMenu.classList.add('opacity-100', 'translate-y-0');
                theMenu.classList.remove('opacity-0', 'translate-y-[-20px]');
                navContainer.classList.add('height-auto'); // Adjust height of container
            }, 1);
        } else {
            // Close the menu
            theMenu.classList.remove('opacity-100', 'translate-y-0');
            theMenu.classList.add('opacity-0', 'translate-y-[-20px]');
            setTimeout(() => {
                theMenu.classList.add('hidden');
                navContainer.classList.remove('height-auto'); // Reset height of container
            }, 50); // Match the transition duration
        }
    }

    hamburger.addEventListener('click', function() {
        toggleMenu();
    });

    function adjustFlower() {
        const flower = document.getElementById("flower") || document.getElementById("unflower");
        flower.id = window.innerWidth > 680 ? "unflower" : "flower";
    }

    window.addEventListener('resize', adjustFlower);
    adjustFlower();

    const transitionLinks = document.querySelectorAll('.page-transition');
    transitionLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const goTo = this.getAttribute('href');
            if (new URL(goTo, window.location.href).href === new URL(window.location.href).href) {
                document.body.classList.add('animate__animated', 'animate__headShake');
            } else {
                document.body.classList.add('animate__animated', 'animate__fadeOut');
                setTimeout(function() {
                    window.location.href = goTo;
                }, 800);
            }
        });
    });

    document.body.classList.add('animate__animated', 'animate__fadeIn');
});
