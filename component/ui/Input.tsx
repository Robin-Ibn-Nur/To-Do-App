interface inputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}


const Input = ({ name, type, placeholder, value }: inputProps) => {
    return (
        <>
            <input
                className="w-full p-5 border-orange-500 border"
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
            />
        </>

    );
};

export default Input;