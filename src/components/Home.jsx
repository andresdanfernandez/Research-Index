import Card from "./Card";

function Home() {
    return (
        <div className="grid grid-cols-2 mt-14 bg-stone-900 " >
            <Card title="Read Papers"/>
            <Card title="Add Papers"/> 
        </div>
    )
}

export default Home;