'use client'
// ==============================POC: Hello World==============================
import React, { useState } from 'react'; 

export default function Home() {
  /* 
   * Use the hook,'useState', to add React state to function components.
   * State variable, listItems is an arr containing the 3 strings below, intialized by useState.
   * useState returns the current state of listItems, and setter function (setListItems) to update state.
  */
  const [listItems, setListItems] = useState(["trendy games on Steam", "cooking", "weightlifting"]);

  const reorder = () => {
    const shuffled = [...listItems]; // copy of listItems
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    setListItems(shuffled);
  };

  return (
    <main className="flex-col items-center justify-center min-h-screen py-6">
      <h1 className="flex justify-center text-3xl font-bold mb-4">Hello World; Welcome to my CSS480 landing page!</h1>
      <h2 className="flex justify-center text-xl underline py-1">My name is Sean-Luc Ghim and I am a 4th year CSSE student at UWB</h2>
      <div className="flex justify-center py-6">
        <img className="" src="./sealy.gif" alt="uh oh" />
      </div>
      <ul className="text-center list-inside p-1">
        <p className="underline text-lg">List of intriguing things:</p>
        {listItems.map((item, index) => (
          <li className="py-1" key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button className="m-5 border-2 p-2 border-black bg-black text-white rounded-xl hover:bg-slate-700 focus-within:bg-slate-700" onClick={reorder}>Shuffle list!</button>
      </div>
    </main>
  );
}