/*
export default function add(a, b) { 
   return a + b;
}

// 📌 export default
//  => 이 모듈을 import하게 되면 이 함수를 기본으로 export할 것이라고 정의함
// 1) 어떤 이름을 쓰는지 상관안하고 원하는대로 아무렇게나 정의해서 쓸 수 있음
// 2) 한 파일 안에서는 default는 꼭 하나여야만 함
*/

export function print() {
   console.log('print');
}

export const number = 10;

export function add(a, b) { 
   return a + b;
}

// 📌 모듈화를 이용하면
// 1) 파일들간의 중복적으로 발생할 수 있는 이름 충돌을 방지할 수 있고
// 2) 서로 간의 코드를 분리함으로써 모듈성을 높여주고
// 3) 모듈간의 재사용성도 높여준다