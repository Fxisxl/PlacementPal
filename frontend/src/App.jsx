import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Companies from "./components/Companies.jsx";
import Calendar from "./components/Calendar.jsx";
import Resources from "./components/Resources.jsx";
import Ask from "./components/Ask.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/ask" element={<Ask />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
