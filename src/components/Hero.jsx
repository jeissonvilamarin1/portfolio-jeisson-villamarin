import React from 'react'

export const Hero = () => {
      return (
        <section className=" h-screen mx-auto grid grid-cols-3 w-11/12">
          <div className="col-span-2">
            <p className="text-xl text-gray-500 mt-5">Hi my name is</p>
            <h1 className="text-9xl text-header text-cblue font-black mt-5">
              Jeisson VIllamarin
            </h1>
            <p className="text-4xl text-gray-500 mt-2">
              I'm a self taught Developer who loves technology, based on Bogotá,
              Colombia
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1642292980/IMG-20211109-WA0004__1_-removebg-preview_zf2xos.png"
            className="pt-10 "
          />
        </section>
      );
}
