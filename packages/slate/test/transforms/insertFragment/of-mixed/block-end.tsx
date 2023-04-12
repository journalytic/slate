/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertFragment(
    editor,
    <fragment>
      <text>one</text>
      <block>two</block>
      <text>three</text>
    </fragment>
  )
}
export const input = (
  <editor>
    <block>
      word
      <cursor />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>wordone</block>
    <block>two</block>
    <block>
      three
      <cursor />
    </block>
  </editor>
)
