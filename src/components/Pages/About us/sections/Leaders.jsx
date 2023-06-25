import male from "/public/about/employee-male.png";
import female from "/public/about/employee-female.png";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";

export default function Leaders() {
  const cards = [
    { img: male, name: "Jake Richards", position: "Chief Architect" },
    { img: male, name: "Thompson Smith", position: "Head of Finance" },
    { img: male, name: "Jackson Rourke", position: "Lead Designer" },
    { img: female, name: "Maria Simpson", position: "Senior Architect" },
  ];

  return (
    <>
      <div className="mx-auto my-40 grid w-[80%] gap-x-10 md:w-auto md:grid-cols-3">
        {/* header */}
        <div className="col-span-1">
          <h1 className="w-1/2 md:text-6xl text-4xl font-bold">The Leaders</h1>
        </div>
        {/* the team */}
        <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-8 md:col-span-2 md:mt-0">
          {cards.map(({ img, name, position }, i) => (
            <div key={i} className="flex flex-col">
              {/* hover content*/}
              <div className="relative mb-4 overflow-hidden [&>div]:hover:opacity-100 ">
                {/* contact pc */}
                <div className="absolute inset-0 hidden items-center justify-center gap-x-8 bg-gray-900 bg-opacity-50 opacity-0 transition-all duration-500 sm:flex">
                  <AiFillTwitterSquare className="cursor-pointer text-4xl text-white transition-all hover:bg-[#1d9bf0] hover:text-gray-200" />
                  <AiFillLinkedin className="cursor-pointer text-4xl text-white transition-all hover:bg-[#0a66c2] hover:text-gray-200" />
                </div>
                <img src={img} alt="" className="bg-gray-200 " />
              </div>
              <p className="text-lg font-bold">{name}</p>
              <p className="text-lg">{position}</p>
              {/* contact mobile */}
              <div className="flex gap-4 mt-auto sm:hidden [&>svg]:cursor-pointer [&>svg]:text-4xl">
                <AiFillTwitterSquare className="transition-colors text-gray-500 hover:text-gray-800 duration-500" />
                <AiFillLinkedin className="transition-colors text-gray-500 hover:text-gray-800 duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
