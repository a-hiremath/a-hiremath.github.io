console.log(screen.width);
smack = document.getElementbyId('smack');


function togglegrid(){

    document.getElementById('smack').classList.add('grid', 'grid-cols-1');
    document.getElementById('smackmini').classList.add('w-screen');
    document.getElementById('smackminier').classList.add('w-screen');

    document.getElementById.('navBarItems').classlist.toggle('display:none');
    console.log('triggered');

}

function untogglegrid(){
    document.getElementById('smack').classList.remove('grid');
    document.getElementById('smackmini').classList.remove('w-screen');
    document.getElementById('smackminier').classList.add('w-screen');

    document.getElementById('navBarItems').classlist.toggle('display:none');

    console.log('triggered');

}

window.addEventListener('resize', function(){

// if less than 640px

if (screen.width <= 75%){
    togglegrid();
} else {
    untogglegrid();
}

console.log("chat")



})