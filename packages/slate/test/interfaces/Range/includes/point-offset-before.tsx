import { Range } from '@journalytic/slate'

export const input = {
  range: {
    anchor: {
      path: [1],
      offset: 3,
    },
    focus: {
      path: [3],
      offset: 0,
    },
  },
  target: {
    path: [1],
    offset: 0,
  },
}
export const test = ({ range, target }) => {
  return Range.includes(range, target)
}
export const output = false
