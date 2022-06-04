let background=document.body.querySelector('.wrapper__background');
let width=1024;
let movablePart=document.body.querySelector('.mouvablePart');

let firsItem=document.body.querySelector('.firstItem');

let secondItem=document.body.querySelector('.secondItem');

let thirdItem=document.body.querySelector('.thirdItem');

setTimeout(function(){
    background.style.transform = 'translate(-' + (2)* width + 'px)';
    firsItem.style.transform = 'translate(-' + (2)* width + 'px)';
    secondItem.style.transform = 'translate(-' + (2)* width + 'px)';
    thirdItem.style.transform = 'translate(-' + (2)* width + 'px)';
},3000)