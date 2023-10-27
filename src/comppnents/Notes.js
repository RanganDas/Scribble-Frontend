import React, { useState, useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import "./app2.css";

function Notes(props) {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote, users, getUser } = context;

  useEffect(() => {
    console.log("Checking authentication status");
    if (localStorage.getItem("token")) {
      console.log("User is authenticated");
      getUser();
      getNotes();
    } else {
      console.log("Redirecting to login");
      navigate("/login");
    }
  }, []);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    props.showAlert("Updated successfully", "success");
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={{ background: "rgb(0,0,0, 0.7)" }}
      >
        <div class="modal-dialog">
          <div class="modal-content"  style={{
              background: "linear-gradient(135deg, #662D8C, #7e0058)",
              border: "none",
            }}>
            <div class="modal-header" style={{ display: "flex", justifyContent: "center" }}>
              <h1 class="modal-title fs-5" id="staticBackdropLabel" style={{
                  color: "#fff",
                }}>
                Account Details
              </h1>
             
            </div>
            <div class="modal-body" style={{
                color:"#fff",
              }}>
              {users ? (
                <div>
                  <p style={{ fontSize:"20px"}}>Username : {users.name}</p>
                  <p style={{ fontSize:"20px"}}>Email : {users.email}</p>
                  <p style={{ fontSize:"20px"}}>Phone : {users.phone}</p>
                  <p style={{ fontSize:"20px"}}> Date: {users && users.date ? users.date.slice(0, 10) : 'No date available'}</p>
                </div>
              ) : (
                <p>Loading user data...</p>
              )}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        ref={ref}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ background: "rgb(0,0,0, 0.8)" }}
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{
              background: "linear-gradient(135deg, #662D8C, #7e0058)",
              border: "none",
            }}
          >
            <div
              className="modal-header"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3
                className="modal-title"
                id="exampleModalLabel"
                style={{
                  color: "#fff",
                }}
              >
                Edit note
              </h3>
            </div>
            <div
              className="modal-body"
              style={{
                background: "linear-gradient(135deg, #662D8C, #7e0058)",
              }}
            >
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    value={note.etitle}
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    placeholder="Enter a title"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    required
                    minLength={3}
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
                    type="text"
                    value={note.edescription}
                    placeholder="Enter description"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    required
                    minLength={5}
                    style={{
                      borderRadius: "20px",
                      padding: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      marginTop: "20px",
                      color: "#fff",
                      border: "none",
                      overflowY: "hidden",
                    }}
                    rows="6" // Set the number of visible rows
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter tags"
                    value={note.etag}
                    className="form-control"
                    id="etag"
                    name="etag"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    style={{
                      borderRadius: "20px",
                      padding: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "#fff",
                      border: "none",
                      marginTop: "30px",
                      height: "60px",
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ border: "none", backgroundColor: "purple" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleClick}
                disabled={
                  note.etitle.length < 3 || note.edescription.length < 5
                }
              >
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <hr style={{ color: "white", marginTop: "40px" }}></hr>
        <h1
          style={{ color: "white", marginBottom: "20px", textAlign: "center" }}
        >
          Your notes
        </h1>
        <hr style={{ color: "white", marginBottom: "30px" }}></hr>

        <div
          className="row mx-2"
          style={{ color: "white", fontSize: "20px", textAlign: "center" }}
        >
          {Array.isArray(notes) && notes.length === 0
            ? "No notes to display"
            : notes.map((note) => {
                return (
                  <Noteitem
                    key={note._id}
                    date={note.date}
                    tag={note.tag}
                    updateNote={updateNote}
                    note={note}
                    showAlert={props.showAlert}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Notes;
