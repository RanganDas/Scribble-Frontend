import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app2.css";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = credentials;
    const response = await fetch("https://backend-596z.onrender.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
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
              maxWidth: "600px", // Set a maximum width
              width: "90%", // Use a percentage for responsiveness
              margin: "0 auto", // Center the form horizontally
              boxSizing: "border-box", // Ensure padding and border are included in the width
            }}
          >
            <div className="card-body">
              <h1
                className="card-title"
                style={{ marginBottom: "50px", marginTop: "20px" }}
              >
                Signup
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    onChange={onChange}
                    required
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
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={onChange}
                    required
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
                <div className="form-group">
                  <input
                    type="string"
                    className="form-control"
                    id="phone"
                    name="phone"
                    aria-describedby="emailHelp"
                    placeholder="Phone number"
                    onChange={onChange}
                    required
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
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    minLength={5}
                    required
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
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Confirm password"
                    onChange={onChange}
                    minLength={5}
                    required
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
                <button type="submit" className="btn btn-outline-light mx-2" style={{marginTop: "30px", marginBottom: "50px",width: "200px" }}  disabled={credentials.password !== credentials.cpassword}>
                  Submit
                </button>
                <p>Already have an account </p>
                <Link
                  className="btn btn-outline-light mx-2"
                  to="/login"
                  role="button"
                  style={{ marginBottom: "20px" , width: "200px"}}
                >
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
