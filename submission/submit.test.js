const { fibonacci, isFibonnaci } = require("../index");

describe("fibonacci", () => {
  it("should get fibonacci sequence until it passes 350", () => {
    const result = fibonacci();
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    expect(result).toMatchObject(expected);
  });
});

describe("isFibonacci", () => {
  it("should return true when the number is a fibonacci", () => {
    const result = isFibonnaci(5);
    expect(result).toBe(true);
  });

  it("should return false when the number isn't a fibonacci", () => {
    const result = isFibonnaci(4);
    expect(result).toBe(false);
  });
});
