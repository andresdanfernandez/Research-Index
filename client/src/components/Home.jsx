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
            await axios.post("https://research-index-api.vercel.app/updateFields", {
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
        <div className="min-h-screen bg-stone-900 p-4">
            <div className="flex justify-center mt-4 mb-8">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Logout and Save
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                <Card
                    title="Read"
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
        </div>
    )
}

export default Home;