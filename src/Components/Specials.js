import * as React from "react";

const MenuItem = ({ imgSrc, imgAlt, title, price, description, orderImgSrc, orderImgAlt }) => (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full overflow-hidden h-full">
      <div className="flex flex-col grow max-md:mt-8">
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="w-full border border-black border-solid aspect-[1.43] rounded-t-lg"
        />
        <div className="flex flex-col px-6 py-7 w-full bg-zinc-100 max-md:px-5 rounded-b-lg h-full">
          <div className="flex gap-5 justify-between whitespace-nowrap">
            <h2 className="text-2xl font-medium leading-5 text-black text-ellipsis overflow-hidden whitespace-nowrap">{title}</h2>
            <div className="text-base font-bold text-orange-300">{price}</div>
          </div>
          <p className="mt-9 text-base text-gray-600 overflow-hidden text-ellipsis">{description}</p>
          <div className="flex gap-3.5 mt-8 text-base font-bold text-zinc-800">
            <div className="flex-auto">Order a delivery</div>
            <img loading="lazy" src={orderImgSrc} alt={orderImgAlt} className="shrink-0 self-start w-4 aspect-[1.45]" />
          </div>
        </div>
      </div>
    </article>
  );

function Specials() {
  const menuItems = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f36690a06b2e978f4f3f271f522eb521c0a94c2542b4f43b389fe30e50085fff?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      imgAlt: "A bowl of Greek salad",
      title: "Greek salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      orderImgAlt: "Order Greek salad"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/688d9360f2bfb868048c34775ca69288713c889050742becee63be94bfae4e28?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      imgAlt: "Bruschetta on a plate",
      title: "Bruchetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      orderImgAlt: "Order Bruschetta" 
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b4aa918814fbff55c7ac41dc5beece303fea935c1a54b5b6c6c14a4aa82873f?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      imgAlt: "A serving of Lemon Dessert",
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      orderImgAlt: "Order Lemon Dessert"
    }
  ];

  return (
    <div className="flex flex-col max-w-[858px] mx-auto mt-16">
      <header className="flex gap-5 px-5 w-full text-black max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex-auto my-auto text-4xl font-medium">Specials</h1>
        <div className="flex flex-col justify-center text-lg text-center">
          <button className="justify-center px-12 py-6 bg-yellow-400 rounded-xl max-md:px-5">
            Online Menu
          </button>
        </div>
      </header>
      <section className="px-5 mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Specials;