import "./App.css";
import { useState } from "react";
import Article from "./Components/Article";
import Navbar from "./Components/Navbar";

function App() {

  const [menu,setMenu] = useState(1);

  return (
    <>
      <Navbar selMenu={setMenu}/>
      <Article menu={menu}/>
    </>
  );
}

export default App;
