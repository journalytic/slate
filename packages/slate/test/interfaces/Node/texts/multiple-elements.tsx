/** @jsx jsx  */
import { Node } from '@journalytic/slate'
import { jsx } from '@journalytic/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text key="a" />
    </element>
    <element>
      <text key="b" />
    </element>
  </editor>
)
export const test = value => {
  return Array.from(Node.texts(value))
}
export const output = [
  [<text key="a" />, [0, 0]],
  [<text key="b" />, [1, 0]],
]
