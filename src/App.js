// React
import React, { useState } from 'react'

// Components
import Editor from "./components/Editor/Editor";

// Temporary Example Data
import ExampleDocument from './utils/ExampleDocuments'

function App() {
  const [document, updateDocument] = useState(ExampleDocument)

  return <Editor document={document} onChange={updateDocument} placeholder='Enter some text' />
}

export default App;
