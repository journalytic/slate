/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertNodes(
    editor,
    <block>
      <text />
    </block>
  )
}
export const input = (
  <editor>
    <block void>
      text
      <cursor />
    </block>
    <block>text</block>
  </editor>
)
export const output = (
  <editor>
    <block void>text</block>
    <block>
      <cursor />
    </block>
    <block>text</block>
  </editor>
)
