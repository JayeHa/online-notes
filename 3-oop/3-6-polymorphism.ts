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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) { 
            super(beans); 
        }
        private steamMilk(): void{
            console.log('Steaming some milk...');            
            
        }
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots); //super
            this.steamMilk();
            return{
                ...coffee,
                hasMilk: true,
            }
        }
    }

    class sweetCoffeeMaker extends CoffeeMachine{
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            }
        }

        }
    

    const machines: CoffeeMaker[] = [ //
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new sweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new sweetCoffeeMaker(16),
    ];
    machines.forEach(machine => {
        console.log('---------------------');
        machine.makeCoffee(1);
    })
    
    //machines를 커피메이커 interface의 배열로 만들 수도 있음.
    // 이렇게 하면 이 머신은 커피메이커이므로 makeCoffee()함수만 있음
    // 인터페이스에 한 가지 api만 있기 때문에 이 인터페이스에 규약된 함수 하나만 호출 가능

    // => 이처럼 다형성이란 하나의 인터페이스나 부모의 클래스를 상속한 자식 클래스들이
    // 인터페이스와 부모클래스에 있는 함수들을 다른 방식으로 다양하게 구성함으로써 다양성 만드는것
    
    // 그리고 이처럼 인터페이스와 부모클래스에 있는 동일한 함수 api를 통해서 각각의 구현된 자식클래스의 내부구현사항을
    // 신경쓰지 않고 약속된 api를 호출함으로써 사용하는 사람도 간편하게 다양한 기능들을 활용할 수 있도록 도와줌

}