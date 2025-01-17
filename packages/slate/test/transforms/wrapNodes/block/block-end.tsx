/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>one</block>
    <block>
      <anchor />
      two
    </block>
    <block>
      three
      <focus />
    </block>
  </editor>
)
export const run = editor => {
  Transforms.wrapNodes(editor, <block a />)
}
export const output = (
  <editor>
    <block>one</block>
    <block a>
      <block>
        <anchor />
        two
      </block>
      <block>
        three
        <focus />
      </block>
    </block>
  </editor>
)
