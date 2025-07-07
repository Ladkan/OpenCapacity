import { Link } from "react-router-dom";
import { Icon_Factory, Icon_Menu, Icon_X } from "../../utils/icons";
import Button from "../../ui/Button";
import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[99] bg-white/95 backdrop-blur-sm border-b border-gray-400">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon_Factory className="h-8 w-8 fill-blue-800" />
            <span className="text-xl font-bold text-gray-900">
              OpenCapacity
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/market" className="text-gray-600 hover:text-gray-900">
              Market
            </Link>
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#howitworks"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" variat="ghost" redirect="/login">
              Sign In
            </Button>
            <Button size="sm" variant="solid" redirect="/register">
              Get Started
            </Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <Icon_X className="h-6 w-6 fill-black" />
            ) : (
              <Icon_Menu className="h-6 w-6 fill-black" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hiddem py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/market" className="text-gray-600 hover:text-gray-900">
                Market
              </Link>
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a
                href="#howitworks"
                className="text-gray-600 hover:text-gray-900"
              >
                How It Works
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                size="sm"
                className="justify-start"
                variat="ghost"
                redirect="/login"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="justify-start"
                variant="solid"
                redirect="/register"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
