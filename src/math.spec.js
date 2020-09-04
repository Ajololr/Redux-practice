import { isEven } from "./math";

describe("isEven", () => {
  it("should return true if given an even number", () => {
    const res = isEven(2);
    expect(res).toEqual(true);
  });

  it("should return false if given an odd number", () => {
    const res = isEven(1);
    expect(res).toEqual(false);
  });
});
