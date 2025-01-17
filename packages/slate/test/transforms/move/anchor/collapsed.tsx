/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { edge: 'anchor' })
}
export const input = (
  <editor>
    <block>
      one two t<cursor />
      hree
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one two t<focus />h<anchor />
      ree
    </block>
  </editor>
)
