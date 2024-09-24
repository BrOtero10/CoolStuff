let nbDrop = 858;
function randRage(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
}

function createRain() {
    for (let i = 1; i < nbDrop; i++) {
        let dropLeft = randRage(0, 1600);
        let dropTop = randRage(-1000, 1400);

        document.querySelector('.rain').insertAdjacentHTML('beforeend', `<div class="drop" id="drop${i}"></div>`);
        document.getElementById(`drop${i}`).style.left = `${dropLeft}px`;
        document.getElementById(`drop${i}`).style.top = `${dropTop}px`
    }
}

createRain();