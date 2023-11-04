import { useState } from "react";
import Button from "./components/Button"

function App() {
  const [bgcolor, setBGColor] = useState("#212121");

  return (
    <div
      className="w-full h-screen duration-200 justify-center content-center"
      style={{ backgroundColor: bgcolor }}>
      <div className="fixed flex flex-wrap bottom-5 justify-center content-center w-full">
        <div className="w-full flex justify-center content-center">  
          <h2 className="text-white font-bold">↓ Click to change Background Color ↓</h2>
        </div>
        <div className="bg-white rounded-xl px-6 py-1">        
          <Button color="red" onClick = {()=>setBGColor("red")} /> 
          <Button color="blue" onClick = {()=>setBGColor("blue")} />
          <Button color="green" onClick = {()=>setBGColor("green")} />
          <Button color="gray" onClick = {()=>setBGColor("gray")} />
          <Button color="purple" onClick = {()=>setBGColor("purple")} />
          <Button color="pink" onClick = {()=>setBGColor("pink")} />
        </div>
      </div>
    </div>
  );
}

export default App;
