import React from 'react'

export const Portfolio = () => {
      return (
        <div className="container mx-auto px-4 border rounded p-10 shadow-2xl w-11/12 mb-6">
          <h1 className="font-black mx-auto pl-2 tracking-wider text-lg leading-4 text-cblue mb-6">
            Portfolio
          </h1>
          <div className="container  grid grid-cols-3  gap-4">
            <article className="container border rounded-lg p-5">
              <img src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1642484834/Princiipe%20fresco/BlockMaster_xw7sk8.png" className='h-fit'/>
              <h2 className="leading-4 text-lg text-cblue mt-2">
                Block Master
              </h2>
              <h6 className="text-xs text-gray-500 ">Html, css, Javascript</h6>
              <h6 className="text-sm text-black mt-2">
                This project is build in Javascript vanilla, and was a key
                project to teach me how to work with data from API's, how to
                work with events, forms, how to make a infinite scroll, and
                bunch of more fun stuff.
              </h6>
            </article>

            <article className="container border rounded-lg p-5">
              <img
                src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1642485069/Princiipe%20fresco/Guapjolotas3_j5i13h.png"
                className="cover"
              />
              <h2 className="leading-4 text-lg text-cblue mt-2">Guapjolotas</h2>
              <h6 className="text-xs text-gray-500 ">
                React, React router dom, styled-components
              </h6>
              <h6 className="text-sm text-black mt-2">
                This project is build in React, and it was really challenging
                because was my first aproach to react with hooks.
                <br />I learned how to work with useState, useEffect, events and
                forms on react.
              </h6>
            </article>

            <article className="container border rounded-lg p-5">
              <img src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1636504622/Princiipe%20fresco/Block_Master_swsvsz.png" />
              <h2 className="leading-4 text-lg text-cblue mt-2">
                Block Master
              </h2>
              <h6 className="text-xs text-gray-500 ">Html, css, Javascript</h6>
              <h6 className="text-sm text-black mt-2">
                This project is build in Javascript vanilla, and was a key
                project to teach me how to work with data from API's, how to
                work with events, forms, how to make a infinite scroll, and
                bunch of more fun stuff{" "}
              </h6>
            </article>
          </div>
        </div>
      );
}
