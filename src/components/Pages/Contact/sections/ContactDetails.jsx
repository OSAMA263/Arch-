import { TfiArrowRight } from "react-icons/tfi";

export default function ContactDetails() {
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

  return (
    <div className="my-40 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 w-[90%] mx-auto">
      <div className="row-span-2">
        <h1 className="lg:w-1/2 text-5xl mb-8 font-bold">Contact Details</h1>
      </div>
      {informations.map(({ office, mail, address, phone }, i) => (
        <div key={i} className="grid lg:gap-y-8 gap-y-4 mb-14 col-span-1">
          <h1 className="font-bold text-lg">{office}</h1>
          {/* contact info */}
          <div className="grid grid-cols-2 gap-y-2 [&>p]:text-black">
            <p>Mail:</p> <span>{mail}</span>
            <p>Address:</p> <span>{address}</span>
            <p>Phone:</p> <span>{phone}</span>
          </div>
          <button className="w-fit text-lg font-bold flex items-center gap-x-2 [&>svg]:hover:translate-x-4">view on map <TfiArrowRight className="transition-all duration-500" /></button>
        </div>
      ))}
    </div>
  );
}
