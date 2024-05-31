import * as React from "react";

function NavigationLinks({ title, items }) {
  return (
    <section className="flex flex-col text-xl mt-8 md:mt-10">
      <h2 className="font-extrabold text-yellow-400">{title}</h2>
      <ul className="mt-2 font-medium leading-7 text-white">
        {items.map((item, index) => (
          <li key={index} className="mt-2">
            <a href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactDetails() {
  const contactInfo = ["Address", "Phone number", "Email"];
  return <NavigationLinks title="Contact" items={contactInfo} />;
}

function SocialMediaLinks() {
  const socialMediaInfo = ["Instagram", "Twitter", "LinkedIn"];
  return <NavigationLinks title="Social Media Links" items={socialMediaInfo} />;
}

function DoormatNavigation() {
  const navItems = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];
  return <NavigationLinks title="Doormat Navigation" items={navItems} />;
}

function Footer() {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center px-4 py-8 bg-custom-green">
      <div className="w-36 h-18 overflow-hidden">
       <img src="/Logo2.png" alt="Little Lemon Logo" className="w-full h-full object-cover" style={{ maxWidth: '40px', maxHeight: '55px' }} />
   </div>
      <div className="max-w-full w-[886px] mt-8 md:mt-0 md:ml-8">
        <div className="flex flex-wrap gap-5">
          <DoormatNavigation />
          <ContactDetails />
          <SocialMediaLinks />
        </div>
      </div>
    </main>
  );
}

export default Footer;