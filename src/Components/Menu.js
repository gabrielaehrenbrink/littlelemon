import * as React from "react";
import MenuItem from "./MenuItem";


function Menu() {
    const menuItems = [
        // Starters
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
          imgSrc: "https://www.howsweeteats.com/wp-content/uploads/2018/07/hummus-trio-I-howsweeteats.com-12.jpg",
          imgAlt: "Hummus Platter",
          title: "Hummus Platter",
          price: "$9.99",
          description: "Creamy hummus served with warm pita bread, sliced cucumbers, carrots, and celery sticks.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Hummus Platter"
        },
        {
          imgSrc: "https://www.olivetomato.com/wp-content/uploads/2021/08/SAM_8242-1.jpeg",
          imgAlt: "Spanakopita",
          title: "Spanakopita",
          price: "$7.99",
          description: "Traditional Greek spinach pie made with layers of flaky phyllo dough, spinach, and feta cheese.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Spanakopita"
        },
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
          imgSrc: "https://toriavey.com/images/2011/10/Stuffed-Grape-Leaves-Close.jpg",
          imgAlt: "Stuffed Grape Leaves",
          title: "Stuffed Grape Leaves",
          price: "$8.99",
          description: "Tender grape leaves stuffed with a savory mix of rice, herbs, and spices, served with a lemon wedge.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Stuffed Grape Leaves"
        },

        // Main Courses
        {
          imgSrc: "https://mypureplants.com/wp-content/uploads/2022/09/Falafel-sandwich-2.jpg",
          imgAlt: "Falafel Plate",
          title: "Falafel Plate",
          price: "$10.99",
          description: "Crispy falafel balls served with hummus, tahini sauce, and a fresh cucumber-tomato salad.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Falafel Plate"
        },
        {
          imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryEefDZikUIEvLRKcZqUjHCWzGlmoIgrQxA&s",
          imgAlt: "Grilled Octopus",
          title: "Grilled Octopus",
          price: "$18.99",
          description: "Tender grilled octopus served with a lemon-oregano dressing and a side of roasted vegetables.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Grilled Octopus"
        },
        {
          imgSrc: "https://www.wholesomeyum.com/wp-content/uploads/2021/07/wholesomeyum-Grilled-Mediterranean-Chicken-Kabobs-With-Vegetables-10.jpg",
          imgAlt: "Mediterranean Chicken Skewers",
          title: "Mediterranean Chicken Skewers",
          price: "$13.99",
          description: "Juicy chicken skewers marinated in a blend of Mediterranean spices, served with tzatziki sauce and pita bread.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Mediterranean Chicken Skewers"
        },
        {
          imgSrc: "https://www.delicioustable.com/wp-content/uploads/2021/06/Gyros-featured-480x270.jpg",
          imgAlt: "Lamb Gyro",
          title: "Lamb Gyro",
          price: "$11.99",
          description: "Succulent slices of lamb wrapped in warm pita bread with tomatoes, onions, and tzatziki sauce.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Lamb Gyro"
        },

        // Desserts
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fc32d2a4a4f9ce0b01455089f03706e903c4d0c995fa7a5855cd664d4c60f3a?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          imgAlt: "A serving of Lemon Dessert",
          title: "Lemon Dessert",
          price: "$5.00",
          description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Lemon Dessert"
        },
        {
          imgSrc: "https://saltedpasta.com/en/wp-content/uploads/sites/2/2023/10/baklava-3-2.jpg",
          imgAlt: "Baklava",
          title: "Baklava",
          price: "$6.00",
          description: "A rich, sweet pastry made of layers of phyllo dough filled with chopped nuts and sweetened with honey syrup.",
          orderImgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f147dfbac3a81be096471d722d38b125be94b9c31fe8ab5f63aa85ed872df2c6?apiKey=f2d9609ea8e54563ae48be2a04ee102f&",
          orderImgAlt: "Order Baklava"
        }
      ];

      return (
        <div className="flex flex-col items-center max-w-[1024px] mx-auto mt-36 mb-10">
          <header className="flex gap-5 px-5 w-full text-black max-md:flex-wrap max-md:max-w-full">
            <h1 className="flex-auto my-auto text-4xl font-medium">Menu</h1>
          </header>
          <section className="px-5 mt-14 w-full max-md:mt-10 max-md:max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {menuItems.map((item, index) => (
                <div key={index} className="w-full h-full">
                  <MenuItem {...item} />
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }
    
    export default Menu;