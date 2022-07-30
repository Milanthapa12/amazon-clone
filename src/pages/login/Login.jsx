import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { auth } from "../../firebase";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((auth) => {
        //it successfully created a new user
        // and return auth obj
        setLoading(false);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sing-in</h1>
        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <button>{loading ? <CircularProgress /> : "Signin"}</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton" onClick={handleRegister}>
          {loading ? <CircularProgress /> : "Create your Amazon Account"}
        </button>
      </div>
    </div>
  );
};
export default Login;
