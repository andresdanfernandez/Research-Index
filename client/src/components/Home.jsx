import Card from "./Card";
import { useState } from "react";
function Home() {

    const [toReadFields, setToReadFields] = useState([]);
    const [doneReadingFields, setDoneReadingFields] = useState([]);

    const handleMove = (index) => {
        const fieldToMove = toReadFields[index];
        setToReadFields(toReadFields.filter((_, i) => i !== index));
        setDoneReadingFields([...doneReadingFields, fieldToMove]);
    };

    return (
        <div className="grid grid-cols-2 mt-[70px] bg-stone-900 " >
            <Card 
                title="Done Reading"
                fields={doneReadingFields}
                setFields={setDoneReadingFields}
            />
            <Card 
                title="To-Read" 
                fields={toReadFields}
                setFields={setToReadFields}
                onMove={handleMove}
            /> 
        </div>
    )
}

export default Home;