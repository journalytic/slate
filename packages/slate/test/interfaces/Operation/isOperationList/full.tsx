import { Operation } from '@journalytic/slate'

export const input = [
  {
    type: 'set_node',
    path: [0],
    properties: {},
    newProperties: {},
  },
]
export const test = value => {
  return Operation.isOperationList(value)
}
export const output = true
