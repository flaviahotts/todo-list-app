import { Link } from "react-router-dom"


export function Cards(props) {
return (
    <div className="card" style={{width: "18rem"}}>

<div className="card-body">
    <h5 className="card-title">{`Task: ${props.task}`}</h5>

<Link to ={`/edit/${props.id}`} class="btn btn-primary">Edit</Link>
</div>
</div>
)
}