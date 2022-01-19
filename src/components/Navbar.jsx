import React from 'react'

export const Navbar = () => {
      return (
        <header className="container mx-auto my-auto grid grid-cols-2  text-black  font-medium h-20 shadow-lg sticky top-0 opacity-1 bg-gray-50">
          <a className="font-black my-auto pl-2 tracking-wider text-lg leading-4 text-cblue ">
            JV.dev
          </a>
          <nav className="grid grid-cols-4 gap-1 w-full text-center">
            <ul className="my-auto">
              <a href='#about'>About</a>
            </ul>
            <ul className="my-auto">
              <a>Posts</a>
            </ul>
            <ul className="my-auto">
              <a>Portfolio</a>
            </ul>
            <ul className="my-auto">
              <a>Contact Me</a>
            </ul>
          </nav>
        </header>
      );
}
