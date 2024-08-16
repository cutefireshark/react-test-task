import React from 'react';
import RadioButtons from './components/RadioButtons';
import DiscountCodeInput from './components/DiscountCodeInput';
import GenerateDiscountCode from './components/GenerateDiscountCode';
import NotesField from './components/NotesField';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mini Application</h1>
      <RadioButtons />
      <DiscountCodeInput />
      <GenerateDiscountCode />
      <NotesField />
    </div>
  );
};

export default App;
