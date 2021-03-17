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

    class AmateurUser{
        constructor(private machine: CoffeeMaker) {}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
            
        }
    }

    
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    
    console.log('--- 아마추어');
    amateur.makeCoffee();
    console.log('--- 프로');
    pro.makeCoffee();

    // 포인트
    // : 동일한 오브젝트의 인스턴스일지라도 이 오브젝트는 두 가지의 인터페이스를 구현하기 때문에
    // 아마추어 유저와 프로 바리스타는 이렇게 커피 머신을 받아 오는 것이 아니라
    // CoffeeMaker를 생성자에서 받아오고
    // CommercialCoffeeMaker라는 인터페이스를 생성자에서 받아오기 때문에
    // 이 인터페이스에서 규약된 클래스보다는 조금 더 좁은 범위에
    // 인터페이스에 규약된 그런 함수들만 접근이 가능한 걸 볼 수 있습니다.

    // 이처럼 아마추어와 프로 바리스타는 이 인터페이스가 어떻게 구현되어 있는지
    // 얼만큼의 함수가 있는지 신경쓰지 않고요
    // 인터페이스에 규약된 함수들만 이용해서 생성된 오브젝트와 의사소통을 할 수 있습니다.

    // 그렇기 떄문에 사용자들은 이 클래스의 다른 복잡한 기능을 알 필요도 없고요
    // 이 인터페이스만 어떻게 사용하면 되는지 그것만 알면 되는거죠.
}