export default function Home() {
  return (
    <main className="flex-col items-center justify-center min-h-screen py-6">
      <h1 className="text-3xl font-bold text-center mb-4">POC Keyboard Access:</h1>
      <div className="text-center text-xl underline py-1">Traverse the navigation bar with the following keyboard inputs:</div>
      <ul className="text-center list-inside">
        <li>[Tab] - navigate interactive elements</li>
        <li>[Shift + Tab] - navigate backwards</li>
        <li>[Enter] - activate links or buttons</li>
    </ul>
  </main>
  );
}