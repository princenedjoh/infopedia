import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import * as GeneralQuillEditorStyle from './quillEditor.style'
import React, { useState, useEffect } from 'react';
import { Markup } from 'interweave';


const GeneralQuillEditorTextbox = ({}) => {

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          ['link', 'image'],
          ['clean']
        ],
      }
    const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'link', 'image'
    ]

    const [quillValue, setQuillValue] = useState("")

    return (
        <>
            <GeneralQuillEditorStyle.Main>
                <ReactQuill theme="bubble" 
                    value={quillValue} 
                    onChange={setQuillValue} 
                    modules={modules}
                    formats={formats}
                />
            </GeneralQuillEditorStyle.Main>
        </>
    )
}

export default GeneralQuillEditorTextbox
