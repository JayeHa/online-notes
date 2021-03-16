
// const items = {
//     coffeeBean : 10,
//     coffee: 0
// }

let coffeeBean:number = 10;

function makeCoffee(shot:number){
    if(shot<=0){
        console.log('샷을 넣어주세요');
        return null
    }

    if(coffeeBean <= shot){
        console.log('커피콩이 부족합니다.');
        return null
    }

    coffeeBean = coffeeBean - shot
    let coffee = {"shot": shot}

    return coffee

}

let coffee = makeCoffee(1);
console.log(coffeeBean)
console.log(coffee)
coffee = makeCoffee(3);
console.log(coffeeBean)
console.log(coffee)
coffee = makeCoffee(9);
console.log(coffeeBean)
console.log(coffee)
coffee = makeCoffee(0);
console.log(coffeeBean)
console.log(coffee)
