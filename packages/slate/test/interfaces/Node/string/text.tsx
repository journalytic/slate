/** @jsx jsx  */
import { Node } from '@journalytic/slate'
import { jsx } from '@journalytic/slate-hyperscript'

export const input = <text>one</text>
export const test = value => {
  return Node.string(value)
}
export const output = `one`
