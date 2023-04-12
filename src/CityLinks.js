import CityLink from "./CityLink";

export default function cityLinks(props) {
    return (
        <div className="row cities">
            <CityLink city="Dnipro"
                onClick={(city) => props.onClick(city)}
            />
            <CityLink city="Kharkiv"
                      onClick={(city) => props.onClick(city)}
            />
            <CityLink city="Odesa"
                      onClick={(city) => props.onClick(city)}
            />
            <CityLink city="Lviv"
                      onClick={(city) => props.onClick(city)}
            />
            <CityLink city="Kyiv"
                      onClick={(city) => props.onClick(city)}
            />
            <CityLink city="Zaporizhzhia"
                      onClick={(city) => props.onClick(city)}
            />
        </div>
    );
}