import * as React from "react";
import Slider from "react-slick";

const TestimonialCard = ({ rating, userpic, name, text }) => {
    return (
        <article className="flex flex-col grow justify-center pb-6 text-sm text-black max-md:mt-5 h-[350px] w-[300px]"> 
            <div className="flex flex-row items-start py-12 pr-8 pl-8 w-full bg-white max-md:px-6 h-full">
                <div className="flex-shrink-0">
                    {userpic && <img src={userpic} alt="userpic" className="w-32 h-32 rounded-full object-cover" />}
                </div>
                <div className="flex flex-col flex-grow pl-4">
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">{rating}</div>
                        <div className="text-xl font-bold">{name}</div>
                    </div>
                    <p className="mt-4 text-lg overflow-hidden">{text}</p>
                </div>
            </div>
        </article>
    );
};

const testimonials = [
    { rating: '★★★★★', userpic: 'https://www.rollingstone.com/wp-content/uploads/2019/10/10372528mgW.jpg?w=1581&h=1054&crop=1', name: 'Taylor', text: 'Amazing food and service!' },
    { rating: '★★★★', userpic: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/57282_v9_bc.jpg', name: 'Ryan', text: 'Great experience overall.' },
    { rating: '★★★★★', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdtE-qV2stBSc1wx2dORz4H5r6M-ADYxejQ&s', name: 'Blake', text: 'Absolutely loved it!' },
    { rating: '★★★★★', userpic: 'https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzNDg3NzQzODQwNDI5NzU3/selena-gomez-net-worth.jpg', name: 'Selena', text: 'Fantastic, highly recommend!' },
    { rating: '★★★', userpic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/W_Joe_Alwyn.jpg/800px-W_Joe_Alwyn.jpg', name: 'Joe', text: 'It was okay, nothing special.' },
];

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
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
        <section className="flex justify-center items-center px-16 py-32 bg-custom-green max-md:px-5">
            <div className="flex flex-col mt-14 max-w-full w-[860px] max-md:mt-10">
                <h2 className="self-center text-4xl font-medium text-yellow-400">Testimonials</h2>
                <div className="mt-10 max-md:mt-10 max-md:max-w-full">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div className="px-16" key={index}>
                                <TestimonialCard
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
