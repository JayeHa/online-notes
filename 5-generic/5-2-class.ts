// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

// 원하는대로 조금 의미는 있지만 길게 쓰지 않고 한가지 캐릭터만 이용해서 타입정의
// 클래스에서 사용할때 보통 item의 I나 value의 V라고도 많이 씀
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R){}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left();  //4
either.right(); //5

const best = new SimpleEither({name: 'ellie'}, 'hello');