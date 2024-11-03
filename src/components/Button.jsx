function Button(props) {
    return (
        <button 
            { ...props } 
            className="p-2 bg-slate-400 rounded-md text-white hover:bg-green-700">
            {props.children}
        </button>
    )
}

export default Button