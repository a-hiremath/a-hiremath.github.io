width = screen.width;
var over640; 

(width > 640) ? over640 = true : over640 = false;  


function hamtoggle(){
    document.getElementById('hamburger').classList.toggle('hidden')
}

function navtoggle(){
    document.getElementById('nav1').classList.toggle('hidden');
    document.getElementById('nav2').classList.toggle('hidden');
    document.getElementById('nav3').classList.toggle('hidden');
}

function navcheck(){
    if (document.getElementById('nav1').classList.contains('hidden')){
        return true;
    } else {
        return false; 
    }
}

function hamcheck(){
    if (document.getElementById('hamburger').classList.contains('hidden')){
        return true;
    } else {
        return false; 
    }
}



function toggle(){
    hamtoggle();
    navtoggle();
}

(width > 640) ? hamtoggle() : navtoggle();


window.addEventListener('resize', function(){
    width = screen.width;
    let isOver640Now = (width > 640);

    // Check if the width has crossed the 640px boundary
    if (isOver640Now !== over640) {
        toggle();
        over640 = isOver640Now;  // Update the condition
    }

    console.log(isOver640Now + ' ' + width + ' ' + over640);
});

console.log(over640);
