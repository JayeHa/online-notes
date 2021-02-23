{
    // Array
    const fruits: string[] = ['🍅','🍌'];       //1번째 방법
    const scores: Array<number> = [1, 3, 4];    //2번째 방법
    function printArray(fruits: readonly string[]){}

    /* 몇 번째 방법이 더 낫다하기 힘들지만, readonly를 작성할 때는 1번째 방법을 이용해야하기 때문에
    엘리는 코드를 조금 더 일관성있게 작성하기 위해서 1번째 방법을 이용하는 것을 더 선호함 */

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0] //name
    student[1] //123
    const [name, age] = student;
    



}