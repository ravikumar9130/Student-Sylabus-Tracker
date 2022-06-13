import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./screens/SignIn";
import SignUp from "./screens/SignUp";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element ={<SignUp/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
