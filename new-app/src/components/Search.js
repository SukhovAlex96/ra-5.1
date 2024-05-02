//Строка поиска
export default function Search({ options }) {

    const ListSearch = props =>
        <ul className="search-options-block">
            {props.children(props.items)}
        </ul>

    const SearchOptions = props =>
        <li className="search-option"><a className="search-link" href="#">{props.children}</a></li>;

    return (
        <>
            <div className="search-conteiner">
                <ListSearch items={options}>
                    {items => items.map((item, index) => {
                            return <SearchOptions key={index}>{item}</SearchOptions>
                        }
                    )}
                </ListSearch>
                <form className="search-form">
                    <input className="search-input" />
                    <button className="search-button">
                        <span className="visually-hidden">Найти</span>
                    </button>
                </form>
            </div>
        </>
    )
}