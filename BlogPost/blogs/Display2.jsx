import { post2 } from "./Title"
export default function Display2(props)
{
    return(
          <div className={props.cls}>
        <div className="bor">
            <h1  className="head">{post2.title}</h1>
            <p className="content">{post2.content}</p>
            <p className="author">-{post2.author}</p>

        </div>
        </div>
    )
}