import React from 'react'
import Note from './Note'

const NoteList = ({ notes, onEdit }) => {
  return (
    <div className='note-list'>
        {notes.map(note => (
            <Note key={note.id} note={note} onEdit={onEdit} />
        ))}
    </div>
  );
};

export default NoteList;