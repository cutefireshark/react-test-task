import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { setNotes } from '../features/appSlice';

const NotesField: React.FC = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.app.notes);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNotes(event.target.value));
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2">Add Notes:</h2>
      <textarea
        value={notes}
        onChange={handleChange}
        className="border p-2 w-full h-24"
        placeholder="Enter your notes here..."
      />
    </div>
  );
};

export default NotesField;
