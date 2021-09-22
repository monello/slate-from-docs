// React
import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types';

// SlateJS
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const Editor = ({ document, onChange, placeholder }) => {
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
            <Editable placeholder={placeholder} />
        </Slate>
    )
}

// MRL: Specify the "shape" of the expected date on this component, either using propTypes (as below) or by using TypeScript instead of Vanilla JS
Editor.propTypes = {
    /** The document property must be an array of objects */
    document: PropTypes.arrayOf(PropTypes.object),
    /** Event to change the document state */
    onChange: PropTypes.func.isRequired,
    /** Text to display when the Editor has no content */
    placeholder: PropTypes.string
}

// MRL: Describe default values for any props.
Editor.defaultProps = {
    document: [{}],
    placeholder: 'Enter some text...'
}

export default Editor;
