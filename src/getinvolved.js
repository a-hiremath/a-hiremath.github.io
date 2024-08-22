width = screen.width;
var over640; 
burger = document.getElementById('hamburger');
var removed = 0;


(width > 700) ? over640 = true : over640 = false;  


function fonting(addition){


    var elementer = bode.querySelectorAll("*")

    console.log('fonted');

    for (i=0; i < elementer.length; i++) {


        var element = elementer[i];

        console.log(element.nodeName);

        if( element.nodeName == 'P'){

            console.log('pfonted');

            element.classList.add('pfont');

            console.log(element.classList);
        }

        if (element.nodeName == 'H1'){
            console.log('h1fonted');
            element.classList.add('h1font');
            console.log(element.classList);
        }

        if(element.nodeName == 'H2') {
            console.log('h2 fonted');
            element.classList.add('h2font')
            console.log(element.classList);
        }

    }




}

fonting();


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

    classlength != classes.length ? console.log('was removed') : console.log('not removed');
    
}

function delClass2(elementid, class1){

    var classes = document.getElementById(elementid).classList;    
    var elem = document.getElementById(elementid);

    classlength = classes.length


    console.log('classes: ' + classes + ' length: ' + classlength);


    classes.remove(class1);

    classlength != classes.length ? console.log('was removed') : console.log('not removed');
    
}

function functioner(element){

    console.log('functioned')

    for (i=0; i<(element.classList.length); i++){

        if (element.classList[i].startsWith('p-') && element.classList[i].length < 5){
            element.classlist.remove(element.classlist[i]);
        } else {
            console.log('continued')
        }
    
    }


}


function mobilesizing(){

    var elementArray = maincontent.querySelectorAll("*");

    console.log(elementArray);
    potential = ['-','y-','x-','r-','l-','t-','b-'];

    for (i = 0; i < elementArray.length; i++) {

        element = elementArray[i];

        for (a = 0; 1 < elementArray.length; a++) {

            if (element.nodeName == 'P' || element.nodeName == 'H2'){

                for (b=0; b < element.classlist.length; b++){
                    
                    for(c = 0; c < potential.length; c++){

                    if (element.classlist[b].startsWith('p' + potential[c])){
                        element.classList.remove(element.classlist[b]);
                    }

                    }
                }

            }

        }
        
        element.id = ('element' + String(i));
        el = element.id
        console.log(element.id);

        delClass(element.id, 'grid', 'grid-cols-2');
        delClass(element.id, 'border-black', 'border-2');
        delClass(element.id, 'border-b-4', 'border-l-4');
        delClass(element.id, 'border-t-4', 'border-r-4');

        for (n=0;n<elementArray[i].classList.length;n++){
            
        }

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