    import {useState} from "react";
    import Field from "./Field";
    import FieldWrapper from "./FieldWrapper";

    function Card(props) {

        const [url, setUrl] = useState("");
        const [fields, setFields] = useState([]);
        console.log(fields);

        const handleDelete = (index) => {
            setFields(fields.filter((_,i) => i !== index));
        };


        const handleAddUrl = () => {
            if (url.trim() != "") {
                setFields([...fields, url]);
                setUrl("");
            }

        }

        return (
                <div className="scrollable-div overflow-auto bg-secondary place-self-center w-11/12 max-w-lg flex flex-col p-7 h-[500px] max-h-[500px] rounded-xl">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold block text-slate-300">{props.title}</h1>
                            {props.title === "To-Read" && (
                                <div className="flex items-center justify-center" >
                                    <input 
                                        type="text" 
                                        className="mr-2 p-1 w-60 h-8 rounded bg-stone-100 text-black text-sm focus:outline-stone-800"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder = "Copy + Paste URL"
                                    />
                                    <button 
                                    className="pr-3 pl-3 text-sm h-9 hover:bg-stone-800 bg-stone-900 hover:text-slate-400 text-slate-300 rounded"
                                    onClick={handleAddUrl} 
                                    >
                                        Add
                                    </button>
                                </div>
                            )}
                    </div>
                        {fields.map((field,index) => (
                            <FieldWrapper 
                                key={index}
                                field={<Field url={field}/>}
                                showCheckmark = {props.title === "To-Read"}
                                onDelete={() => handleDelete(index)}
                            />
                        ))}
                </div>
        )
    }

    export default Card;