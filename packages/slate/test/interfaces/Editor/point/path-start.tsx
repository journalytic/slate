/** @jsx jsx */
import { Editor } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>one</block>
  </editor>
)
export const test = editor => {
  return Editor.point(editor, [0], { edge: 'start' })
}
export const output = { path: [0, 0], offset: 0 }
