import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const notes = useSelector((state) => state.notes);
  const [currentNote, setCurrentNote] = useState(null);
  return (
    <div className='app'>
      <h1>Notes App</h1>
      <NoteForm currentNote={currentNote} setCurrentNote={setCurrentNote} />
      <NoteList notes={notes} onEdit={setCurrentNote} />
    </div>
  )
}

export default App