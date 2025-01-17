/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor)
}
export const input = (
  <editor>
    <block>
      one <anchor />
      two th
      <focus />
      ree
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one t<anchor />
      wo thr
      <focus />
      ee
    </block>
  </editor>
)
