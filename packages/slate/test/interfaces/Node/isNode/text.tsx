import { Node } from '@journalytic/slate'

export const input = {
  text: '',
}
export const test = value => {
  return Node.isNode(value)
}
export const output = true
