import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img
            src="/image.png"
            alt="Flipkart Logo"
            className="w-39 h-auto"
          />
          <span className="hidden sm:inline">Flipkart</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/shop" className="hover:text-yellow-300 transition">Shop</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </nav>

        {/* Search + Icons + Login */}
        <div className="flex items-center gap-4">
          {/* Search Input with Icon */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 text-gray-800 bg-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 w-52 sm:w-64"
            />
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600"
              onClick={() => alert("Search clicked")}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="flex items-center gap-1 hover:text-yellow-300 transition text-sm font-semibold"
          >
            <User className="w-5 h-5" />
            Login
          </Link>

          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart">
              <ShoppingCart className="w-6 h-6 hover:text-yellow-300 transition" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
 
}

export default Header;
