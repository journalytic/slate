import { Text } from '@journalytic/slate'

export const input = {
  text: { foo: undefined },
  props: { foo: undefined },
}

export const test = ({ text, props }) => {
  return Text.matches(text, props)
}

export const output = true
