import { Operation } from '@journalytic/slate'

export const input = {}
export const test = value => {
  return Operation.isOperation(value)
}
export const output = false
