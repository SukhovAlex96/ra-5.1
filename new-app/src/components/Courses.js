// Показывает курсы валют
export default function Courses({ items }) {

    const ListCourses = props =>
        <ul className="courses">
            {props.children(props.items)}
        </ul>

    //Показывает отдельный курс
    const CoursesItem = props =>
        <li className="course-list">
            <h5 className="course-name course">{props.children.name}</h5>
            <h5 className="course-value course">{props.children.value}</h5>
            <h5 className="course-growth course">{props.children.growth}</h5>
        </li>

    return (
        <ListCourses items={items}>
            {items => items.map((item, index) => {
                    return <CoursesItem key={index}>{item}</CoursesItem>
                }
            )}
        </ListCourses>
    )
}