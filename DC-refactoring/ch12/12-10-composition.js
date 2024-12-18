// 컴포지션 (위임)
class Printer {
  #printerHeader;
  constructor(printerDelegate) {
    this.#printerHeader = printerDelegate;
  }

  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log("기본적인 출력!");
  }
}

class RedPrinterHeader {
  print() {
    console.log("🔴 출력!");
  }
}

class BlackPrinterHeader {
  print() {
    console.log("⚫️ 출력!");
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
];
printers.forEach((printer) => {
  printer.print();
});
