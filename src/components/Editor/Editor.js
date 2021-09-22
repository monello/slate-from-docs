// Import React dependencies.
import React, { useMemo, useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

const Editor = () => {
    // Create a Slate editor object that won't change across renders.
    const editor = useMemo(() => withReact(createEditor()), [])

    // Keep track of state for the value of the editor.
    const [value, setValue] = useState([])

    return <h1>Hello World</h1>
}

export default Editor;
