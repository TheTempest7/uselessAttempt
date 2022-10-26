let listCollection = document.body.querySelector('.popUpMove__body').childNodes;

clearListColection = [];
for (let i = 1; typeof listCollection[i] === 'object'; i = i + 2) {
    clearListColection.push(listCollection[i]);
}

/**-----------------------------(get switcheable lists)----------------------- */


let switchers = document.body.querySelectorAll('.popUpMove__round');

for (let i = 0; i < switchers.length; i++) {
    switchers[i].addEventListener('click', () => {
        if (i === 1) {
            clearListColection[i].classList.add('active');
            switchers[i].classList.add('active');
            clearListColection[i - 1].classList.remove('active');
            switchers[i - 1].classList.remove('active');
        }
        else {
            clearListColection[i].classList.add('active');
            switchers[i].classList.add('active');
            clearListColection[i + 1].classList.remove('active');
            switchers[i + 1].classList.remove('active');
        }

    })
}
/**-----------------------------(event on rounds)----------------------- */

let arrows = document.body.querySelector('.popUpMove__changer').getElementsByTagName('svg');


for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', () => {
        if (i === 1) {
            clearListColection[i].classList.add('active');
            switchers[i].classList.add('active');
            clearListColection[i - 1].classList.remove('active');
            switchers[i - 1].classList.remove('active');
        }
        else {
            clearListColection[i].classList.add('active');
            switchers[i].classList.add('active');
            clearListColection[i + 1].classList.remove('active');
            switchers[i + 1].classList.remove('active');
        }

    })
}

/**-----------------------------(event on arrows svg)----------------------- */
