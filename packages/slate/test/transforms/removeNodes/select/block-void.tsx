/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block void>
      <cursor />
      one
    </block>
    <block>two</block>
    <block>three</block>
  </editor>
)
export const run = editor => {
  Transforms.removeNodes(editor, { at: [0] })
}
export const output = (
  <editor>
    <block>
      <cursor />
      two
    </block>
    <block>three</block>
  </editor>
)
