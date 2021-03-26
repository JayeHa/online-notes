type PositionType = {
   x: number;
   y: number;
}

interface PositionInterface {
   x: number;
   y: number;
}


// ★: 타입 앨리어스와 인터페이스 둘 다 가능한 것
// 1. ojbect ★
// 타입과 인터페이스 둘 다 오브젝트를 정의하고 타입을 할당할 수 있다.
const obj1: PositionType = {
   x: 1,
   y: 1,
};

const obj2: PositionInterface = {
   x: 1,
   y: 1,
   z: 1,
};


// 2. class ★
// 둘 다 클래스에서 구현 가능
class Pos1 implements PositionType {
   x: number;
   y: number;
}

class Pos2 implements PositionInterface {
   x: number;
   y: number;
   z: number;
}


// 3. Extends ★
// 타입은 인터섹션을 이용해서 두 가지를 묶은 타입을 만들 수 있고, 인터페이스는 상속을 통해서 확장할 수 있음
interface ZPositionInterface extends PositionInterface{
   z: number; // z 추가 가능
}

type ZPositionType = PositionType & { z: number };


// 4. 인터페이스만 되는거 ☆
// 😆 only interfaces can be merged.(인터페이스만 결합가능)
interface PositionInterface  { 
   z: number;
}
// type PositionType{}  // 타입은 merge 불가능



// 5. 타입만 되는거 ☆
// 😆 Type aliases can use "computed properties"
// Name이라는 타입은 Person에 있는 name이라는 키가 가지고 있는 값의 타입을 쓸거다
type Person = {
   name: string,
   age: number,
}
type Name = Person['name']; // string

// 😆 NumberType이라는 새로운 타입도 만들 수 있고, 유니온 타입도 만들 수 있음
type NumberType = number;
type Direction = 'left' | 'right';

// 그 외 뒤에 이어지는 유틸리티나 맵타입이나 인덱스타입 이용가능