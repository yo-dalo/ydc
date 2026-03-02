import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

interface SelectInputProps {
  url: string;
  name: string;
  optionShowBy: string;       // key to display (label)
  optionValue: string;        // key for <option value="">
  setSelecter: (name: string, value: string) => void;
  selectedValue?: string;
  error?: string[];           // changed to string[] for simplicity
  /** Optional static options — if provided, API is not called */
  options?: Array<Record<string, any>>;
  /** Optional: dynamic URL suffix (most common case: /url/{id}) */
  parentId?: string | number | null;
  /** Optional: full custom endpoint override (takes precedence) */
  customEndpoint?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  url,
  name,
  optionShowBy,
  optionValue,
  setSelecter,
  selectedValue = '',
  error = [],
  options: staticOptions = [],
  parentId,
  customEndpoint,
  disabled = false,
  placeholder,
  className = '',
}) => {
  const [data, setData] = useState<Array<Record<string, any>>>([]);
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Final options — prefer static → fallback to fetched
  const finalOptions = useMemo(() => {
    if (staticOptions.length > 0) return staticOptions;
    return data;
  }, [staticOptions, data]);

  // Determine final endpoint
  const endpoint = useMemo(() => {
    if (customEndpoint) return customEndpoint;
    if (parentId == null) return url;
    return `${url}/${parentId}`;
  }, [url, parentId, customEndpoint]);

  useEffect(() => {
    // Skip fetch if we have static options or custom endpoint isn't ready
    if (staticOptions.length > 0 || !endpoint || disabled) {
      setData([]);
      return;
    }

    const controller = new AbortController();

    const fetchOptions = async () => {
      setLoading(true);
      try {
        const res = await axios.get(endpoint, { signal: controller.signal });

        // Flexible data path — adjust as needed for your APIs
        const raw = res.data?.data?.data ?? res.data?.data ?? res.data ?? [];
        const items = Array.isArray(raw) ? raw : [];

        setData(items);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error(`Failed to load ${name} options:`, err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();

    return () => controller.abort();
  }, [endpoint, staticOptions.length, disabled, name]);

  const labelText = name.split('_').join(' ');

  return (
    <div className={`mb-4 ${className}`}>
      <label className="mb-2.5 block text-black dark:text-white font-medium">
        {labelText}
      </label>

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        {loading ? (
          <div className="flex items-center justify-center py-3 px-5 text-gray-500 dark:text-gray-400">
            <span className="animate-spin mr-2">🌀</span>
            Loading {labelText.toLowerCase()}...
          </div>
        ) : (
          <>
            <select
              value={selectedValue}
              onChange={(e) => {
                setSelecter(name, e.target.value);
                setHasInteracted(true);
              }}
              disabled={disabled || loading}
              className={`
                relative z-20 w-full appearance-none rounded border 
                ${error.length > 0 ? 'border-red-500' : 'border-stroke dark:border-form-strokedark'}
                bg-transparent py-3 px-5 outline-none transition
                focus:border-primary active:border-primary
                dark:bg-form-input dark:focus:border-primary
                ${hasInteracted || selectedValue ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'}
              `}
            >
              <option value="" disabled>
                {placeholder ?? `Select ${labelText.toLowerCase()}`}
              </option>

              {finalOptions.map((item, idx) => {
                const val = String(item[optionValue] ?? '');
                const label = String(item[optionShowBy] ?? '—');

                return (
                  <option key={`${val}-${idx}`} value={val}>
                    {label}
                  </option>
                );
              })}
            </select>

            {/* Dropdown arrow */}
            <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 pointer-events-none">
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </>
        )}
      </div>

      {error.length > 0 && (
        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
          {error.join(', ')}
        </p>
      )}
    </div>
  );
};

export default SelectInput;