/** @jsx jsx */

import { Editor, Element } from '@journalytic/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      one<inline>two</inline>three
    </block>
  </editor>
)

export const test = editor => {
  return Editor.above(editor, {
    at: [0, 1, 0],
    match: n => Element.isElement(n) && Editor.isInline(editor, n),
  })
}

export const output = [<inline>two</inline>, [0, 1]]
