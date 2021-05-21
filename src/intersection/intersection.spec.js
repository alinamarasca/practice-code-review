import { intersection } from "./intersection.js";

describe("intersection returns shared elements", () => {
  describe("intersection returns shared elements", () => {
    it("all numbers", () => {
      const expected = [2];
      const received = intersection([2, 1], [2, 3]);
      expect(received).toEqual(expected);
    });

    it("all strings and numbers", () => {
      const expected = [2, 1, 3];
      const received = intersection([2, 1, "sky", 3], [2, 3, "cookies", 8, 1]);
      expect(received).toEqual(expected);
    });

    it("all strings ", () => {
      const expected = ["", "cookies"];
      const received = intersection(
        ["", "sky", "cookies"],
        ["fly", "cookies", ""]
      );
      expect(received).toEqual(expected);
    });

     it("all booleans ", () => {
      const expected = [false];
      const received = intersection(
        [true, false, true],
        [false]
      );
      expect(received).toEqual(expected);

    });

  });
  describe("intersection returns shared elements without duplicates", () => {
    it("both arrays have duplicated element", () => {
      const expected = [1, 5];
      const received = intersection([1, 1, 2, 2, 5], [1, 1, 3, 5, 7]);
      expect(received).toEqual(expected);
    });

    it("first array has duplicated element", () => {
      const expected = [1];
      const received = intersection([1, 1, 2], [1, 5, 7]);
      expect(received).toEqual(expected);
    });

    it("second array has duplicated element", () => {
      const expected = [1, 9];
      const received = intersection([1, 9, 2], [1, 1, 7, 9]);
      expect(received).toEqual(expected);
    });
  });
});

describe("intersection without shared elements", () => {
  describe("intersection returns empty", () => {
    it("both arrays are empty", () => {
      const expected = "at least one array is empty";
      const received = intersection([], []);
      expect(received).toEqual(expected);
    });

    it("at least one array is empty", () => {
      const expected = "at least one array is empty";
      const received = intersection([], [2, 3, "cookies", 8, 1]);
      expect(received).toEqual(expected);
    });

    it("no common elements", () => {
      const expected = [];
      const received = intersection(
        ["", "sky", "berries"],
        ["fly", "cookies", "hi"]
      );
      expect(received).toEqual(expected);
    });
  });
});


