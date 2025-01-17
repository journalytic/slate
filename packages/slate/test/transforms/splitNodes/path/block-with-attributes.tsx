/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.splitNodes(editor, { at: [0, 2] })
}
export const input = (
  <editor>
    <block data>
      <text />
      <inline>one</inline>
      <text />
      <inline>two</inline>
      <text />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block data>
      <text />
      <inline>one</inline>
      <text />
    </block>
    <block data>
      <text />
      <inline>two</inline>
      <text />
    </block>
  </editor>
)
