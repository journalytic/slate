/** @jsx jsx  */
import { Editor } from '@journalytic/slate'
import { jsx } from '@journalytic/slate-hyperscript'

export const input = (
  <editor>
    <element a>
      <text a />
    </element>
  </editor>
)
export const test = editor => {
  return Array.from(
    Editor.levels(editor, {
      at: [0, 0],
      match: n => n.a,
    })
  )
}
export const output = [
  [
    <element a>
      <text a />
    </element>,
    [0],
  ],
  [<text a />, [0, 0]],
]
