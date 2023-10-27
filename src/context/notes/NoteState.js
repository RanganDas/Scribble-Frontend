import { useState } from "react";
import noteContext from "./noteContext";
//import { useState } from "react";

const NoteState = (props) => {
  const host = "https://backend-596z.onrender.com";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const usersInitial=[];
  const [users, setUsers] = useState(usersInitial);
 


  //Get all nodes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    if (response.status === 401) {
      //console.log("User is not authenticated");
      return;
    }

    const json = await response.json();
    //console.log("API Response:", json); // Log the response
    setNotes(json);
  };

   //Get user info
   const getUser= async () => {
    //API call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    if (response.status === 401) {
      //console.log("User is not authenticated");
      return;
    }

    const json = await response.json();
    //console.log("User data:", json); // Log the response
    setUsers(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    if (response.status === 401) {
      //console.log("User is not authenticated");
      return;
    }

    const note = await response.json();
    //console.log("API Response:", note);
    setNotes(notes.concat(note));
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  //Delete a note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, getNotes, editNote, deleteNote, users,  getUser }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
