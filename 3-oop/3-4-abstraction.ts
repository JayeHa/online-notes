{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker { // interface
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;   // class level
        private coffeeBeans: number = 0;                   // instance(object) level
        
        private constructor(coffeeBeans: number) {
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

    
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2);

    const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker2.fillCoffeeBeans(32);
    maker2.makeCoffee(2);
    maker2.clean();

    // makeMachine이라는 걸 이용하면 CoffeeMachine이라는 오브젝트를 리턴하게 되는데요.
    // 이렇게 CoffeeMachine이라는 타입으로 오브젝트를 받게 되면
    // 이 오브젝트 안에 있는 퍼블릭 함수들을 다 접근가능하지만
    // 이렇게 인터페이스로 다시 타입을 제한해서 받게 되면
    // 인터페이스에서 정의된 아이들만 사용할 수가 있습니다.

}