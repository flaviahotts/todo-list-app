import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';


export function Cards(props) {

async function handleDelete(){
try {
await axios.delete(`https://ironrest.herokuapp.com/flavia-hotts/${props.id}`)
window.location.reload()
} catch(err) {
console.log(err)
}

}
return (

<div className="card my-3">

<div className="card-body d-flex justify-content-between">

<h5 className="card-title">{` ${props.task}`}</h5>

<div className="btn-group">
    <Link to ={`/edit/${props.id}`} className="mr-3 btn btn-primary">Edit</Link>
<button className="btn btn-danger ml-3"  onClick={handleDelete}><i className="bi bi-trash3"></i></button> 
</div>
</div>
</div>

)
}