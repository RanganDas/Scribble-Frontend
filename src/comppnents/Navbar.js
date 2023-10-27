import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  const homeColor = isHomePage ? "white" : "rgb(190, 190, 190)";
  const aboutColor = isAboutPage ? "white" : "rgb(190, 190, 190)";
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{background:"linear-gradient(135deg, #00253b, #120029 ,#00253b)", color:"white"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color:"white"}}>
            Scribble
          </Link>
          <button  
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
        <Link
          style={{ color: homeColor }}
          className={`nav-link ${isHomePage ? "active" : ""}`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={{ color: aboutColor }}
          className={`nav-link ${isAboutPage ? "active" : ""}`}
          to="/about"
        >
          About
        </Link>
      </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex" role="search"></form>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{
                    
                    marginLeft: "10px",
                    marginRight: "20px",
                    textAlign: "center",
                  }}>Account</button>
                <i
                  class="fa-solid fa-right-from-bracket"
                  onClick={handleLogout}
                  style={{
                    color: "#fff",
                    marginLeft: "10px",
                    marginRight: "10px",
                    fontSize: "1.8rem",
                    textAlign: "center",
                  }}
                ></i>
              </div>
            )}
          </div>
        </div>
      </nav>

      
    </div>
  );
}

export default Navbar;
