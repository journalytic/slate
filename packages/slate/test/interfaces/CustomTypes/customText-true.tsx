import { Text } from '@journalytic/slate'
import { isCustomText } from './type-guards'

export const input: Text = {
  placeholder: 'mystring',
  text: 'mytext',
}

export const test = isCustomText

export const output = true
