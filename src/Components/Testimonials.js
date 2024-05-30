import * as React from "react";
import Slider from "react-slick";

  

const TestimonialCard = ({ rating, userpic, name, text }) => {
    return (
      <article className="flex flex-col grow justify-center text-sm text-black max-md:mt-5 h-[350px] w-[250px]">
        <div className="flex flex-col items-start py-12 pr-24 pl-8 w-full bg-white max-md:px-6 h-full">
          <div className="flex gap-4 font-bold whitespace-nowrap">
            <div className="flex flex-col flex-1">
              <div className="text-lg">{rating}</div>
              {userpic && <img src={userpic} alt="userpic" className="w-36 h-36 rounded-full" />}
            </div>
            <div className="my-auto text-lg">{name}</div>

          </div>
          <p className="mt-6 text-base overflow-hidden">{text}</p>
        </div>
      </article>
    );
  };

  const testimonials = [
    { rating: '★★★★★', userpic:'https://www.rollingstone.com/wp-content/uploads/2019/10/10372528mgW.jpg?w=1581&h=1054&crop=1', name: 'Alice', text: 'Amazing food and service!' },
    { rating: '★★★★', userpic:'https://www.rollingstone.com/wp-content/uploads/2019/10/10372528mgW.jpg?w=1581&h=1054&crop=1', name: 'Bob', text: 'Great experience overall.' },
    { rating: '★★★★★', userpic:'https://www.rollingstone.com/wp-content/uploads/2019/10/10372528mgW.jpg?w=1581&h=1054&crop=1', name: 'Catherine', text: 'Absolutely loved it!' },
    { rating: '★★★★★', userpic:'https://www.rollingstone.com/wp-content/uploads/2019/10/10372528mgW.jpg?w=1581&h=1054&crop=1', name: 'David', text: 'Fantastic, highly recommend!' },
    { rating: '★★★', userpic:'https://www.rollingstone.com/wp-content/uploads/2019/10/10372528mgW.jpg?w=1581&h=1054&crop=1', name: 'Eva', text: 'It was okay, nothing special.' },
];


function Testimonials() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

     return (
       <section className="flex justify-center items-center px-16 py-24 bg-custom-green max-md:px-5">
         <div className="flex flex-col mt-14 max-w-full w-[860px] max-md:mt-10">
           <h2 className="self-center text-4xl font-medium text-yellow-400">Testimonials</h2>
           <div className="mt-10 max-md:mt-10 max-md:max-w-full">
           <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="px-2">
                <TestimonialCard
                  key={index}
                  rating={testimonial.rating}
                  userpic={testimonial.userpic}
                  name={testimonial.name}
                  text={testimonial.text}

                />
              </div>
            ))}
          </Slider>
           </div>
         </div>
       </section>
     );
   }

   export default Testimonials;