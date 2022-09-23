/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>one</block>
    <block>two</block>
  </editor>
)
export const run = editor => {
  Transforms.delete(editor, { at: [1] })
}
export const output = (
  <editor>
    <block>one</block>
  </editor>
)
