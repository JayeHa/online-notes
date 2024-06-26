'use strict'
import * as sound from './sound.js';

const CARROT_SIZE = 80;

export default class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();
        /*
        자바스크립트에서 this라는 것은 어떤 클래스 안에 있는 함수를 다른 콜백으로 전달할 때는
        그 함수가 포함되어져 있는 클래스의 정보가 사라집니다.
        그래서 클래스와 이 함수를 묶을 수 있는, this와 함수를 묶을 수 있는 바인딩이라는 것이 있음

        // 첫 번째 방법: 직접적으로 클래스와 바인딩한 함수를 onclick에다가 할당(잘 쓰지않음)
        this.onClick = this.onClick.bind(this);
        this.field.addEventListener('click', this.onClick);       
        */
        /*
        // 두 번째 방법: arrow func으로 event를 전달받아서 onClick을 event에 넣어서 호출 (하나의 더 콜백을 감싸서 this유지)
        this.field.addEventListener('click', (event) => this.onClick(event));
        */
        //세 번째 방법: 그대로 쓰고 
        //클래스 안에 있는 어떤 함수를 다른 콜백으로 전달할 때는 변수로 onClick이라는 멤버변수로 만들고 이 멤버 변수는 arrow function을 가리킴
        //-> 이 방법도 this가 바인딩이 자동적으로 됨
        this.field.addEventListener('click', this.onClick);
    }

    init() {
        this.field.innerHTML = '';
        this._addItem('carrot', this.carrotCount, 'img/carrot.png');
        this._addItem('bug', this.bugCount, 'img/bug.png');
    }

    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;

    }

    // _name은 예전에 썼던 방법인데, js에서는 아직 private한 함수를 만들 수 없기때문에 사용(타입스크립트에서는 가능)
    _addItem(className, count, imgPath) {
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - CARROT_SIZE;
        const y2 = this.fieldRect.height - CARROT_SIZE;
        for (let i = 0; i < count; i++) {
            const item = document.createElement('img');
            item.setAttribute('class', className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            this.field.appendChild(item);
        }
    }

    //클래스 안에 있는 어떤 함수를 다른 콜백으로 전달할 때는 변수로 onClick이라는 멤버변수로 만들고 이 멤버 변수는 arrow function을 가리킴
    //-> 이 방법도 this가 바인딩이 자동적으로 됨
    onClick = event => {
        const target = event.target;
        if (target.matches('.carrot')) {
            target.remove();
            sound.playCarrot();
            this.onItemClick && this.onItemClick('carrot');
        } else if (target.matches('.bug')) {
            this.onItemClick && this.onItemClick('bug');
        }
    }

    // onClick(event) {
    //     const target = event.target;
    //     if (target.matches('.carrot')) {
    //         target.remove();
    //         sound.playCarrot();
    //         this.onItemClick && this.onItemClick('carrot');
    //     } else if (target.matches('.bug')) {
    //         this.onItemClick && this.onItemClick('bug');
    //     }
    // }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}