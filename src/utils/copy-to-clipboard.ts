// eslint-disable-next-line import/no-anonymous-default-export
export default async (text: string): Promise<void> => {
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}