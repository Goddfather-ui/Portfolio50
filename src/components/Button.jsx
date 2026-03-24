export default function Button(props) {
    const { text, variant, onClick } = props;
    const defaultBtnClasses = "px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300";
    const primaryBtnClasses = "bg-gradient-to-r from-blue-500 to-purple-600 text-white";
    const normalBtnClasses = "border border-gray-300 text-gray-700 hover:bg-gray-100";
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