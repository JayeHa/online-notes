{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker { 
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;   // class level
        private coffeeBeans: number = 0;                   // instance(object) level
        
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning the machine..!');
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
        }

        private preheat(): void{
            console.log('heating up...!');
            
        }

        private extract(shots:number): CoffeeCup {
            console.log(`Pulling ${shots} shots...!`);
            return{
                shots,
                hasMilk: false,
            }
            
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer{
        private steamMilk(): void{
            console.log('Steaming some milk...');            
        }
        makeMilk(cup: CoffeeCup): CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            };
        }
    }

    // 설탕 제조기
    class AutomaticSugarMixer{
        private getSugar(){
            console.log('Getting some sugar from candy.');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar: sugar,
            };
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(
            beans: number,
            public readonly serialNumber: string,
            private milkFother: CheapMilkSteamer
            ) { 
            super(beans); 
        }

        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine{
        constructor(private beans: number, private sugar: AutomaticSugarMixer){
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }
    
    class SweetCaffeLatteMachine extends CoffeeMachine{
        constructor(
            private beans: number, 
            private milk: CheapMilkSteamer, 
            private sugar:AutomaticSugarMixer,
            ){
                super(beans);
        }
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.milk.makeMilk(sugarAdded);
        }
    }

    const machines: CoffeeMaker[] = [ 
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1', new CheapMilkSteamer),
        new SweetCoffeeMaker(16, new AutomaticSugarMixer),
    ];
    machines.forEach(machine => {
        console.log('---------------------');
        machine.makeCoffee(1);
    })

    // 자, 여기서 치명적인 단점이 있는데요, 이 머신들은 CheapMilkSteamer랑 AutomaticSugarMixer랑
    // 굉장히 타이트하게 커플링되어져 있습니다.
    // 자 그말은요 이 모든 아이들은 항상 싸구려와 사탕에서 설탕을 부셔서 만드는 슈가믹서를 이용해야 합니다.
    // 나중에 내가 다른 스티머나 다른 설탕제조기를 만들었을 때 이 모든 클래스가 업데이트되어져야 하죠
    // 이 세가지는 항상 우유 거품기만 만들수 있는 그런 클래스로 스스로를 제약시키는거죠

    // 그렇기 때문에 정말 중요한 포인트가 나가는데요
    // 클래스와 클래스들 간에 서로 잘 알고 지내는 것은 좋지 않아요
    // 자 어떻게 이러한 커플링을 피할 수 있는지
    // 우리가 이 코드를 어떻게 개선할 수 있는지 화려한 테크닉은 이어지는 영상에서 알려드리도록 할게요.

}