const initialState = {
    notes: [],
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return { ...state, notes: [...state.notes, action.payload] };
        case 'EDIT_NOTE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload.id ? {...note, content: action.payload.updatedContent } : note
                ),
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
            };
        default:
            return state;
    }
};

export default notesReducer;