/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { edge: 'focus', distance: 4 })
}
export const input = (
  <editor>
    <block>
      one <anchor />
      tw
      <focus />o three
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one <anchor />
      two th
      <focus />
      ree
    </block>
  </editor>
)
