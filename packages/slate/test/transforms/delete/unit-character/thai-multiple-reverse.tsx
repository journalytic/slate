/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { unit: 'character', distance: 2, reverse: true })
}
export const input = (
  <editor>
    <block>
      พี่
      <cursor />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      พ
      <cursor />
    </block>
  </editor>
)
