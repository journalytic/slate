/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../..'

export const run = editor => {
  Transforms.select(editor, [0, 0])
}
export const input = (
  <editor>
    <block>
      <cursor />
      one
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <anchor />
      one
      <focus />
    </block>
  </editor>
)
