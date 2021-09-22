// React
import React, { useMemo, useCallback } from 'react'

// SlateJS
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const Editor = ({ document, onChange }) => {
    const editor = useMemo(() => withReact(createEditor()), [])

    const onChangeHandler = useCallback(
        (document) => {
            onChange(document);
            console.log('[onChangeHandler] selection:', editor.selection);
        },
        [editor.selection, onChange]
    );

    return (
        <Slate
            editor={editor}
            value={document}
            onChange={onChangeHandler}
        >
            <Editable />
        </Slate>
    )
}

export default Editor;
