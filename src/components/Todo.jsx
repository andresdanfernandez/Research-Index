
const button = <button className=" pr-3 pl-3 text-sm">Add</button>;

function Todo(props) {
    return (
        <div className="scrollable-div overflow-auto bg-slate-50 place-self-center w-11/12 max-w-md flex flex-col p-7 h-96 rounded-xl">
            <div className="flex justify-between">
                <h1 className="text-2xl block">{props.title}</h1>
                <div className="flex justify-center items-center bg-stone-900 rounded text-slate-300 " >
                    {props.title === "Add Papers" && (button)}
                </div>
                
            </div>
        </div>
    )
}

export default Todo;