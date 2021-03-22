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
        
        constructor(coffeeBeans: number, 
            private milk: MilkFrother, 
            private sugar:SugarProvider) {
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
            const coffee = this.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.milk.makeMilk(sugarAdded);
        }
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
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

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log('Fancy Steaming some milk...');            
        }
        makeMilk(cup: CoffeeCup): CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            };
        }
    }

    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log('Cold Steaming some milk...');            
        }
        makeMilk(cup: CoffeeCup): CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            };
        }
    }
    class NoMilk implements MilkFrother{
        makeMilk(cup: CoffeeCup) : CoffeeCup{
            return cup;
        }
    }

    // 설탕 제조기
    class CandySugarMixer implements SugarProvider{
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
    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar from jar!!!!!');
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
    class NoSugar implements SugarProvider{
        addSugar(cup: CoffeeCup) : CoffeeCup{
            return cup;
        }
    }



    //Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaer = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    //Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    //
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);

// 자 이렇게 컴포지션을 통해서 상속을 전혀 사용하지 않고도 커피머신이라는 클래스에
// 우리가 필요한 다양한 형태의 우유와 설탕을 주입함으로써 다양한 형태의 오브젝트들을 만들 수 있었습니다.
// 컴포지션 너무나 유용한데요 그렇다고 상소깅 무조건 나쁘고 컴포지션만 사용해야한다는 것은 아닙니다.
// 상속이 꼭 필요한 경우도 있어요

// 다만 내가 너무나 수직적인 관계가 만들어지고 있지는 않은지
// 이 상속의 관계가 너무 깊다면 컴포지션을 이용해서 대체할 수는 없는지
// 어떻게 컴포지션을 이용해서 조금 더 필요한 기능들을 조립해서 확장이 가능하고 재사용성이 높고 유지보수가 쉽고
// 조금 더 퀄리티 높은 코드를 만들기 위해서 어떻게 해 볼수 있는지 고민하고 개선하는것이 중요하고요

// 여기서 한 가지 유의해야할 점은 '오버엔지니어링 하지마라'라고 하는데요
// 우리가 타이트한 일정 내에 어떤 기능을 구현해야 되는데
// 코드개선에만 시간을 너무 투자하거나 앞으로 발생하지도 않을 상황에 대비해서
// 코드를 복잡하게 디자인할 필요는 없습니다.
// 어느정도의 중간점을 잘 지키면서 코딩해나가는 것도 개발자의 센스라고 생각해요.
// 여기까지 컴포지션과 인터페이스의 파워에 대해서 알려드렸습니다.

}