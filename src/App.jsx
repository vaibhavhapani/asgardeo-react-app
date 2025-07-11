import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/Homepage";
import { SignIn } from "@asgardeo/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
