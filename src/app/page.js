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
    <main className= "flex items-center justify-center min-h-screen py-6">
      <h1 className="text-3xl font-bold text-center mb-4">Hello World; Welcome to my CSS480 landing page!</h1>
      <h2 className="text-center text-xl underline py-1">My name is Sean-Luc Ghim, and I am a 4th year CSSE student at UWB.</h2>
      <img className="text-center" src="./sealy.gif" alt="uh oh" />
      <ul className="text-center list-inside">List of intriguing things:
        {listItems.map((item, index) => (
          <li className="" key={index}>{item}</li>
        ))}
      </ul>
      <button className="justify-center" onClick={reorder}>Shuffle list!</button>
    </main>
  );
}