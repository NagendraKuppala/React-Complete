import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-blue-400 p-4 rounded-xl mb-5">
        Tailwind CSS
      </h1>
      <Cards  
            title="About Macbook" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" 
            name = "#Macbook"
            brand = "#Apple"
            device = "#Laptop"
            />
      <Cards  
            title="About iPhone" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" 
            name = "#iPhone"
            brand = "#Apple"
            device = "#Mobile"
            />
    </div>
  );
}

export default App;
