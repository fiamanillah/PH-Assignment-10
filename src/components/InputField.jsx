function InputField({
    label,
    type,
    name,
    id,
    placeholder,
    value,
    ref,
    onChange,
    required = false,
    defaultValue,
}) {
    return (
        <div className="mt-0">
            <label htmlFor={id} className="block mb-2 text-sm font-medium">
                {label}
            </label>
            <input
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
                    'bg-lightCardSecondary border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-accent dark:focus:border-accent'
                }
            />
        </div>
    );
}

export default InputField;
