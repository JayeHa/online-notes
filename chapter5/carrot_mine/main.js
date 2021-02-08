class carrotGame {
    constructor() {
        const playZone = document.querySelector('.playZone');
        this.counter = 0;
        this.timer = 10;
    }

    // 랜덤좌표 구하는 함수
    getCoordinates() {

    }

    // 좌표값에 따라 그림을 뿌리는 함수
    printTarget() {
        let target = this.createTarget(1);
        playZone.appendChild(target);
    }

    // 타겟(carrot(1) or bug(2)) 생성
    createTarget(typesOfTarget) {
        let target = document.createElement('img');
        if (typesOfTarget == '1' || typesOfTarget === 'carrot') {
            target.setAttribute('id', `carrot`);
            target.setAttribute('src', `/chapter5/carrot_mine/img/carrot.png`)
        } else if (typesOfTarget == '2' || typesOfTarget === 'bug') {
            target.setAttribute('id', `bug`);
            target.setAttribute('src', `/chapter5/carrot_mine/img/bug.png`)

        }

    }

    // 벌레누르면 youloose
    showResult() {

    }

    // 당근 누르면 사라지고 카운터+1
    getPoint() {

        }
        // 타이머

}

// 플레이버튼 누르면 게임실행(타이머,그림뿌리는함수 시작)

window.addEventListener('load', () => {
    const carrotGame = new carrotGame();
    carrotGame.printTarget();
})