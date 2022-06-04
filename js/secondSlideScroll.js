let targetPoint=document.body.querySelector('.secondItem__scrollBlock');

targetPoint.addEventListener('scroll',()=>{
    let targetElem=targetPoint.querySelector('.secondItem__scrollBlock-cyst');
    let height=426;
    console.log(targetPoint.scrollTop);
    targetElem.style.transform=`translateY() `;
})