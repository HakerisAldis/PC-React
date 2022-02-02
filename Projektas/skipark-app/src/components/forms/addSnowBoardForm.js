import React from 'react';

const AddSnowBoardForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-black text-sm mb-2" htmlFor="name">
                                Pavadinimas
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" type="text" placeholder="Pavadinimas" required />
      </div>
      <div className="mb-6">
        <label className="block text-black text-sm mb-2" htmlFor="size">
                                Dydis
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="size" type="string" placeholder="Dydis" required />
      </div>
    </form>
  );
};

export default AddSnowBoardForm;
