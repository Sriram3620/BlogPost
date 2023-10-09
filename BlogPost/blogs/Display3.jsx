import { post3 } from "./Title"

export default function Display3(props)
{
    return(
       <div className={props.cls}>
        <div className="bor">
            <h1 className="head">{post3.title}</h1>
            <p className="content">{post3.content}</p>
            <p className="author">-{post3.author}</p>
        </div>
        </div>
    )
}