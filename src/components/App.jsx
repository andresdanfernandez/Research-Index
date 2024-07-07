import Todo from "./Todo";
import Login from "./Login";

function App() {
  
  return (
    <>
      <div className="min-h-screen bg-stone-900" >
        <div className="flex justify-center bg-stone-900 ">
            <h1 className="text-3xl text-slate-300 mt-7" >Research Tab</h1>  
        </div>
      
        <div className="bg-stone-900 grid grid-cols-2 mt-14 ">
          <Todo title="Read Papers" />
          <Todo title="Add Papers"/>
        </div>

        <Login/>

      </div>
    </>
  )
}

export default App
