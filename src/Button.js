export default function Button(props) {
    return (
        <button onClick={props.onClick}
            className={`form-control btn btn-${props.bootstrapButtonType} shadow-sm`}
        >
            {props.children}
        </button>
    );
}