import { useContext } from "react";
import React from "react";
import noteContext from "../context/notes/noteContext";
import "./app2.css";
function Noteitem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, date, user} = props;

  

  return (
    <>
      <div className="col-md-3 my-3">
        <div
          className="card"
          style={{
            border: "2px solid rgb(71, 13, 138)",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgb(70, 0, 150), rgb(24, 0, 56))",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            width: "100%", 
            maxWidth: "350px", 
          }}
        >
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "1.5rem", color: "#fff" }}
            >
              {note.title}
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: "12px", 
                color: "#fff",
                fontFamily: "sans-serif",
              }}
            >
              {new Date(note.date).toISOString().slice(0, 10)}
            </p>
            <hr style={{ fontSize: "1rem", color: "#fff" }}></hr>

            <p
              className="card-text"
              style={{ fontSize: "1.3rem", color: "#fff" }}
            >
              {note.description}
            </p>
            <hr style={{ color: "white", marginTop: "20px" }}></hr>

            <p
              className="card-text"
              style={{ fontSize: "1.3rem", color: "#fff" }}
            >
              {note.tag.split(",").map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </p>

            <div className="d-flex justify-content-center">
              <i
                className="fa-solid fa-square-pen"
                style={{
                  fontSize: "1.6rem",
                  color: "#0fcc58",
                  cursor: "pointer",
                  marginRight: "15px",
                  marginTop: "20px",
                }}
                onClick={() => {
                  updateNote(note);
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              ></i>
              <i
                className="fa-solid fa-trash-can"
                style={{
                  fontSize: "1.5rem",
                  color: "#d34a4a",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted successfully", "danger");
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
}

export default Noteitem;
