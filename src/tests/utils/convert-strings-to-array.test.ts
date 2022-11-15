import "@testing-library/jest-dom";
import convertStringsToArray from "../../utils/convert-strings-to-array";

describe('convert-strings-to-array', () => {
  const strings = '1,2,5,6,7';

  it('should transform string in array', () => {
   const converted = convertStringsToArray(strings);
   
   expect(converted).toHaveLength(5);
   expect(converted).toEqual(['1', '2', '5', '6', '7',])
  })
})