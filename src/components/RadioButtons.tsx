import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { setSelectedOption } from '../features/appSlice';

const RadioButtons: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedOption = useAppSelector((state) => state.app.selectedOption);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(event.target.value));
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2">Choose an Option:</h2>
      <div className="flex space-x-4">
        {['Option A', 'Option B', 'Option C'].map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
