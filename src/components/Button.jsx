const Button = ({ children, type = 'button', className = '', onClick, disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ease-in-out
        focus:outline-none
        hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
