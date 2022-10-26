const background = document.body.querySelector('.wrapper__background');
let width = 1024;
const movablePart = document.body.querySelector('.mouvablePart');

document.addEventListener('touchstart', touchStart, false);
document.addEventListener('touchmove', touchMove, false);

let x1 = null;
let y1 = null;

function touchStart(e) {
    let firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}
let counter = 0;
function touchMove(e) {
    if (!x1 || !y1) {
        return false;
    }
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            if (counter >= 0) {
                counter = 0;
                background.style.transform = 'translate(' + (counter) * width + 'px)';
                movablePart.style.transform = 'translate(' + (counter) * width + 'px)';
            }
            else {
                counter++;
                console.log(counter);
                background.style.transform = 'translate(' + (counter) * width + 'px)';
                movablePart.style.transform = 'translate(' + (counter) * width + 'px)';
                if (counter === -1) {
                    setTimeout(
                        () => { movablePart.classList.add('spermAnim'); }, 1000
                    )
                }
                else {
                    setTimeout(
                        () => { movablePart.classList.remove('spermAnim'); }, 1000
                    )
                }
            }
        }
        else {
            if (counter <= -2) {
                counter = -2;
                background.style.transform = 'translate(-' + (counter) * width + 'px)';
                movablePart.style.transform = 'translate(-' + (counter) * width + 'px)';
            }
            else {
                counter--;
                console.log(counter);
                background.style.transform = 'translate(-' + (-counter) * width + 'px)';
                movablePart.style.transform = 'translate(-' + (-counter) * width + 'px)';
                if (counter === -1) {
                    setTimeout(
                        () => { movablePart.classList.add('spermAnim'); }, 1000
                    )
                }
                else {
                    setTimeout(
                        () => { movablePart.classList.remove('spermAnim'); }, 1000
                    )

                }
            }
        }
        x1 = null;
        y1 = null;
    }
}
let homeSvg = document.body.querySelector('.wrapper__svg');

homeSvg.addEventListener('click', () => {
    counter = 0;
    background.style.transform = 'translate(' + (counter) * width + 'px)';
    movablePart.style.transform = 'translate(' + (counter) * width + 'px)';
})
let whatNextBtn = document.body.querySelector('.firstItem__button');
whatNextBtn.addEventListener('click', () => {
    counter = -1;
    background.style.transform = 'translate(' + (counter) * width + 'px)';
    movablePart.style.transform = 'translate(' + (counter) * width + 'px)';
    setTimeout(
        () => { movablePart.classList.add('spermAnim'); }, 1000
    )
})
