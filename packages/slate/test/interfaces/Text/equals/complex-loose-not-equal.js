import { Text } from '@journalytic/slate'

export const input = {
  textNodeA: {
    text: 'same text',
    bold: true,
    italic: { origin: 'inherited', value: false },
  },
  textNodeB: {
    text: 'same text',
    bold: true,
    italic: { origin: 'inherited', value: true },
  },
}

export const test = ({ textNodeA, textNodeB }) => {
  return Text.equals(textNodeA, textNodeB, { loose: false })
}

export const output = false
