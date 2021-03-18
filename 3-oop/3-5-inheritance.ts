{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
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
        constructor(beans: number, public readonly serialNumber: string) { //readonly: 한 번 설정되면 바뀌지 않음
            super(beans); 
            //자식 클래스에서 생성자를 따로 구현하는 경우에는 부모의 생성자도 호출해줘야 되고
            //추가적으로 어떤 데이터를 받아 올때는 공통적으로 부모클래스에서 필요한 데이터도 받아오고
            // 이 받아온 데이터를 super를 이용해서 전달해줘야함
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

    const machine = new CoffeeMachine(23);
    const latteeMachine = new CaffeLatteMachine(23, 'SSSS');
    const coffee = latteeMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteeMachine.serialNumber);
    
    // 이처럼 상속을 잘 이용하면 공통적인 기능은 그대로 재사용하면서
    // 자식클래스에서만 특화된 기능들을 할 수 있고, 추가할 수도 있어요.
    // 그리고 이 super라는 키워드를 이용해서 부모 클래스에 있는 함수들을 호출하거나 접근할 수도 있습니다.
    
    
}