import React from 'react'

export const Navbar = () => {
      return (
        <header className="container mx-auto my-auto grid grid-cols-2  text-black font-sm md:font-medium h-20 shadow-lg sticky top-0 opacity-1 z-10 bg-gray-50">
          <a className="font-black my-auto pl-2 tracking-wider text-lg leading-4 text-cblue animate__animated animate__bounce animate__repeat-3	3">
            JVillamarin
          </a>
          <nav className="grid grid-cols-3 gap-1 w-full text-center">
            <ul className="my-auto">
              <a href="#about" className="hover:text-cblue">
                About
              </a>
            </ul>
            <ul className="my-auto">
              <a href="#portfolio" className="hover:text-cblue">
                Portfolio
              </a>
            </ul>
            <ul className="my-auto">
              <a href="#portfolio" className="hover:text-cblue">
                Contact Me
              </a>
            </ul>
          </nav>
        </header>
      );
}
