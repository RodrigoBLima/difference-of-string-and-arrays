/* eslint-disable import/no-anonymous-default-export */
import arrayDifferences from "../../utils/array-differences";

export default (valueOne: Array<string | number >, valueTwo: Array<string | number >) => {
  const diferenceValues = arrayDifferences(valueOne, valueTwo);
  const areDifferent = diferenceValues.length > 0;

  return {
    areDifferent,
    diferenceValues,
  };
};
