import { TfiArrowRight } from "react-icons/tfi";

export default function ContactDetails() {
  
  const scrollSmoothTo = (e) => {
    e.preventDefault();
    const element = document.getElementById("map");
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto my-40 grid w-[90%] grid-cols-1 gap-x-12 md:grid-cols-2 lg:grid-cols-3">
      <div className="row-span-2">
        <h1 className="mb-8 text-5xl font-bold lg:w-1/2">Contact Details</h1>
      </div>
      {informations.map(({ office, mail, address, phone }, i) => (
        <div key={i} className="grid col-span-1 mb-14 gap-y-4 lg:gap-y-8">
          <h1 className="text-lg font-bold">{office}</h1>
          {/* contact info */}
          <div className="grid grid-cols-2 gap-y-2 [&>p]:text-black">
            <p>Mail:</p> <span>{mail}</span>
            <p>Address:</p> <span>{address}</span>
            <p>Phone:</p> <span>{phone}</span>
          </div>
          <a
            href=""
            onClick={(e) => scrollSmoothTo(e, "map")}
            className="flex w-fit items-center gap-x-2 text-lg font-bold [&>svg]:hover:translate-x-4"
          >
            view on map
            <TfiArrowRight className="transition-all duration-500" />
          </a>
        </div>
      ))}
    </section>
  );
}


const informations = [
  {
    office: "Main Office",
    mail: "arch@gmail.com",
    address: "123 Wines Lane X3",
    phone: "0123-456-789",
  },
  {
    office: "Office ||",
    mail: "arch69@gmail.com",
    address: "324 Wines Lane X3",
    phone: "9876-543-210",
  },
];
