// eslint-disable-next-line import/no-anonymous-default-export
export default (text: string) =>  {
  const specialChars = /[`~!@#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/]/gi

  return text.replace(specialChars, '')
}