import axios from 'axios';

export const getAllNotes = async () => {
  const response = await axios.get(
    'https://todo-5-56956-default-rtdb.europe-west1.firebasedatabase.app/notes.json'
  );
  if (response.data) {
    const notes = Object.keys(response.data).map((key) => {
      return {
        ...response.data[key],
        id: key,
      };
    });
    return notes;
  } else {
    return [];
  }
};
export const addNewNote = (newNote) => {
  return axios.post(
    'https://todo-5-56956-default-rtdb.europe-west1.firebasedatabase.app/notes.json',
    newNote
  );
};

export const deleteTask = (noteId) => {
  return axios.delete(
    `https://todo-5-56956-default-rtdb.europe-west1.firebasedatabase.app/notes/${noteId}.json`
  );
};

export const patchTask = (newNote, noteId) => {
  return axios.patch(
    `https://todo-5-56956-default-rtdb.europe-west1.firebasedatabase.app/notes/${noteId}.json`,
    newNote
  );
};
