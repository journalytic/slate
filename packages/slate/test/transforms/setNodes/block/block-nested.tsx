/** @jsx jsx */
import { Editor, Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.setNodes(
    editor,
    { someKey: true },
    { match: n => Editor.isBlock(editor, n) }
  )
}
export const input = (
  <editor>
    <block>
      <block>
        <cursor />
        word
      </block>
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <block someKey>
        <cursor />
        word
      </block>
    </block>
  </editor>
)
