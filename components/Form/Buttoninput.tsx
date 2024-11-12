function Buttoninput({ label, color, size }) {
    const buttonStyles = {
        backgroundColor: color,
    };

    return (
        <button style={buttonStyles} className={`${size} px-4 py-2`}>
            {label}
        </button>
    );
}

export default Buttoninput;
