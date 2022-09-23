import React, { useMemo } from 'react'
import { createEditor, Descendant } from '@journalytic/slate'
import { Slate, Editable, withReact } from '@journalytic/slate-react'
import { withHistory } from '@journalytic/slate-history'

const PlainTextExample = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable placeholder="Enter some plain text..." />
    </Slate>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
]

export default PlainTextExample
