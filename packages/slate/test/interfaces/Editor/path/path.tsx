/** @jsx jsx */
import { Editor } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>one</block>
  </editor>
)
export const test = editor => {
  return Editor.path(editor, [0])
}
export const output = [0]
