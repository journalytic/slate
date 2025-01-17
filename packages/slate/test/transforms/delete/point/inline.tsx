/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}
export const input = (
  <editor>
    <block>
      one
      <cursor />
    </block>
    <block>
      two<inline>three</inline>four
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one
      <cursor />
      two<inline>three</inline>four
    </block>
  </editor>
)
