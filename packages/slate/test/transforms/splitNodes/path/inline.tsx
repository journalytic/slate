/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.splitNodes(editor, { at: [0, 1, 0] })
}
export const input = (
  <editor>
    <block>
      <text />
      <inline>
        <text>word</text>
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
        <text />
      </inline>
      <text />
      <inline>
        <text>word</text>
      </inline>
      <text />
    </block>
  </editor>
)
