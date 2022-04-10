import React from 'react';
import { Link } from 'react-router-dom';
import iceCreamSVG from '../assets/ice-cream-svgrepo-com.svg'

function Header() {

  return (
    <header>
      <div class="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <button class="flex appearance-none p-1 text-gray-500 md:hidden">
              <img src={iceCreamSVG} alt="SVG as an image" />
            </button>
          </div>
          <nav class="hidden items-center space-x-2 text-sm font-medium text-gray-800 md:flex">
            <a href="#" class="rounded px-3 py-2 transition duration-400 hover:bg-gray-100">Community</a>
            <a href="#" class="rounded px-3 py-2 transition duration-400 hover:bg-gray-100">Analytics</a>
            <a href="#" class="rounded px-3 py-2 transition duration-400 hover:bg-gray-100">About Us</a>
          </nav>
        </div>
        <nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
          <a href="#" class="hidden rounded bg-white px-3 py-2 transition hover:bg-gray-100 sm:inline">Login</a>
          <a href="#" class="rounded bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700">Sign Up</a>
        </nav>
      </div>
    </header>

  );
}

export default Header;