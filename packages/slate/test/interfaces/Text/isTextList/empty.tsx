import { Text } from '@journalytic/slate'

export const input = []
export const test = value => {
  return Text.isTextList(value)
}
export const output = true
