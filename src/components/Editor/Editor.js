// React
import React, { useMemo } from 'react'

// SlateJS
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const Editor = ({ document, onChange }) => {
    const editor = useMemo(() => withReact(createEditor()), [])

    return (
        <Slate
            editor={editor}
            value={document}
            onChange={onChange}
        >
            <Editable />
        </Slate>
    )
}

export default Editor;
