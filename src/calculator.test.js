import { calculateTrinnskatt } from "./calculator";

describe("CalculatorComponent", () => {

  it("calculateTrinnskatt should return 0 when salary is 100 000 kroner", () => {
    expect(calculateTrinnskatt(100000)).toBe(0);
  });

  //it("calculateTrinnskatt should return 494 when salary is 200 000 kroner", () => {
  //  expect(calculateTrinnskatt(200000)).toBe(494);
  //});

  //it("calculateTrinnskatt should return 3644 when salary is 300 000 kroner", () => {
  //  expect(calculateTrinnskatt(300000)).toBe(3644);
  //});

  //it("calculateTrinnskatt should return 27 869 when salary is 700 000 kroner", () => {
  //  expect(calculateTrinnskatt(700000)).toBe(27869);
  //});
});
