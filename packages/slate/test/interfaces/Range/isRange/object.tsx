import { Range } from '@journalytic/slate'

export const input = {}
export const test = value => {
  return Range.isRange(value)
}
export const output = false
