// Контент после поиска
export default function Aside({ id, children }) {

    return (
        <aside className="aside-conteiner" id={id}>
            {children}
        </aside>
    )
}