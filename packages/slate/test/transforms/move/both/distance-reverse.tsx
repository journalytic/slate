/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { reverse: true, distance: 6 })
}
export const input = (
  <editor>
    <block>
      one two th
      <cursor />
      ree
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one <cursor />
      two three
    </block>
  </editor>
)
