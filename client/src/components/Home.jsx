import Card from "./Card";

function Home() {
    return (
        <div className="grid grid-cols-2 mt-[70px] bg-stone-900 " >
            <Card title="Done Reading"/>
            <Card title="To-Read Papers"/> 
        </div>
    )
}

export default Home;