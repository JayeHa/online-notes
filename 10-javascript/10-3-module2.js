/** 
import sum, {print as printMessage} from './10-3-module1.js'
// 1) default인 아이들은 이름을 우리가 원하는대로 다시 정의해도 됨
// 2) default가 아닌 아이들은 괄호를 이용해서 동일한 이름으로 print라고 가져와야 함 => import {print} from ... 
// 이름을 변경하고 싶다면 이름 뒤에 as를 붙여서 변경함 => {print as printMessage}

// 사용예시 💡
console.log(sum(1, 2));
print();
*/

//============================================================================
// default가 없으면 export되는 모든 아이들을 calculator로 받아올 수 있음
import * as calculator from './10-3-module1.js'

// 사용예시 💡
console.log(calculator.add(1,2));
calculator.print();
calculator.number; //변수도 import가능