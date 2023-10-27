import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import "./app2.css"

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note added successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div
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
      <h1 style={{ color: "#fff", textAlign: "center" }}>Add note</h1>
      <form>
        <div className="mb-3">
          <input
            type="text"
            value={note.title}
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            minLength={3}
            placeholder="Enter Title"
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
          <textarea
            value={note.description}
            className="form-control no-scrollbar"
            id="description"
            name="description"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            minLength={5}
            placeholder="Enter Description"
            style={{
              borderRadius: "20px",
              padding: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              marginTop: "20px",
              color: "#fff",
              border: "none",
              overflowY:"hidden"
            }}
            rows="6" // Set the number of visible rows
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={note.tag}
            className="form-control"
            id="tag"
            name="tag"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            placeholder="Enter Tags (comma separated)"
            style={{
              borderRadius: "20px",
              padding: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: "60px",
              color: "#fff",
              border: "none",
              marginTop: "20px",
            }}
          />
        </div>
        <button
          disabled={note.title.length < 3 || note.description.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
          style={{
            backgroundColor: "#3494E6",
            width: "60%",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          Add note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
