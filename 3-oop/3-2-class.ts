{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMachine {
        BEANS_GRAMM_PER_SHOT = 7;
        coffeeBeans = 3 * this.BEANS_GRAMM_PER_SHOT;

        makeCoffee(shots:number):CoffeeCup{
            if(this.coffeeBeans<shots*this.BEANS_GRAMM_PER_SHOT){
                throw new Error("not enough coffee beans!");
            }

            this.coffeeBeans -= shots*this.BEANS_GRAMM_PER_SHOT;

            return {
                shots,
                hasMilk: false
            }
        }

}

const coffeeMachine = new CoffeeMachine;
const coffee = coffeeMachine.makeCoffee(2);
console.log(coffee);
console.log(coffeeMachine.coffeeBeans);
}