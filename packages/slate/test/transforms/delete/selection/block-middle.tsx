/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}
export const input = (
  <editor>
    <block>one</block>
    <block>
      t<anchor />w<focus />o
    </block>
    <block>three</block>
  </editor>
)
export const output = (
  <editor>
    <block>one</block>
    <block>
      t<cursor />o
    </block>
    <block>three</block>
  </editor>
)
