import { Element } from '@journalytic/slate'

export const input = [
  {
    children: [],
  },
]
export const test = value => {
  return Element.isElementList(value)
}
export const output = true
