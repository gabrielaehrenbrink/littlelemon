import * as React from "react";
import MenuItem from "./MenuItem";
import { useNavigate } from 'react-router-dom';

function MenuButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <button
      className="justify-center px-12 py-6 bg-yellow-400 rounded-xl max-md:px-5"
      tabIndex="0"
      onClick={handleClick}
      aria-label="Go to the full menu"
    >
      Online Menu
    </button>
  );
}

function Specials() {
  const menuItems = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d66006373ee52416c1b3d660cc815baf58536dd89a128f9b51ee2c9bee2ef5f?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      imgAlt: "A bowl of Greek salad",
      title: "Greek salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic croutons.",
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
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fc32d2a4a4f9ce0b01455089f03706e903c4d0c995fa7a5855cd664d4c60f3a?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      imgAlt: "A serving of Lemon Dessert",
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
      orderImgAlt: "Order Lemon Dessert"
    }
  ];

  return (
    <div className="flex flex-col max-w-[858px] mx-auto mt-36 mb-10">
      <header className="flex gap-5 px-5 w-full text-black max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex-auto my-auto text-4xl font-medium">Specials</h1>
        <div className="flex flex-col justify-center text-lg text-center">
          <MenuButton />
        </div>
      </header>
      <section className="px-5 mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="w-full">
              <MenuItem {...item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Specials;