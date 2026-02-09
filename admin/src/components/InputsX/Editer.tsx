import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState, useEffect, useRef } from 'react';

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

          <CKEditor
            editor={ClassicEditor}
            data={value}
            onReady={(editor) => {
              editorRef.current = editor;

              const el = editor.ui.view.element;
              el.style.backgroundColor = 'rgb(33,33,33)';
              el.style.color = 'white';

              editor.editing.view.change(writer => {
                writer.setStyle('background-color', 'rgb(33,33,33)', editor.editing.view.document.getRoot());
                writer.setStyle('color', 'white', editor.editing.view.document.getRoot());
              });
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              onChange({ target: { value: data } });
            }}
          />

          <div className="flex pt-3 gap-2">
            {tamplet.map((element, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded bg-purple-400 cursor-pointer"
                onClick={() => {
                  if (editorRef.current) {
                    const editor = editorRef.current;
                    editor.setData(editor.getData() + element.code);
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
