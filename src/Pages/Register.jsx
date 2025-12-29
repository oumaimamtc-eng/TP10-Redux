import { useState } from "react"; 
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER", payload: form });
    navigate("/Login");
  };

  return (
    <div className={`form-box sign-up-mode}`}>
      <div className="form-retour">
        <h2 className="title animation" style={{ "--i": 17, "--j": 0 }}>
          Create Account
        </h2>
        <div className="icon">
                  <div><FaGoogle/></div>
                  <div><FaFacebook/></div>
                  <div><FaTwitter/></div>
                  <div><FaLinkedin/></div>
                </div>
        <form onSubmit={handleSubmit}>
            <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
                <input
                  type="text"
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <label>Name</label>
                </div>
                <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
                  <input
                    type="text"
                    required
                  />
                  <label>LastName</label>
                </div>
                <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
                  <input
                    type="text"
                    required
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                  />
                  <label>Username</label>
                </div>
                <div className="input-box animation" style={{ "--i": 21, "--j": 4 }}>
                  <input
                    type="email"
                    required
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <label>Email</label>
                </div>
                <div className="input-box animation" style={{ "--i": 22, "--j": 5 }}>
                  <input
                    type="password"
                    required
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <label>Password</label>
                </div>
                <button className="btn animation" type="submit" style={{ "--i": 23, "--j": 6 }}>
                  Sign Up
                </button>
              </form>
          </div>
          <div className="my-retour">
              <h1>welcome Back!</h1>
              <p>Don't have an account? </p>
              <button><Link to="/Login" style={{ marginTop: "10px", display: "block", textAlign: "center" }}>
                Sign In
              </Link>
              </button>
              </div>
    </div>
  );
}
