{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker { 
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

    class LatteCoffeMachine implements CoffeeMaker, CommercialCoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7;  
        private coffeeBeans: number = 0;   
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): LatteCoffeMachine {
            return new LatteCoffeMachine(coffeeBeans)
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
            if(this.coffeeBeans < shots * LatteCoffeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * LatteCoffeMachine.BEANS_GRAMM_PER_SHOT
        }

        private preheat(): void{
            console.log('heating up...!');
            
        }

        private extract(shots:number, milk?:boolean): CoffeeCup {
            console.log(`Pulling ${shots} shots...!`);
            milk = milk == true ? true : false
            return{
                shots,
                hasMilk: milk,
            }            
        }

        makeCoffee(shots: number, milk?: boolean): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();        
            return this.extract(shots, milk);
        }

    }

    const maker = CoffeeMachine.makeMachine(50);
    const latteMaker = LatteCoffeMachine.makeMachine(50);
    const coffee = latteMaker.makeCoffee(1,true)
    console.log(coffee);
    
}