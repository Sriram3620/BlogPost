import post1 from "./Title"
export default function Displayp(props)
{
    return(
           <div className={props.cls}>
        <div className="bor">
            <h1 className="head">{post1.title}</h1>
            <p className="content">{post1.content}</p>
            <p className="author">-{post1.author}</p>
        </div>
        </div>
    )
}