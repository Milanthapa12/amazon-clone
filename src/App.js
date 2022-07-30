import "./App.css";
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Home from "./components/header/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is logged in", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        console.log("logged out");
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" exact element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
