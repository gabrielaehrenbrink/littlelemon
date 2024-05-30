function Nav() {
  return (
    <nav className="flex justify-center items-center bg-white py-5 px-20">
      <img src="/Logo .png" alt="Little Lemon Logo" className="w-36 h-auto" />
      <ul className="flex list-none m-0 p-5 overflow-hidden">
        <li className="block text-center px-4 py-3 text-lg font-medium text-green-500 capitalize"><a href="#home" className="text-black no-underline">Home</a></li>
        <li className="block text-center px-4 py-3 text-lg font-medium text-green-500 capitalize"><a href="#about" className="text-black no-underline">About</a></li>
        <li className="block text-center px-4 py-3 text-lg font-medium text-green-500 capitalize"><a href="#menu" className="text-black no-underline">Menu</a></li>
        <li className="block text-center px-4 py-3 text-lg font-medium text-green-500 capitalize"><a href="#reservations" className="text-black no-underline">Reservations</a></li>
        <li className="block text-center px-4 py-3 text-lg font-medium text-green-500 capitalize"><a href="#order" className="text-black no-underline">Order Online</a></li>
        <li className="block text-center px-4 py-3 text-lg font-medium text-green-500 capitalize"><a href="#login" className="text-black no-underline">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;