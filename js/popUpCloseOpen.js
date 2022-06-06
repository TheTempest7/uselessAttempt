let popUpOpenPoint=document.body.querySelector('.thirdDown__buttonStructure');

popUpOpenPoint.addEventListener('click',function(){
    popUpOpenPoint.closest('.thirdItem').classList.add('popUpActive');
})



let closePopUp=document.body.querySelector('.popUP__cross-cyst');

closePopUp.addEventListener('click',function(){
    closePopUp.closest('.thirdItem').classList.remove('popUpActive');
})

let closePopUpSecond=document.body.querySelector('.popUP__bottle');

closePopUpSecond.addEventListener('click',function(){
    closePopUpSecond.closest('.thirdItem').classList.remove('popUpActive');
})