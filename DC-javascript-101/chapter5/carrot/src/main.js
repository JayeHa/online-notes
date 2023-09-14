'use strict'
import PopUp from './popup.js';
import * as sound from './sound.js';
import { GameBuilder, Reason } from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
    .withGameDuration(5)
    .withCarrotCount(3)
    .withBugCount(3)
    .build();

game.setGameStopListener((reason) => {
    let message;
    switch (reason) {
        case Reason.cancel:
            message = 'Replay?'
            sound.playAlert();
            break;
        case Reason.win:
            message = 'YOU WON!';
            sound.playWin();
            break;
        case Reason.lose:
            message = 'YOU LOST:(';
            sound.playBug();
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
    game.start();
});

// 이 게임 안에는 게임을 만들 수 있는 빌더와 각각의 DOM요소들을 받아와서
// 게임 안에 있는 필드를 만들어서 게임을 start하고 stop하고
// 아이템이 클릭되면 점수 계산을 해주는 것들이 포함되어져 있고요
// 실제로 아이템들이 어떻게 배치되고 어떻게 클릭되는지는
// 필드 안에서 정의되어져 있습니다.
// 그리고 배너는 이렇게 팝업 안에 정의되어져 있고요