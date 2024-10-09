width = screen.width;
var over640; 
burger = document.getElementById('hamburger');
var removed = 0;


(width > 700) ? over640 = true : over640 = false;  


function fonting(){
    const classMap = {
        'P': 'pfont',
        'H1': 'h1font',
        'H2': 'h2font'
    };

    document.querySelectorAll('*').forEach(element => {
        const classToAdd = classMap[element.nodeName];
        if (classToAdd) {
            element.classList.add(classToAdd);
            console.log(`${element.nodeName} fonted with ${classToAdd}`);
        }
    });
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


function delClass(elementId, ...classesToRemove){
    var elem = document.getElementById(elementId);
    if (elem) {
        elem.classList.remove(...classesToRemove);
    }
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
    const classRemovals = ['grid', 'grid-cols-2', 'border-black', 'border-2', 'border-b-4', 'border-l-4', 'border-t-4', 'border-r-4'];

    elementArray.forEach((element, index) => {
        element.id = 'element' + index;
        if (['P', 'H2'].includes(element.nodeName)) {
            element.classList.forEach(className => {
                if (className.startsWith('p-') || className.startsWith('py-') || className.startsWith('px-')) {
                    element.classList.remove(className);
                }
            });
        }
        
        // Remove predefined classes in a batch
        element.classList.remove(...classRemovals);

        // Handle image reordering
        if (element.attributes.getNamedItem('src') && element.id != 'element2') {
            reorder(element);
        }
    });
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



function toggle() {
    const isNavHidden = document.getElementById('nav1').classList.contains('hidden');
    if (width > 700 && isNavHidden) {
        navtoggle();
    } else if (width <= 700 && !isNavHidden) {
        navtoggle();
    }
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