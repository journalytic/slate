import { Node } from '@journalytic/slate'

export const input = {
  children: [],
  selection: null,
}
export const test = value => {
  return Node.isNode(value)
}
export const output = true
