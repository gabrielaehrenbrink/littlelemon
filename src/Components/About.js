import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center mt-16 mb-60">
      <div className="max-w-[865px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[75%] max-md:w-full">
            <header className="flex flex-col px-5 mt-12 max-md:mt-10 text-black">
              <h1 className="text-6xl font-medium max-md:text-4xl">Little Lemon</h1>
              <h2 className="mt-4 text-4xl text-zinc-800">London</h2>
              <p className="mt-16 text-xl text-justify max-md:mt-10">
                Welcome to Little Lemon, a Mediterranean oasis in London's heart! Enjoy an inviting ambiance, delightful flavors, and a warm, friendly atmosphere.
                <br />
                Our menu features authentic Mediterranean cuisine with succulent grilled meats, fresh seafood, vibrant salads, and indulgent desserts, crafted with the finest ingredients.
                <br />
                Perfect for leisurely lunches, cozy dinners, or special occasions, our attentive staff ensures a memorable experience. Our curated wine list and signature cocktails perfectly complement our dishes.
                <br />
                Join us at Little Lemon for vibrant flavors, warm hospitality, and Mediterranean charm. We look forward to welcoming you!
              </p>
            </header>
          </section>
          <section className="flex flex-col ml-5 w-[40%] max-md:w-full max-md:ml-0 relative">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="relative max-md:static">
                <div className="relative w-[400px] h-[500px] overflow-hidden max-w-full aspect-[1.49] transform max-md:w-full max-md:h-auto max-md:aspect-auto">
                  <img
                    loading="lazy"
                    src="/restaurant.jpg"
                    className="w-full h-full object-cover max-md:w-full max-md:h-auto"
                    alt="restaurant"
                  />
                </div>
                <div className="absolute top-96 left-64 w-[400px] h-[500px] overflow-hidden max-w-full aspect-[1.49] transform max-md:static max-md:mt-5 max-md:w-full max-md:h-auto max-md:aspect-auto">
                  <img
                    loading="lazy"
                    src="/chefs.jpg"
                    className="w-full h-full object-cover max-md:w-full max-md:h-auto"
                    alt="chef"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;