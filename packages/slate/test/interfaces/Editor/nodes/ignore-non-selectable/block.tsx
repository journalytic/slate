/** @jsx jsx */
import { Editor, Text } from '@journalytic/slate'
import { jsx } from '../../../..'

export const input = (
  <editor>
    <block nonSelectable>one</block>
  </editor>
)
export const test = editor => {
  return Array.from(
    Editor.nodes(editor, {
      at: [],
      match: Text.isText,
      ignoreNonSelectable: true,
    })
  )
}
export const output = []
