import { Text } from '@journalytic/slate'

export const input = [
  {
    children: [],
    selection: null,
  },
]
export const test = value => {
  return Text.isTextList(value)
}
export const output = false
