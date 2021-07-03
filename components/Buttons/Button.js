function Button(props) {
    return (
        <div onClick={props.clickhandler} className={props.class}>
            <h1 className={props.textClass}>
                {props.text}
            </h1>
        </div>
    )
}

export default Button
