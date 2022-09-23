/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor)
}
export const input = (
  <editor>
    <block>
      <text />
      <inline>
        word
        <cursor />
        🇫🇷
      </inline>
      <text />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <text />
      <inline>
        word🇫🇷
        <cursor />
      </inline>
      <text />
    </block>
  </editor>
)
