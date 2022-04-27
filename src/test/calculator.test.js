const Calculator = require('../calculator.js');

test('test', () => {
  const calculator = new Calculator();
  expect(calculator).toEqual({ value: 0 });

  calculator.set(10);
  expect(calculator).toEqual({ value: 10 });

  calculator.add(25);
  expect(calculator).toEqual({ value: 35 });

  // calculator.add(100);
  // expect(calculator).toThrow(Error);

  calculator.subtract(5);
  expect(calculator).toEqual({ value: 30 });

  calculator.multiply(2);
  expect(calculator).toEqual({ value: 60 });

  calculator.divide(3);
  expect(calculator).toEqual({ value: 20 });

  calculator.clear();
  expect(calculator).toEqual({ value: 0 });
});
