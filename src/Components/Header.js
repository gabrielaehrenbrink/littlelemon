import * as React from "react";

function ReserveButton() {
  return (
    <button
      className="justify-center px-10 py-6 mt-20 text-lg text-center text-black bg-yellow-400 rounded-xl max-md:px-5 max-md:mt-10"
      tabindex="0"
    >
      Reserve a Table
    </button>
  );
}

function Overview() {
  return (
    <section className="flex flex-col mt-9 text-white max-md:mt-10">
      <h1 className="text-6xl font-medium max-md:text-4xl">
        <span className="text-yellow-400">Little Lemon</span>{" "}
        <span className="text-3xl leading-10 text-white ">London</span>
      </h1>
      <p className="mt-7 text-xl leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ReserveButton />
    </section>
  );
}

function ImageSection() {
  return (
    <div className="flex overflow-visible relative flex-col grow justify-center items-center px-16 py-40 border border-solid aspect-[0.87] border-black border-opacity-0 max-md:px-5 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/52743f5447d7d097f798137e6965772a0d46f04f548a4e9e3e1cd05604d99dc0?apiKey=f2d9609ea8e54563ae48be2a04ee102f&"
        alt=""
        className="object-cover absolute inset-0 size-full"
        style={{ marginBottom: '-20px' }}  // Adjust this value as needed to control the overflow amount
      />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-center px-16 pt-6 bg-custom-green max-md:px-5">
      <main className="z-10 max-w-full w-[860px]">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Overview />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ImageSection />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Header;