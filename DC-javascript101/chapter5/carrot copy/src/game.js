'use strict'
import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

export default class Game{
    constructor(CARROT_COUNT,BUG_COUNT,GAME_DURATION_SEC ){
        this.CARROT_COUNT= CARROT_COUNT;
        this.BUG_COUNT = BUG_COUNT;
        this.GAME_DURATION_SEC = GAME_DURATION_SEC;
        
        this.gameBtn = document.querySelector('.game__button');
        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');

        this.started = false;
        this.score = 0;
        this.timer = undefined;

        this.gameField = new Field(CARROT_COUNT, BUG_COUNT);
        this.gameField.setClickListener(this.onItemClick);

        this.gameFinishBanner = new PopUp();
        this.gameFinishBanner.setClickListener(() => {
            this.startGame();
        });

        this.gameBtn.addEventListener('click', () => {
            if (this.started) {
                this.stopGame();
            } else {
                this.startGame();
            }
        })
    }

    onItemClick = (item) => {
        if (!this.started) {
            return;
        }
        if (item === 'carrot') {
            this.score++;
            this.updateScoreBoard();
    
            if (this.score === CARROT_COUNT) {
                this.finishGame(true);
            }
        } else if (item === 'bug') {
            this.finishGame(false);
        }
    }

    startGame() {
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBackground();
    }

    stopGame() {
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        gameFinishBanner.showWithText('REPLAY?');
        sound.playAlert();
        sound.stopBackground();
    }
    
    finishGame(win) {
        started = false;
        hideGameButton();
        if (win) {
            sound.playWin();
        } else {
            sound.playBug();
        }
        stopGameTimer();
        sound.stopBackground();
        gameFinishBanner.showWithText(win ? 'YOU WON' : 'YOU LOST');
    }

    initGame() {
        this.score = 0;
        this.gameScore.innerText = CARROT_COUNT;
        this.gameField.init();
    }

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
        let remainingTimerSec = GAME_DURATION_SEC;
        this.updateTimerText(remainingTimerSec);
        timer = setInterval(() => {
            if (remainingTimerSec <= 0) {
                clearInterval(timer);
                this.finishGame(this.CARROT_COUNT === score);
                return;
            }
            updateTimerText(--remainingTimerSec);
        }, 1000)
    }

    stopGameTimer() {
        clearInterval(timer);
    }
    
    updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`;
    }
    
    
    
    updateScoreBoard() {
        this.gameScore.innerText = this.CARROT_COUNT - score;
    }

}