import React, { useState } from 'react';

const GenerateDiscountCode: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState('');

  const generateCode = () => {
    const newCode = 'NEWCODE123';
    setGeneratedCode(newCode);
  };

  return (
    <div className="my-4">
      <button
        onClick={generateCode}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Generate Discount Code
      </button>
      {generatedCode && (
        <p className="mt-2 text-green-500">Generated Code: {generatedCode}</p>
      )}
    </div>
  );
};

export default GenerateDiscountCode;
