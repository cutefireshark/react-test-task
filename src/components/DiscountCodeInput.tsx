import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { setDiscountCode } from '../features/appSlice';

const DiscountCodeInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const discountCode = useAppSelector((state) => state.app.discountCode);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '' || /^DISCOUNT2024$/i.test(value)) {
      setError('');
      dispatch(setDiscountCode(value));
    } else {
      setError('Invalid discount code. Use "DISCOUNT2024".');
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2">Enter Discount Code:</h2>
      <input
        type="text"
        value={discountCode}
        onChange={handleChange}
        placeholder="DISCOUNT2024"
        className="border p-2 w-full"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default DiscountCodeInput;
