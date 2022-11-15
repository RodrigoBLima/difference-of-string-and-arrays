import "@testing-library/jest-dom";
import arrayDifferences from "../../utils/array-differences";

describe("Arrays difference", () => {
  const arrOne = [1, 2, 3];
  const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("should check different values on arrays", () => {
    const result = arrayDifferences(arrOne, arrTwo);

    expect(result).toEqual([4, 5, 6, 7, 8, 9]);
  });
});
