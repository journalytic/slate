/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.wrapNodes(editor, <inline a />)
}
export const input = (
  <editor>
    <block>
      <cursor />
      word
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <text />
      <inline a>
        <cursor />
        word
      </inline>
      <text />
    </block>
  </editor>
)
