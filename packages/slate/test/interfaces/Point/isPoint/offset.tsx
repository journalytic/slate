import { Point } from '@journalytic/slate'

export const input = 42
export const test = value => {
  return Point.isPoint(value)
}
export const output = false
