import { Todos } from "./Todos";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#26183d] text-[#845EC2]">
     <h1 class="text-9xl font-bold mb-20 opacity-40">todos</h1>
     <Todos/>
    </div>
  );
}

export default App;
