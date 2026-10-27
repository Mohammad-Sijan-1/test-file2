
import React, { useState } from "react";
import { Button } from "../component/button";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between bg-white px-4 py-3 sm:px-6 lg:px-10">
      {/* Logo */}
      <a href="/" className="shrink-0">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-24 sm:w-28"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 lg:gap-10">
          <li>
            <a href="/" className="text-base font-medium hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-base hover:text-orange-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#upskill" className="text-base hover:text-orange-500">
              Upskill
            </a>
          </li>
          <li>
            <a href="#contact" className="text-base hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <Button color="orange">Register Interest</Button>
        </div>

        {/* Dark Mode Button */}
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <img src="/moon.svg" alt="" className="h-5 w-5" />
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-md p-2 hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute left-0 top-full z-50 w-full border-t bg-white px-5 py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block py-1 hover:text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block py-1 hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#upskill"
                onClick={() => setMenuOpen(false)}
                className="block py-1 hover:text-orange-500"
              >
                Upskill
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block py-1 hover:text-orange-500"
              >
                Contact
              </a>
            </li>
            <li className="pt-2 sm:hidden">
              <Button color="orange">Register Interest</Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
