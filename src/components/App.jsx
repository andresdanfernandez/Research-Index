import Todo from "./Todo";

function App() {
  
  return (
    <>
      <div className="flex justify-center bg-stone-900" >
        <h1 className="text-3xl text-slate-300 pt-3" > Research Tab</h1>
      </div>
    
      <div className="bg-stone-900 grid grid-cols-2 py-4 min-h-screen">
        <Todo title="Read Papers" />
        <Todo title="Add Papers"/>
      </div>
    </>
  )
}

export default App
