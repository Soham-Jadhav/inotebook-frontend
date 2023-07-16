import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {
  // const s1 = {
  //     "name": "testName",
  //     "class": "4b",
  // }

  // const [state, setState] = useState(s1)
  // const update = () => {
  //     setTimeout(() => {
  //         setState({
  //             "name": "Garry",
  //             "class": "5a",
  //         })
  //     }, 1000);
  // }

  const host = "http://localhost:5000";

  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  // Fetch all note
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetch-all-notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  // Add note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
    console.log(note);

    console.log("ädded");
    // const note = {
    //   "_id": "645a366cedc31916cf09432d",
    //   "user": "64539cab2238153a6a08a7d9",
    //   "title": title,
    //   "description": description,
    //   "tags": tag,
    //   "date": "2023-05-09T12:02:52.655Z",
    //   "__v": 0
    // }

  }

  // Edit note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    console.log("editted id" + id);
    var newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);

  }

  // Delete note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "localStorage.getItem('token')",
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("deleted note " + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  }

  return (
    // <NoteContext.Provider value={{state, update}}>
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;