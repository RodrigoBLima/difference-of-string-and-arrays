import "@testing-library/jest-dom";
import clearSomeoneSpecialCharacters from "../../utils/clear-someone-special-characters";

describe('clear-someone-special-characters', () => {
  const testMessage = '$%(@&#)ABC!"*';

  it('should remove all special characters', () => {
    const cleanedMessage = clearSomeoneSpecialCharacters(testMessage);

    expect(cleanedMessage).toEqual(`ABC`);

  })
})