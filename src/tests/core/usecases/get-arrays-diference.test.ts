import "@testing-library/jest-dom";
import getArraysDifference from "../../../core/usecases/get-arrays-diference";

describe("Get arrays difference use case", () => {
  const arrOne = [1, 2, 3];
  const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('should return true if arrays are different', () => {
    const result = getArraysDifference(arrOne, arrTwo);

    expect(result.areDifferent).toBeTruthy();
  })

  it("should check different values on arrays", () => {
    const result = getArraysDifference(arrOne, arrTwo);

    expect(result.diferenceValues).toEqual([4, 5, 6, 7, 8, 9]);
  });
});
