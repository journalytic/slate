import { Text } from '@journalytic/slate'
import { isCustomText } from './type-guards'

export const input: Text = {
  bold: true,
  text: 'mytext',
}

export const test = isCustomText

export const output = false
