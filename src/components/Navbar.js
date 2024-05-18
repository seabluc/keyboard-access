/* 
 * Use <Link> component for Next.js's client side routing instead of <a>
 * element to enhance UX for single-page apps.
*/
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav tabIndex={-1} className="bg-black">
      <div tabIndex={-1} className="max-w-9xl mx-auto px-4 sm:px-6">
        <div tabIndex={-1} className="flex items-center justify-between h-12"> {/* Right side of Navbar */}
          <div tabIndex={-1} className="flex items-center">
            <div tabIndex={-1} className="flex-shrink-0">
              <Link href="/" tabIndex={1} className="text-white focus-within:bg-slate-700 rounded-lg p-2" >CSS 480</Link>  
            </div>
          </div>
          <div tabIndex={-1} className="hidden md:block">
            <div tabIndex={-1} className="ml-4 flex items-center space-x-4">
            <Link href="/" className="text-white focus-within:bg-slate-700 rounded-lg p-2">Home</Link>
            <Link href="/things-to-read" className="text-white focus-within:bg-slate-700 rounded-lg p-2">Things to Read</Link>
            <Link href="/attention" className="text-white focus-within:bg-slate-700 rounded-lg p-2">Attention</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar