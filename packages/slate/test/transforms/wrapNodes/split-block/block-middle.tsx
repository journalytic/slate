/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      w<anchor />
      or
      <focus />d
    </block>
  </editor>
)
export const run = editor => {
  Transforms.wrapNodes(editor, <block new />, { split: true })
}
export const output = (
  <editor>
    <block>w</block>
    <block new>
      <block>
        <anchor />
        or
        <focus />
      </block>
    </block>
    <block>d</block>
  </editor>
)
