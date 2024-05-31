import * as React from "react";

function ReserveButton() {
  return (
    <button
      className="justify-center px-10 py-6 mt-20 text-lg text-center text-black bg-yellow-400 rounded-xl max-md:px-5 max-md:mt-10"
      tabIndex="0"
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
        <span className="text-3xl leading-10 text-white max-md:block">London</span>
      </h1>
      <p className="mt-7 text-xl leading-7">
      Experience the vibrant flavors and warm hospitality of Little Lemon, your Mediterranean oasis in the heart of London.
      </p>
      <ReserveButton />
    </section>
  );
}

function ImageSection() {
  // Use React state and effect to handle dynamic resizing
  const [imageStyle, setImageStyle] = React.useState({});

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setImageStyle({ transform: 'translate(70px, 80px)' });
      } else {
        setImageStyle({});
      }
    }

    // Set the initial style based on the current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex overflow-visible relative flex-col grow justify-center items-center px-20 py-64 border border-solid aspect-[1.0] border-black border-opacity-0 max-md:px-5 max-md:py-10 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/52743f5447d7d097f798137e6965772a0d46f04f548a4e9e3e1cd05604d99dc0?apiKey=f2d9609ea8e54563ae48be2a04ee102f&"
        alt=""
        className="object-cover absolute inset-0 w-full h-full max-md:relative max-md:w-auto max-md:h-auto max-md:max-w-full max-md:max-h-full"
        style={imageStyle}
      />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-center px-16 py-18 pt-6 bg-custom-green max-md:px-5">
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
