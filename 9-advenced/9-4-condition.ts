{
type Check<T> = T extends string? boolean: number;
type Type = Check<string>; //boolean

type TypeName<T> = T extends string // 중첩된 ternary operator
   ? 'string' 
   : T extends number
   ? 'number' 
   : T extends boolean
   ? 'boolean'
   : T extends boolean
   ? 'undefined'
   : T extends Function
   ? 'function'
   : 'object';

   type T0 = TypeName<string>; 'string'
   type T1 = TypeName<'a'>; 'string'
   type T2 = TypeName<() => void>; 'function'

   // 이처럼 컨디셔널 타입은 어떤 타입이 이런 타입이라면 이 타입을 써야지라고
   // 조건적으로 결정할 수 있는 타입이예요.
}