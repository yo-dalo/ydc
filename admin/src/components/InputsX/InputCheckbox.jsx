import React, { useState, useEffect } from 'react'











const InputCheckbox = ({ label, placeholder, disabled, value, onChange, ignore = [], className = '' }) => {
    const [complement, setComplement] = useState([]);
    const [name, setName] = useState([label]);



    useEffect(() => {

        console.log(value)

        const findComplement = () => {
            const result = name.filter((x) => !ignore.includes(x));

            setComplement(result);
        };
        findComplement()
    }, [label])












    return (
        <>
            {complement?.map((ignoreEle, i) => (
                <div key={i} className={`w-full flex  gap-4 justify-start xl:w-1/2 md:w-[45%] ${className}`}>
                    <label className="mb-2.5 whitespace-nowrap block text-black dark:text-white">
                        {label?.split("_")?.join(" ")} <span className="text-meta-1">{disabled ? "Not For Edit" : ""}</span>
                    </label>
                    <input
                        type="checkbox"
                        value={value}
                        checked={value ? true : false}

                        onChange={(e) => { e.target.value = e.target.checked ? 1 : 0; onChange(e) }}
                        disabled={disabled}
                        placeholder={placeholder}
                        className="h-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
            ))}
        </>
    )
}

export default InputCheckbox