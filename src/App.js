import "./App.css";
import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Information from "./components/Information";
import Home from "./components/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
        </Routes>
    );
}

export default App;
