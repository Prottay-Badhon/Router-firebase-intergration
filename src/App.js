import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import Orders from "./Components/Orders/Orders";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
