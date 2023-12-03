import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-2xl font-extrabold cursor-pointer">Mohammad Ali</span>
        </Link>
        <div className="space-x-4 ml-auto">
          <Link href="/" passHref>
            <span className="text-white cursor-pointer">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-white cursor-pointer">About</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-white cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;