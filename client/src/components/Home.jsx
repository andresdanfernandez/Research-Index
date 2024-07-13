import Card from "./Card";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function Home() {

    const location = useLocation();
    const navigate = useNavigate();
    const [toReadFields, setToReadFields] = useState(location.state?.toRead || []);
    const [doneReadingFields, setDoneReadingFields] = useState(location.state?.doneReading || []);

    const handleMove = (index) => {
        const fieldToMove = toReadFields[index];
        const newToReadFields = toReadFields.filter((_, i) => i !== index);
        const newDoneReadingFields = [...doneReadingFields, fieldToMove];
        setToReadFields(newToReadFields);
        setDoneReadingFields(newDoneReadingFields);
        updateDatabase(newDoneReadingFields, newToReadFields);
    };

    const updateDatabase = async (doneReading, toRead) => {
        try {
            const userId = localStorage.getItem('userId');
            await axios.post("http://localhost:8000/updateFields", {
                userId,
                doneReading,
                toRead
            });
        } catch (error) {
            console.error("Error updating database:", error);
        }
    };

    useEffect(() => {
        updateDatabase(doneReadingFields, toReadFields);
    }, [doneReadingFields, toReadFields]);

    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate("/");
    }

    return (
        <>
            <div className="flex justify-center mt-10 " >
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                    Logout and Save
                </button>
            </div>
            <div className="grid grid-cols-2 mt-[40px] bg-stone-900 " >
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
        </>
    )
}

export default Home;