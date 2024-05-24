// ============================POC: Keyboard Access============================
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-9xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12"> {/* Right side of Navbar */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white focus-within:bg-slate-700 rounded-lg p-2" >CSS 480</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/" className="text-white hover:bg-slate-700 focus-within:bg-slate-700 rounded-lg p-2 ">Home</Link>
              <Link href="/things-to-read" className="text-white hover:bg-slate-700 focus-within:bg-slate-700 rounded-lg p-2">Things to Read</Link>
              <Link href="/attention" className="text-white hover:bg-slate-700 focus-within:bg-slate-700 rounded-lg p-2">Attention</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar