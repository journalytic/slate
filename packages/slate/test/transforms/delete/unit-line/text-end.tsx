/** @jsx jsx */
import { Transforms } from '@journalytic/slate'
import { jsx } from '../../..'
import { cloneDeep } from 'lodash'

export const run = editor => {
  Transforms.delete(editor, { unit: 'line' })
}
export const input = (
  <editor>
    <block>
      one two three
      <cursor />
    </block>
  </editor>
)
export const output = cloneDeep(input)
