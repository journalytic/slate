/** @jsx jsx */
import { Editor } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>one</block>
  </editor>
)
export const test = editor => {
  const block = editor.children[0]
  return Editor.hasInlines(editor, block)
}
export const output = true
