/** @jsx jsx  */
import { Node } from '@journalytic/slate'
import { jsx } from '@journalytic/slate-hyperscript'
import { cloneDeep } from 'lodash'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)
export const test = value => {
  return Node.get(value, [])
}
export const skip = true // TODO: see https://github.com/ianstormtaylor/slate/pull/4188
export const output = cloneDeep(input)
