import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote, editNote } from '../redux/action';
const NoteForm = ({ currentNote, setCurrentNote }) => {
    const [content, setContent] = useState(currentNote ? currentNote.content : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentNote) {
            dispatch(editNote(currentNote.id, content));
        } else {
            dispatch(addNote({ id: Date.now(), content }));
        }
        setContent('');
        setCurrentNote(null);
    };

  return (
    <form onSubmit={handleSubmit}>
        <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Write your note here...'
        />
        <button type='submit'>{currentNote ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;