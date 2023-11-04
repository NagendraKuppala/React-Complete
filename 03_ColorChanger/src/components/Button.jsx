function Button(props) {
    return (
        <button
            type="button"
            className={`text-white rounded px-3 py-1 mx-1 font-bold`}
            onClick = {props.onClick}
            style={{backgroundColor:props.color}}
            >
            {props.color}
        </button>
    )
}

export default Button