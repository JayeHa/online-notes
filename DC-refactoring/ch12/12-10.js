// 상속
class Printer {
  print() {
    console.log("기본적인 출력!");
  }
}

// 다중 상속이 안되고, 수정 및 확장이 어려움
// 상속 대신에 컴포지션을 사용
class Network {
  send() {}
}

class RedPrinter extends Printer {
  print() {
    console.log("🔴 출력!");
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach((printer) => {
  printer.print();
});
