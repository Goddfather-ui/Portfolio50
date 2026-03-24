export default function Button(props) {
    const { text, variant, onClick } = props;
    const defaultBtnClasses = "px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300";
    const primaryBtnClasses = "bg-gradient-to-r from-blue-500 to-purple-600 text-white";
    const normalBtnClasses = "border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-medium";
    return (
        <button
            onClick={onClick}
            className={`${defaultBtnClasses}
            ${variant === "primary" ? primaryBtnClasses : ""}
            ${variant === "normal" ? normalBtnClasses : ""}`}
        >
            {text}
        </button>
    );
}