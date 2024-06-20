import * as React from "react";


const MenuItem = ({ imgSrc, imgAlt, title, price, description, orderImgSrc, orderImgAlt }) => (
    <article className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-col grow mt-8">
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="w-full aspect-[1.43] rounded-t-lg"
        />
        <div className="flex flex-col px-6 py-7 w-full bg-zinc-100 rounded-b-lg h-full">
          <div className="flex gap-5 justify-between whitespace-nowrap">
            <h2 className="text-2xl font-medium leading-5 text-black text-ellipsis overflow-hidden whitespace-nowrap">
              {title}
            </h2>
            <div className="text-base font-bold text-orange-300">{price}</div>
          </div>
          <p className="mt-9 text-base text-gray-600 overflow-hidden text-ellipsis">{description}</p>
          <div className="flex gap-3.5 mt-8 text-base font-bold text-zinc-800">
            <div className="flex-auto">Order a delivery</div>
            <img
              loading="lazy"
              src={orderImgSrc}
              alt={orderImgAlt}
              className="shrink-0 self-start w-4 aspect-[1.45]"
            />
          </div>
        </div>
      </div>
    </article>
  );
  
  export default MenuItem;