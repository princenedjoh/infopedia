import ReactQuill from 'react-quill';
import './quillEditor.css'
import 'react-quill/dist/quill.bubble.css';
import * as QuillEditorStyle from './quillEditor.style'
import React, { useState, useEffect } from 'react';
import { Interweave } from 'interweave';

interface textBoxInputParams {
    values : string[],
    setValue : React.Dispatch<React.SetStateAction<string[]>>,
    index : number
}

const QuillEditorTextbox = ({
    values,
    setValue,
    index
} : textBoxInputParams) => {

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

    const [quillValue, setQuillValue] = useState(values[index])
    const valueChange = (e:string) => {
        if(e){
            let copyValues = values
            copyValues[index] = e
            setValue([...copyValues])
        }
    }

    return (
        <>
            <QuillEditorStyle.Main>
                <ReactQuill 
                    theme="bubble" 
                    value={values[index]} 
                    onChange={(e)=>valueChange(e)} 
                    modules={modules}
                    formats={formats}
                    placeholder='Input an Answer'
                />
            </QuillEditorStyle.Main>
        </>
    )
}

export default QuillEditorTextbox
