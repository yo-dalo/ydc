import React, { useRef, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editer = ({ label, disabled, placeholder, value, onChange, ignore = [], className, tamplet = [] }) => {
  const editorRef = useRef(null);
  const [showHtmlBox, setShowHtmlBox] = useState(false);
  const [htmlCode, setHtmlCode] = useState("");

  const complement = useMemo(() => {
    return [label].filter(x => !ignore.includes(x));
  }, [label, ignore]);

  const insertHtml = () => {
    if (editorRef.current && htmlCode) {
      const editor = editorRef.current.getEditor();
      editor.clipboard.dangerouslyPasteHTML(editor.getLength(), htmlCode);
      setHtmlCode("");
      setShowHtmlBox(false);
    }
  };

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

          <div className="flex pt-3 gap-2 flex-wrap">
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

            <div
              className="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer"
              onClick={() => setShowHtmlBox(!showHtmlBox)}
            >
              Add HTML
            </div>
          </div>

          {showHtmlBox && (
            <div className="mt-3">
              <textarea
                className="w-full p-3 border rounded bg-black text-white"
                rows={6}
                placeholder="Paste HTML code here..."
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
              />
              <button
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                onClick={insertHtml}
              >
                Insert HTML
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Editer;