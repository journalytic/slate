/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      <cursor />
      word
    </block>
  </editor>
)
export const run = editor => {
  Transforms.insertNodes(editor, <text>another</text>, { at: [0, 0] })
}
export const output = (
  <editor>
    <block>
      another
      <cursor />
      word
    </block>
  </editor>
)
