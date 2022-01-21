import React from 'react'

export const Portfolio = () => {
      return (
        <div
          className="container mx-auto px-4 border rounded p-10 shadow-2xl w-11/12 mb-6"
          id="portfolio"
        >
          <h1 className="font-black mx-auto pl-2 tracking-wider text-lg leading-4 text-cblue mb-6">
            Portfolio
          </h1>
          <p className='px-2'>This page is built with Vite, React an Tailwind. Now let me show you some of my most recent projects</p>
          <br/>

          <div className="container  md:grid grid-cols-3  gap-4">
            <article className="container border rounded-lg p-5 shadow-xl mb-4">
              <a
                href="https://jeissonvilamarin1.github.io/Block-master/"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1642484834/Princiipe%20fresco/BlockMaster_xw7sk8.png"
                  className="h-80 w-10/12 mb-6 mx-auto"
                />
              </a>
              <h2 className="leading-4 text-lg text-cblue mt-2 font-bold">
                Block Master
              </h2>
              <h6 className="text-xs text-gray-500 ">Html, css, Javascript</h6>
              <h6 className="text-sm text-black mt-2">
                This project is build in Javascript vanilla, and was a key
                project to teach me how to work with data from API's and take
                that data and display it, how to work with events in javascript
                and manipulate de DOM, how to handle forms, how to make a
                infinite scroll,how to make a modal window.
              </h6>
            </article>

            <article className="container border rounded-lg p-5 shadow-xl">
              <a
                href="https://guapjolotas-jeissonvillamarin.netlify.app/"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1642735214/Princiipe%20fresco/Guapjolotas_lravke.gif"
                  className="cover h-80 mx-auto mb-6"
                />
              </a>
              <h2 className="leading-4 text-lg text-cblue mt-2 font-bold">
                Guapjolotas
              </h2>
              <h6 className="text-xs text-gray-500 ">
                React, React router dom, styled-components
              </h6>
              <h6 className="text-sm text-black mt-2">
                This project is build in React, and it was really challenging
                because was my first aproach to react with hooks.
                <br />
                <br />
                I learned how to work with useState, useEffect, events and forms
                on react.
                <br />
                <br />
                This projects help me understand the logic behind an Ecommerce,
                make a cart, display the products.
              </h6>
            </article>

            <article className="container border rounded-lg p-5 shadow-xl">
              <a
                href="https://agendadigital-f0067.firebaseapp.com/"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1642733466/Princiipe%20fresco/Agendas_fzzqlt.gif"
                  className="cover h-80 mx-auto mb-6"
                />
              </a>
              <h2 className="leading-4 text-lg text-cblue mt-2 font-bold ">
                Agendas Digitales
              </h2>
              <h6 className="text-xs text-gray-500 ">
                React, React router dom, styled-components, Chakra UI, Firebase,
                Cloudinary
              </h6>
              <h6 className="text-sm text-black mt-2">
                This project allowed me to improve my skills in diferent
                frontend tools, i used figma to make the design of the app,
                React with hooks, cloudinary to store all the images, Firebase
                to store all the data and manage the authentication of users,
                chakra and styled-components to the aspect of the app, Axios to
                manage the HTTP requests, Formik to manage the forms, Sweet
                Alert to manage the notifications and alerts, Redux to manage
                the global state. Was a really fun project and in the future i
                want to keep making upgrades to the app, and eventually develop
                the app in React Native or Flutter.
              </h6>
            </article>
          </div>
        </div>
      );
}
