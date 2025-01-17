/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.splitNodes(editor)
}
export const input = (
  <editor>
    <block>
      <text />
      <inline>
        w<anchor />
        or
        <focus />d
      </inline>
      <text />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <text />
      <inline>w</inline>
      <text />
    </block>
    <block>
      <text />
      <inline>
        <cursor />d
      </inline>
      <text />
    </block>
  </editor>
)
