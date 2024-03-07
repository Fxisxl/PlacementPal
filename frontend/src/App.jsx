import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Companies from "./components/Companies.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Ask from "./components/Ask.jsx";
import Resources from "./components/Resources.jsx";
import CompDetails from "./components/CompDetails.jsx";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/companies" element={<Companies />}></Route>
          <Route path="/ask" element={<Ask />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/companies/:name" element={<CompDetails />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
