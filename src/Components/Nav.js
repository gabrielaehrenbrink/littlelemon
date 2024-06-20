import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-white py-5 px-6 md:px-20">
      <img src="/Logo .png" alt="Little Lemon Logo" className="w-36 h-auto" />
      <div className="absolute top-0 right-0 p-5 md:hidden">
        <button onClick={toggleMenu} className="text-custom-green focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      <ul className={`flex-col md:flex md:flex-row list-none m-0 p-5 md:p-0 overflow-hidden ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <li className="block text-center px-4 py-3 text-lg font-medium text-custom-green capitalize">
          <a href="/" className="text-black no-underline">Home</a>
        </li>
        <li className="block text-center px-4 py-3 text-lg font-medium text-custom-green capitalize">
          <a href="/about" className="text-black no-underline">About</a>
        </li>

        <li className="block text-center px-4 py-3 text-lg font-medium text-custom-green capitalize">
          <a href="/menu" className="text-black no-underline">Menu</a>
        </li>

        <li className="block text-center px-4 py-3 text-lg font-medium text-custom-green capitalize">
          <a href="/booking" className="text-black no-underline">Reservations</a>
        </li>

        <li className="block text-center px-4 py-3 text-lg font-medium text-custom-green capitalize">
          <a href="/testimonials" className="text-black no-underline">Testimonials</a>
        </li>

        <li className="block text-center px-4 py-3 text-lg font-medium text-custom-green capitalize">
          <a href="/login" className="text-black no-underline">Login</a>
        </li>

      </ul>
    </nav>
  );
}

export default Nav;