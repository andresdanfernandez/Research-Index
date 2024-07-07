
const button = <button className="pr-3 pl-3 text-sm">Add</button>;

function Todo(props) {
    return (
        <div className="scrollable-div overflow-auto bg-secondary place-self-center w-11/12 max-w-md flex flex-col p-7 max  max-h-96 rounded-xl">
            <div className="flex justify-between">
                <h1 className="text-2xl  block text-slate-300">{props.title}</h1>
                <div className="flex justify-center items-center bg-stone-900 hover:bg-stone-800 rounded text-slate-300" >
                    {props.title === "Add Papers" && (button)}
                </div>
            </div>
            <div className="text-field pt-1 text-slate-300" >
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hic iure voluptates reiciendis ab eveniet consequuntur, odio odit commodi ratione? Eos repudiandae iusto magnam atque iure sequi obcaecati quia fuga!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hic iure voluptates reiciendis ab eveniet consequuntur, odio odit commodi ratione? Eos repudiandae iusto magnam atque iure sequi obcaecati quia fuga!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hic iure voluptates reiciendis ab eveniet consequuntur, odio odit commodi ratione? Eos repudiandae iusto magnam atque iure sequi obcaecati quia fuga!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hic iure voluptates reiciendis ab eveniet consequuntur, odio odit commodi ratione? Eos repudiandae iusto magnam atque iure sequi obcaecati quia fuga!</p>
            </div>

        </div>
    )
}

export default Todo;