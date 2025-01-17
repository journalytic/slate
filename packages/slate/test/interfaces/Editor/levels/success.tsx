/** @jsx jsx  */
import { Editor } from '@journalytic/slate'
import { jsx } from '@journalytic/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)
export const test = editor => {
  return Array.from(Editor.levels(editor, { at: [0, 0] }))
}
export const output = [
  [input, []],
  [
    <element>
      <text />
    </element>,
    [0],
  ],
  [<text />, [0, 0]],
]
