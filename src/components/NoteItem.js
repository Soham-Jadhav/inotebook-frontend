import React, {useContext} from 'react'
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const { note, updateNote, showAlert } = props;
    // eslint-disable-next-line
    const { deleteNote, editNote } = useContext(NoteContext);

    return (
        <div className='col-md-4 my-3'>
            {/* {note.title} <br/>
      {note.description} <br/> */}
            <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title p-2 flex-grow-1">{note.title}</h5>
                            <i className="fa-solid fa-trash mx-2 p-2" onClick={() => {deleteNote(note._id); showAlert("Note successfully deleted!", "success");}}></i>
                            <i className="fa-solid fa-pen-to-square mx-2 p-2" onClick={() => {updateNote(note)}}></i>
                        </div>
                            <p className="card-text">{note.description}</p>
                        {/* <FontAwesomeIcon icon="fa-regular fa-trash" /> */}
                        {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi illum facere tempore quaerat nihil natus aut. Suscipit excepturi perferendis beatae sit autem aperiam nobis cum, ut alias, nihil sed asperiores maiores dicta blanditiis iure aspernatur. Animi adipisci ullam magni qui voluptatibus quia tenetur, impedit officia soluta suscipit ab eveniet perspiciatis ut rem, quam, voluptates quae cum repellat a voluptatum expedita error. Nemo sit explicabo, vero eius dolores architecto consectetur quaerat amet impedit cupiditate ducimus repellat quam placeat facere quod? In eveniet sit recusandae, dignissimos tempora ducimus quas facere ipsum!</p> */}
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>
        </div>
    )
}

export default NoteItem
