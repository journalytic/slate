/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertText(editor, 'a')
}
export const input = (
  <editor>
    <block void>
      <cursor />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block void>
      <cursor />
    </block>
  </editor>
)
