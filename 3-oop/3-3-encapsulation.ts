{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public
    // private
    // protected
    class CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7;   // class level
        private coffeeBeans: number = 0;                   // instance(object) level
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }

    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);

    class User {
        get fullName(): string{
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;
        get age(): number{
            return this.internalAge;
        }

        set age(num: number){
            if(num < 0){
                throw new Error('오류'); //유효성검사 가능
            }
            this.internalAge = num;
        }

        constructor(public firstName:string, private lastName:string){ //이처럼 생성자에 접근제어자를 설정해두면 바로 멤버변수로 설정이 됩니다.
        }
    }
    const user = new User('Steve', 'jobs');
    console.log(user.fullName);
    user.firstName = 'Ellie';
    console.log(user.fullName);

    user.age = 6;
    
}