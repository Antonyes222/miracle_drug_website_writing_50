

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Circle */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            M
          </div>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}