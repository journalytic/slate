/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}
export const input = (
  <editor>
    <block>
      wor
      <anchor />d<focus />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      wor
      <cursor />
    </block>
  </editor>
)
