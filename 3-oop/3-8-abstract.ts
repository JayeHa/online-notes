{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker { 
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;   // class level
        private coffeeBeans: number = 0;                   // instance(object) level
        
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
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

        protected abstract extract(shots:number): CoffeeCup;

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

        protected extract(shots: number): CoffeeCup{
            this.steamMilk();
            return{
                shots,
                hasMilk: true,
            };
        }

    }

    class SweetCoffeeMaker extends CoffeeMachine{
        protected extract(shots: number): CoffeeCup{
            return{
                shots,
                hasSugar: true,
            };
        }

        }
    

    const machines: CoffeeMaker[] = [ 
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ];
    machines.forEach(machine => {
        console.log('---------------------');
        machine.makeCoffee(1);
    })
    

    // 우리가 어떤 상속클래스를 이용할 때 무언가 반복되는 이 클래스에서 절차적으로 진행되는 것이 있고 
    // 어떤 특정한 기능만 자식 클래스에서 행동이 달라진다면 abstract클래스를 만들어 볼 수 있습니다.
    // 
    // abstract클래스로 만들어진 클래스는 이 자체는 오브젝트를 생성할 수 없는 클래스고요 추상적인 클래스입니다.
    // 그래서 공통적인 기능들이 있다면 그런 기능들을 다 구현할 수 있고요
    // 이걸 구현하는 클래스마다 달라져야하는 내용이 있다면 그 부분만 abstract메소드로 정의할 수가 있어요.
    // 우리가 인터페이스에서 함수의 규격을 정의한 것처럼 abstract메소드에서는 함수이름은 뭔지
    // 어떤 인자를 받아서 어떤 걸 리턴하는지 이것들만 정의할 수 있고요
    // 공통적으로 쓰이는 기능 중 내부에서만 필요한 것은 private으로, 외부에서 호출할 수 있는 것은 public으로 만들 수 있고요
    // 이렇게 구현하는 클래스마다 달라져야 하는 이 abstract함수만 이 abstract클래스를 구현하는 곳에서 구현해주시면 됩니다.
    // 만약 이 abstract클래스는 상속하면서 이걸 구현하지 않으면 이렇게 에러메세지를 받을 수 있어요

    // 자, 이렇게 abstract클래스를 이용하면 조금 더 안전하게 우리가 의도한대로 공통적인 기능들을 수행하고
    // 달라져야 되는 것만 상속하는 클래스에게 강조할 수 있죠.
    // 이렇게 상속을 이용할 때 abstract 클래스를 잘 이용할 수가 있고요
    // 가능하면 너무 수직적으로 깊은 상속을 이용하기 보다는 가능하면 컴포지션을 이용하는 것이 더 좋습니다.
    // 상속을 써야할 때, 상속과 컴포지션을 이용해서 깊은 수직관계를 피하는 방법 등은 여러번 프로젝트 또는 문제해결을 하면서
    // 상속과 컴포지션을 여러 번 써보지고 어떤 것이 어떤 경우에 더 좋은지 생각하는 힘을 기르는 것이 중요합니다.
}