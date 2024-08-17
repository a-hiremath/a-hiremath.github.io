width = screen.width;
var over640; 
burger = document.getElementById('hamburger');
var removed = 0;


(width > 700) ? over640 = true : over640 = false;  

function reorder(element){


    

    console.log(element.id + ' this is an image')

    parent = (element.parentNode).parentNode;



    if (parent.firstElementChild.firstElementChild.id == element.id){
        console.log('skipped')
        return;
    } else {

        parent.appendChild(parent.firstElementChild);

        
    }

}


function delClass(elementid, class1, class2){

    var classes = document.getElementById(elementid).classList;    
    var elem = document.getElementById(elementid);

    classlength = classes.length


    console.log('classes: ' + classes + ' length: ' + classlength);


    classes.remove(class1, class2);

    if (classlength != classes.length) {
        console.log('removed');
        removed ++; 
    }

    classlength != classes.length ? console.log('removed') : console.log('not removed');
    
}




function mobilesizing(){

    var elementArray = maincontent.querySelectorAll("*");

    console.log(elementArray);

    for (i = 0; i < elementArray.length; i++) {

        element = elementArray[i];

        element.id = ('element' + String(i));
        console.log(element.id);

        delClass(element.id, 'grid', 'grid-cols-2');
        delClass(element.id, 'border-black', 'border-2');
        delClass(element.id, 'border-b-4', 'border-l-4');
        delClass(element.id, 'border-t-4', 'border-r-4');

        elementattributes = element.attributes;
        console.log(elementattributes);

        if (elementattributes.getNamedItem('src') && (element.id != 'element2')) {
            reorder(elementArray[i]);
        }

    }

    

}

console.log(width - 700);

(width - 700 < 0) ? mobilesizing() : console.log('over 700');


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