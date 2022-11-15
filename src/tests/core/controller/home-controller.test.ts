import "@testing-library/jest-dom";
import HomeController from "../../../core/controller/home-controller";

describe("Home controller", () => {
  it("should return differece of arrays", async () => {
    const arrOne = [91, 92, 93, 94, 97];
    const arrTwo = [91, 92, 93, 94, 97, 96, 99, 90];

    const homeController = new HomeController(arrOne, arrTwo);

    const result = homeController.getDifference();

    expect(result.diferenceValues).toHaveLength(3);
    expect(result.diferenceValues).toEqual([96, 99, 90]);
  });
});
