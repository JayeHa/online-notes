import { Field, ItemType } from './field.js';
import * as sound from './sound.js';

export const Reason = Object.freeze({
    win: 'win',
    lose: 'lose',
    cancel: 'cancel',
});

// Builder Pattern
export class GameBuilder {
    withGameDuration(duration) {
        this.gameDuration = duration;
        return this;
        // 우리가 array배열에서 map이나 reduce 등을 쓰면 array자체를 리턴하기 때문에 메소드를 체이닝해서 계속 호출할 수가 있었죠? 그거랑 똑같이 할거예요.
    }

    withCarrotCount(num) {
        this.carrotCount = num;
        return this;
    }

    withBugCount(num) {
        this.bugCount = num;
        return this;
    }

    build() {
        console.log(this);
        return new Game(
            this.gameDuration, //프리티어가 할 줄에 놔두지 않도록, 그리고 carrotCount와 모듈안에 함께 있기 때문에 우리가 build를 쓰면서 생성자의 정의를 볼 수 있기 때문에
            this.carrotCount,
            this.bugCount
        );
    }
}

class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');
        this.gameBtn = document.querySelector('.game__button');
        this.gameBtn.addEventListener('click', () => {
            if (this.started) {
                this.stop(Reason.cancel);
            } else {
                this.start();
            }
        });
        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;

    }

    start() {
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBackground();
    }

    stop(reason) {
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(reason);
    }

    onItemClick = (item) => {
        if (!this.started) {
            return;
        }
        if (item === ItemType.carrot) {
            this.score++;
            this.updateScoreBoard();

            if (this.score === this.carrotCount) {
                this.stop(Reason.win);
            }
        } else if (item === ItemType.bug) {
            this.stop(Reason.lose);
        }
    };

    showStopButton() {
        const icon = this.gameBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }

    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }

    showTimerAndScore() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }

    startGameTimer() {
        let remainingTimerSec = this.gameDuration;
        this.updateTimerText(remainingTimerSec);
        this.timer = setInterval(() => {
            if (remainingTimerSec <= 0) {
                clearInterval(this.timer);
                this.stop(this.carrotCount === this.score ? Reason.win : Reason.lose);
                return;
            }
            this.updateTimerText(--remainingTimerSec);
        }, 1000)
    }

    stopGameTimer() {
        clearInterval(this.timer);
    }

    updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`;
    }

    initGame() {
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
    }

    updateScoreBoard() {
        this.gameScore.innerText = this.carrotCount - this.score;
    }
}