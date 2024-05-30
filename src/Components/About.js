import React from "react";

function ImageCard({ classes }: { classes: string }) {
  return <div className={classes} />;
}

function About() {
  return (
    <div className="flex justify-center items-center mt-16"> 
    <div className="max-w-[865px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[45%] max-md:w-full">
          <header className="flex flex-col px-5 mt-2 max-md:mt-10 text-black">
            <h1 className="text-6xl font-medium max-md:text-4xl">Little Lemon</h1>
            <h2 className="mt-4 text-4xl text-zinc-800">London</h2>
            <p className="mt-12 text-xl font-bold text-justify max-md:mt-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              <br />
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </header>
        </section>
        <section className="flex flex-col ml-5 w-[55%] max-md:w-full max-md:ml-0">
          <div className="max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ImageCard classes="shrink-0 mx-auto mt-28 max-w-full border border-black border-solid bg-zinc-300 h-[336px] w-[272px] max-md:mt-10" />
                <ImageCard classes="shrink-0 mx-auto max-w-full border border-black border-solid bg-zinc-300 h-[336px] w-[268px] -ml-20 max-md:-ml-10 z-10" />
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}


export default About;