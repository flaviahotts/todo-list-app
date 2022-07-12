


export function Cards(props) {
return (
    <div className="card" style={{width: "18rem"}}>

<div className="card-body">
    <h5 className="card-title">{`Task: ${props.task}`}</h5>

    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
</div>
</div>
)
}