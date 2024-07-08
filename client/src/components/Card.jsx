import {useState} from "react";
import Field from "./Field";
import FieldWrapper from "./FieldWrapper";

const button = <button className="pr-3 pl-3 text-sm">Add</button>;

function Card(props) {

    const [url, setUrl] = useState("");
    const [fields, setFields] = useState([]);
    console.log(fields);

    const handleAddUrl = () => {
        if (url.trim() != "") {
            setFields([...fields, url]);
            setUrl("");
        }

    }

    return (
            <div className="scrollable-div overflow-auto bg-secondary place-self-center w-11/12 max-w-md flex flex-col p-7 h-96 rounded-xl">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold block text-slate-300">{props.title}</h1>
                        {props.title === "To-Read" && (
                            <div className="flex justify-center h-[30px]" >
                                <input 
                                    type="text" 
                                    className="mr-2 p-1 rounded text-black text-sm focus:outline-none"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder = "Copy + Paste URL"
                                />
                                <button 
                                className="pr-3 pl-3 text-sm hover:bg-stone-800 bg-stone-900 text-slate-300 rounded"
                                onClick={handleAddUrl} 
                                >
                                    Add
                                </button>
                            </div>
                        )}
                </div>

                <div className="flex flex-col flex-wrap gap-2 pt-2 text-sm text-stone-300">
                    {fields.map((field,index) => (
                        <FieldWrapper 
                            key={index}
                            field={<Field url={field}/>}
                            showCheckmark = {props.title === "To-Read"}
                        />
                    ))}
                </div>

            

            </div>
    )
}

export default Card;