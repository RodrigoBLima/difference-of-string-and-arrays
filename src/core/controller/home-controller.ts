import getArraysDiference from "../usecases/get-arrays-diference";

class HomeController {
  constructor(
    readonly valueOne: Array<string | number>,
    readonly valueTwo: Array<string | number>
  ) {}

  getDifference() {
    const differenceValues = getArraysDiference(this.valueOne, this.valueTwo);

    return differenceValues;
  }
}

export default HomeController;
