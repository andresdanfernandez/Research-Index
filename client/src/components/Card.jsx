    import {useState} from "react";
    import Field from "./Field";
    import FieldWrapper from "./FieldWrapper";

    function Card({title, fields, setFields, onMove }) {

        const [url, setUrl] = useState("");

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
            <div className="bg-secondary rounded-xl p-4 h-[500px] max-h-[500px] flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-300 mb-2 sm:mb-0">{title}</h1>
                {title === "To-Read" && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
                        <input
                            type="text"
                            className="mr-0 sm:mr-2 p-1 w-full sm:w-60 h-8 rounded bg-stone-100 text-black text-sm focus:outline-stone-800 mb-2 sm:mb-0"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Copy + Paste URL"
                        />
                        <button
                            className="pr-3 pl-3 text-sm h-9 hover:bg-stone-800 bg-stone-900 hover:text-slate-400 text-slate-300 rounded w-full sm:w-auto"
                            onClick={handleAddUrl}
                        >
                            Add
                        </button>
                    </div>
                )}
            </div>
            <div className="overflow-auto flex-grow">
                {fields.map((field, index) => (
                    <FieldWrapper
                        key={index}
                        field={<Field url={field} />}
                        showCheckmark={title === "To-Read"}
                        onDelete={() => handleDelete(index)}
                        onMove={() => onMove && onMove(index)}
                    />
                ))}
            </div>
        </div>
        )
    }

    export default Card;