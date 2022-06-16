import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Notfound from "./screens/Notfound";
import Syllabus from "./components/Syllabus";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element ={<SignUp/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
