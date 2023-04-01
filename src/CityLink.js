export default function CityLink(props) {
    return (
        <span
            className="col-2"
            onClick={() => props.onClick(props.city)}
        >
            {props.city}
        </span>
    );
}
