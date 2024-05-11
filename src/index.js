document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger'); 
    const theMenu = document.getElementById('menu'); 
    let clickered = false;

    function toggleMenu() {
        theMenu.id = clickered ? 'unmenu' : 'menu';
        clickered = !clickered;
    }

    hamburger.addEventListener("click", function(e) {
        console.log('Menu toggle clicked');
        e.stopPropagation();
        toggleMenu();
    });

    function adjustFlower() {
        const flower = document.getElementById("flower") || document.getElementById("unflower");
        flower.id = window.innerWidth > 680 ? "unflower" : "flower";
    }

    window.addEventListener('resize', adjustFlower);
    adjustFlower();  // Call on initial load to set correct state

    const transitionLinks = document.querySelectorAll('.page-transition');
    transitionLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const goTo = this.getAttribute('href');
            if (new URL(goTo, window.location.href).href === new URL(window.location.href).href) {
                console.log("Already on the same page");
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
