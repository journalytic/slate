import { Element } from '@journalytic/slate'

export const input = [
  {
    text: '',
  },
]
export const test = value => {
  return Element.isElementList(value)
}
export const output = false
