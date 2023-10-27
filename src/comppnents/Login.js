import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app2.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://backend-596z.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged in successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card"
            style={{
              border: "none",
              padding: "20px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #662D8C, #7e0058)",
              color: "#fff",
              maxWidth: "600px", 
              width: "90%", 
              margin: "0 auto",
              boxSizing: "border-box", 
            }}
          >
            <div className="card-body">
              <h1
                className="card-title"
                style={{ marginBottom: "50px", marginTop: "20px" }}
              >
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={credentials.email}
                    onChange={onChange}
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    style={{
                      borderRadius: "20px",
                      padding: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "#fff",
                      border: "none",
                      marginTop: "20px",
                      height: "60px",
                      
                    }}
                  />
                </div>

                

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    value={credentials.password}
                    onChange={onChange}
                    name="password"
                    id="password"
                    placeholder="Password"
                    style={{
                      borderRadius: "20px",
                      padding: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "#fff",
                      border: "none",
                      marginTop: "20px",
                      height: "60px",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-light"
                  style={{ marginTop: "30px",marginBottom: "50px", width: "200px" }}
                >
                  Submit
                </button>
                <p>Don't have any account </p>
                <Link
                  className="btn btn-outline-light mx-2"
                  to="/signup"
                  role="button"
                  style={{ marginBottom: "20px", width: "200px" }}
                >
                  Signup
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
