
document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.getElementById('hamburger'); 
    const theMenu = document.getElementById('menu'); 
    var clickered = false;

    const toggle = function(){
        
        if(clickered == false){
            theMenu.id = 'menu';
            clickered = true;
        }

        else {
            theMenu.id = 'unmenu';
            clickered = false;
        }
        
    }


    window.addEventListener('resize', function() {
        if (window.innerWidth > 680) {
            document.getElementById("flower").id = "unflower";
        } else if (window.innerWidth <= 680) {
            document.getElementById("unflower").id = "flower";
        }
    });




        
    
    hamburger.addEventListener("click", function(e) {
        
        console.log('clicked');
        e.stopPropagation();
        toggle();

    });

    

    


    var transitionLinks = document.querySelectorAll('.page-transition');

    transitionLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Prevent the default link behavior
    
            var goTo = this.getAttribute('href');  // Store the link URL
            var currentUrl = window.location.href;
    
            // Normalize both URLs
            var normalizedGoTo = new URL(goTo, window.location.href).href;
            var normalizedCurrentUrl = new URL(currentUrl).href;
    
            // Compare the normalized URLs
            if (normalizedGoTo === normalizedCurrentUrl) {
                console.log("Already on the same page");
                document.body.classList.add('animate__animated', 'animate__headShake');
                return;  // Stops the function if the URLs match
            }
    
            // Trigger the animation if the URLs are different
            document.body.classList.add('animate__animated', 'animate__fadeOut');
    
            // Wait for the animation to finish before changing the page
            setTimeout(function() {
                document.querySelector('.BalbirText') && document.querySelector('.BalbirText').classList.remove('animate__animated');
                window.location.href = goTo;
            }, 800);  // Adjust timing to match the animation duration
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('animate__animated', 'animate__fadeIn');
});


