import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editer = ({ label, disabled, value, onChange, ignore = [], className, tamplet = [] }) => {
  const [complement, setComplement] = useState([]);
  const editorRef = useRef(null);

  useEffect(() => {
    setComplement([label].filter(x => !ignore.includes(x)));
  }, [label, ignore]);

  return (
    <>
      {complement.map((_, i) => (
        <div key={i} className={`w-full ${className}`}>
          <label className="mb-2.5 block text-black dark:text-white">
            {label?.split("_").join(" ")}
            <span className="text-meta-1">{disabled ? " Not For Edit" : ""}</span>
          </label>

          <ReactQuill
            ref={editorRef}
            theme="snow"
            value={value}
            readOnly={disabled}
            onChange={(content) => {
              onChange({ target: { value: content } });
            }}
            style={{
              backgroundColor: 'rgb(33,33,33)',
              color: 'white'
            }}
          />

          <div className="flex pt-3 gap-2">
            {tamplet.map((element, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded bg-purple-400 cursor-pointer"
                onClick={() => {
                  if (editorRef.current) {
                    const editor = editorRef.current.getEditor();
                    editor.clipboard.dangerouslyPasteHTML(
                      editor.getLength(),
                      element.code
                    );
                  }
                }}
              >
                {element.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Editer;