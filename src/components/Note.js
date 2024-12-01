import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../redux/action';
const Note = ({ note, onEdit }) => {
    const dispatch = useDispatch();
  return (
    <div className='note'>
        <p>{note.content}</p>
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => dispatch(deleteNote(note.id))}>Delete Note</button>
    </div>
  );
};

export default Note;