export default function Courses(props){
    return(
        <>
            <h2>{props.title}</h2>
            <p>{props.lessons}</p>
            <p>{props.description}</p>
            <p>{props.duration}</p>
        </>
    )
}