/** @jsx jsx  */
import { Node } from '@journalytic/slate'
import { jsx } from '@journalytic/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)
export const test = value => {
  return Array.from(Node.ancestors(value, [0, 0], { reverse: true }))
}
export const output = [
  [input.children[0], [0]],
  [input, []],
]
