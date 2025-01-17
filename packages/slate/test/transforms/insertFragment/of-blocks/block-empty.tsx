/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertFragment(
    editor,
    <fragment>
      <block>
        <block>one</block>
      </block>
      <block>two</block>
      <block>three</block>
    </fragment>
  )
}
export const input = (
  <editor>
    <block>word</block>
    <block>
      <cursor />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>word</block>
    <block>
      <block>one</block>
    </block>
    <block>two</block>
    <block>
      three
      <cursor />
    </block>
  </editor>
)
