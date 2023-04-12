/** @jsx jsx */

import { Editor } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      one<inline nonSelectable>two</inline>three
    </block>
  </editor>
)

export const test = editor => {
  return Editor.after(
    editor,
    { path: [0, 0], offset: 3 },
    { ignoreNonSelectable: true }
  )
}

export const output = { path: [0, 2], offset: 0 }