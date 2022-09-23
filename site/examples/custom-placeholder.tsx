import React, { useMemo } from 'react'
import { createEditor, Descendant } from '@journalytic/slate'
import { Slate, Editable, withReact } from '@journalytic/slate-react'
import { withHistory } from '@journalytic/slate-history'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

const PlainTextExample = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        placeholder="Type something"
        renderPlaceholder={({ children, attributes }) => (
          <div {...attributes}>
            <p>{children}</p>
            <pre>
              Use the renderPlaceholder prop to customize rendering of the
              placeholder
            </pre>
          </div>
        )}
      />
    </Slate>
  )
}

export default PlainTextExample
