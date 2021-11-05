const { load } = require("./bloom");

describe("load", () => {
  it("should report line count", () => {
    expect(load("words")).toBe(235886);
  });
});
