function InputField({
    label,
    type = 'text',
    name,
    id,
    placeholder,
    value,
    ref,
    onChange,
    required = false,
    defaultValue,
    className,
    min,
    max,
}) {
    return (
        <div className={`mt-0 ${className}`}>
            <label htmlFor={id} className="block font-medium">
                {label}
            </label>
            <input
                min={min}
                max={max}
                type={type}
                name={name}
                id={id}
                ref={ref}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                required={required}
                className={
                    'bg-lightCardSecondary border border-gray-300 rounded-lg block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 outline-none text-lightPrimaryText dark:text-darkPrimaryText'
                }
            />
        </div>
    );
}

export default InputField;
