import "./styles.css";
//import InitialMsg from "./InitialMsg";
//import Form from "./Form";
//import Main from "./Main";
import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Body />
      </div>
    </BrowserRouter>
  );
}
