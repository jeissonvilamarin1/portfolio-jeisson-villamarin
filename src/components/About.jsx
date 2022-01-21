import React from 'react'

export const About = () => {
      return (
        <div
          id="about"
          className="container mx-auto px-4 border rounded p-10 shadow-2xl w-11/12 mb-6 animate__animated animate__backInLeft"
        >
          <h1 className="font-black mx-auto pl-2 tracking-wider text-lg leading-4 text-cblue mb-6">
            About
          </h1>
          <article className="p-2">
            <p>
              Hi! 👋 I'm Jeisson. I'm a self taught frontend developer currently
              looking for a position as a Frontend Junior with emphasis in
              React, my interest in web development begins when i start building
              a website with WordPress for the family bussiness (this teach me a
              lot how the web pages work specially the box model), since then
              i've been learning Javascript and React.
            </p>
            <br />
            <p>
              My main focus these days is get a position as Frontend to keep
              learning, and improving my skills.
            </p>
            <br />
            <p>
              Here are a few technologies I’ve been working with recently:
              <ul className="list-disc ml-5 mt-5">
                <li>Html & css</li>
                <li>Javascript</li>
                <li>React with Hooks</li>
                <li>Sass</li>
                <li>Tailwind</li>
                <li>Firebase</li>
                <li>Git</li>
              </ul>
            </p>
            <br />
            <p>i'm currently learning TypeScript, and NEXT.js</p>
          </article>
        </div>
      );
}

