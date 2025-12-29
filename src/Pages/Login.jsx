import { useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } else {
      alert("Login ou mot de passe n'est pas valide");
    }
  };

  return (
    <div className="form-box">
      <div className="form-content">
        <h2 className="title animation" style={{ "--i": 17, "--j": 0 }}>Sign In</h2>
        <div className="icon">
          <div><FaGoogle/></div>
          <div><FaFacebook/></div>
          <div><FaTwitter/></div>
          <div><FaLinkedin/></div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>

          <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button className="btn animation" type="submit" style={{ "--i": 20, "--j": 3 }}>
            Sign In
          </button>
        </form>
      </div>
      <div className="my">
        <h1>Hello, Friend!</h1>
        <p>Don't have an account? </p>
        <button><Link to="/Register" style={{ marginTop: "10px", display: "block", textAlign: "center" }}>
          Sign Up
        </Link>
        </button>
        </div>
    </div>
  );
}
