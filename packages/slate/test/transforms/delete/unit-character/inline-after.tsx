/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}
export const input = (
  <editor>
    <block>
      one
      <inline>two</inline>
      <cursor />a
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one
      <inline>two</inline>
      <cursor />
    </block>
  </editor>
)
