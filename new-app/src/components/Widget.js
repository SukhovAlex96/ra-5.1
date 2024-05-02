//Реклама

export default function Widget({ advertising }) {
    return (
        <div className="advertising-conteiner">
            <a href={advertising.link} className="advertising-link">
                <img className="advertising-img" src={advertising.img} alt="img">
                </img>
            </a>
        </div>
    )
}