import { Element } from '@journalytic/slate'

export const input = {
  type: 'heading-large',
  children: [{ text: '' }],
}
export const test = value => Element.isElementType(value, 'paragraph', 'source')

export const output = false
