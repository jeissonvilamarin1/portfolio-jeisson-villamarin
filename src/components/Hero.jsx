import React from 'react'

export const Hero = () => {
      return (
        <section className=" h-screen mx-auto grid md:grid-cols-3 md:w-11/12 w-8/12">
          <div className="col-span-2">
            <p className="text-xl text-gray-500 mt-5">Hi my name is</p>
            <h1 className="md:text-7xl text-header text-4xl text-cblue font-black mt-5 animate__animated animate__rubberBand sm:text-2xl">
              Jeisson VIllamarin
            </h1>
            <p className="text-2xl text-gray-500 mt-2  animate__animated animate__pulse animate__repeat-3	3 sm:text-2xl ">
              I'm a self taught Developer who loves technology, based on Bogotá,
              Colombia
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1642292980/IMG-20211109-WA0004__1_-removebg-preview_zf2xos.png"
            className="md:pt-10 md:flex"
          />
        </section>
      );
}
