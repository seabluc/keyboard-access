export default function ThingsToRead() {
  return (
    <div tabIndex={-1} className="flex-col items-center justify-center py-6"> 
      <h1 className=" text-3xl font-bold text-center mb-4">POC Keyboard Access:</h1>
      <div className="text-center text-xl underline py-1">10 interesting webpages that fuels my brainrot</div>
      <ol className="text-center list-inside">
        <li className="text-lg my-2">
          <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">ChatGPT</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">GitHub</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">LeetCode</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">HackerRank</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">Amazon Web Services</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://geeksforgeeks.org" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">GeeksforGeeks</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">Stack Overflow</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://w3schools.com" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">W3Schools</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">freeCodeCamp</a>
        </li>
        <li className="text-lg mb-2">
          <a href="https://udemy.com" target="_blank" rel="noopener noreferrer" className="focus-within:bg-slate-600 rounded-lg p-2">Udemy</a>
        </li>
      </ol> 
    </div>
  );
}
