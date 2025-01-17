/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      one
      <cursor />
    </block>
  </editor>
)
export const run = editor => {
  Transforms.insertNodes(
    editor,
    <block void>
      <text>two</text>
    </block>,
    { at: [1], select: true }
  )
}
export const output = (
  <editor>
    <block>one</block>
    <block void>
      two
      <cursor />
    </block>
  </editor>
)
