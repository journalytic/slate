import { Operation } from '@journalytic/slate'

export const input = { type: 'move_node', path: [0, 2, 1], newPath: [0, 1] }
export const test = value => {
  return Operation.inverse(value)
}
export const output = { type: 'move_node', path: [0, 1], newPath: [0, 3, 1] }
