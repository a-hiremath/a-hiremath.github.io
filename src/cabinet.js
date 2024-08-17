width = screen.width;
var over640; 
burger = document.getElementById('hamburger');



(width > 700) ? over640 = true : over640 = false;  



function delClass(elementid){

    var classes = document.getElementById(elementid).classList;    

    classlength = classes.length


    console.log('classes: ' + classes + ' length: ' + classlength);


    classes.remove('grid', 'grid-cols-1');

    classlength != classes.length ? console.log('removed') : console.log('not removed');
    

}


function mobilesizing(){

    var elementArray = maincontent.querySelectorAll("*");

    console.log(elementArray);

    for (i = 0; i < elementArray.length; i++) {

        element = elementArray[i];

        element.id = ('element' + String(i));
        console.log(element.id);

        delClass(element.id);
        
    }

}

mobilesizing();


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

(width > 700) ? hamtoggle() : navtoggle();


window.addEventListener('resize', function(){
    width = screen.width;
    let isOver640Now = (width > 700);

    // Check if the width has crossed the 640px boundary
    if (isOver640Now !== over640) {
        toggle();
        over640 = isOver640Now;  // Update the condition
    }

    console.log(isOver640Now + ' ' + width + ' ' + over640);
});

console.log(over640);

menu = document.getElementById('menu')

burger.addEventListener('click', function(){

    console.log('clicked');
    
    menu.classList.toggle('hidden');

})