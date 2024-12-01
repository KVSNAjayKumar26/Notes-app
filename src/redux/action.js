export const addNote = (note) => ({
    type: 'ADD_NOTE',
    payload: note,
});

export const editNote = (id, updatedContent) => ({
    type: 'EDIT_NOTE',
    payload: { id, updatedContent },
});

export const deleteNote = (id) => ({
    type: 'DELETE_NOTE',
    payload: id,
});