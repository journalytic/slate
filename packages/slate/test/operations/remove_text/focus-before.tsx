/** @jsx jsx */
import { jsx } from '@journalytic/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <anchor />w<focus />
      ord
    </element>
  </editor>
)
export const operations = [
  {
    type: 'remove_text',
    path: [0, 0],
    offset: 1,
    text: 'or',
  },
]
export const output = (
  <editor>
    <element>
      <anchor />w<focus />d
    </element>
  </editor>
)
