//Погода
export default function Weather({ title, items }) {

    const ListWeather = props =>
        <div className="search-options-block">
            {props.children(props.items)}
        </div>

    const WeatherItem = props =>
        <div className="weather-content">
            <div className="weather-now">{props.children.temperatureNow}°</div>
            <div className="weather-other">
                <div>{props.children.temperatureMorning}</div>
                <div>{props.children.temperatureDay}</div>
            </div>
        </div>


    return (
        <div className="weather-conteiner">
            <h3 className="weather-title">{title}</h3>
            <ListWeather items={items}>
                {items => items.map((item, index) => {
                        return <WeatherItem key={index}>{item}</WeatherItem>
                    }
                )}
            </ListWeather>
        </div>
    )

}