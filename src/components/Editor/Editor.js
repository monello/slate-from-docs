// React
import React, { useMemo, useState } from 'react'

// SlateJS
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

// Temporary Example Data
import ExampleDocument from '../../utils/ExampleDocuments'

const Editor = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState(ExampleDocument)

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)}
        >
            <Editable />
        </Slate>
    )
}

export default Editor;
