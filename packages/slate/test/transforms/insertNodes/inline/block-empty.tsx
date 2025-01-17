/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      <cursor />
    </block>
  </editor>
)
export const run = editor => {
  Transforms.insertNodes(
    editor,
    <inline void>
      <text />
    </inline>
  )
}
export const output = (
  <editor>
    <block>
      <text />
      <inline void>
        <cursor />
      </inline>
      <text />
    </block>
  </editor>
)
