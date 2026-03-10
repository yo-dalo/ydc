import React, { useState, useEffect } from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;           // string ही रखें HTML के लिए
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  ignore?: string[];
  className?: string;
}

const HtmlInputWithPreview: React.FC<InputProps> = ({
  label,
  placeholder = "Paste or write HTML here...",
  disabled = false,
  value = '',
  onChange,
  ignore = [],
  className = '',
}) => {
  const [complement, setComplement] = useState<string[]>([]);

  useEffect(() => {
    if (!label) return;
    const name = [label];
    const result = name.filter((x) => !ignore.includes(x));
    setComplement(result);
  }, [label, ignore]);

  // Sanitize warning: production में DOMPurify या react-helmet इस्तेमाल करें
  // अभी सिर्फ demo के लिए dangerouslySetInnerHTML इस्तेमाल कर रहे हैं

  return (
    <>
      {complement.map((_, i) => (
        <div key={i} className={`w-full xl:w-1/2 md:w-[45%] ${className}`}>
          <label className="mb-2.5 block text-black dark:text-white">
            {label?.split("_")?.join(" ")}{' '}
            <span className="text-meta-1">{disabled ? "(Not For Edit)" : ""}</span>
          </label>

          <div className="grid grid-cols-1 lg:grid-rows-2 gap-1">
            {/* Left: HTML Code Input */}
            <div>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                HTML Code
              </p>
              <textarea
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary font-mono text-sm min-h-[200px] resize-y"
                rows={10}
                spellCheck={false}
              />
            </div>

            {/* Right: Live Preview */}
            <div>
              <p className="mb-2   text-sm font-medium text-gray-700 dark:text-gray-300">
                Preview
              </p>
              <div
                className=" min-w-screen w-[50vw] min-h-[400px] rounded border border-gray-300 dark:border-gray-600 p-4 bg-white dark:bg-gray-800 overflow-auto prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: value || '<p class="text-gray-400 italic">Preview will appear here...</p>' }}
              />
            </div>
          </div>

          {/* सुरक्षा नोट */}
          {!disabled && value && (
            <p className="mt-2 text-xs text-orange-600 dark:text-orange-400">
              Note: Preview में scripts चल सकते हैं। Production में DOMPurify से sanitize करें।
            </p>
          )}
        </div>
      ))}
    </>
  );
};

export default HtmlInputWithPreview;