/** @jsx jsx  */
import { Node } from '@journalytic/slate'
import { jsx } from '@journalytic/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text key="a" />
      <text key="b" />
    </element>
  </editor>
)
export const test = value => {
  return Array.from(Node.texts(value, { reverse: true }))
}
export const output = [
  [<text key="b" />, [0, 1]],
  [<text key="a" />, [0, 0]],
]
