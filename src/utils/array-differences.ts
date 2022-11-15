// eslint-disable-next-line import/no-anonymous-default-export
export default (arrayOne: Array<any>, arrayTwo: Array<any>) => {
  return [
    ...arrayOne.filter((x) => !arrayTwo.includes(x)),
    ...arrayTwo.filter((x) => !arrayOne.includes(x)),
  ];
};
