//показывает актуальные новости

export default function News({ title, items }) {

    const ListNews = props =>
        <ul className="news">
            {props.children(props.items)}
        </ul>

    //Показывает отдельную новость
    const NewsItem = props =>
        <li className="new">
            <img src={props.children.icon} className='new-icon'></img>
            <h5 className='new-name'>
                <a href={props.children.link} className='new-link'>{props.children.name}</a>
            </h5>

        </li>

    return (
        <section className="news-content">
            <h3 className="news-title">{title}</h3>
            <ListNews items={items}>
                {items => items.map((item, index) => {
                        return <NewsItem key={index}>{item}</NewsItem>
                    }
                )}
            </ListNews>
        </section>
    )
}