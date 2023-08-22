export default function About_Contact_Section({ img, header, text, title }) {
  return (
    <div className="relative my-20 overflow-hidden md:my-36">
      {/* image */}
      <img loading="lazy" src={img} alt="img" className="object-cover h-full brightness-50 " />
      <div className="absolute bottom-0 right-0 xl:w-[60%] md:w-[75%] md:h-[50%]">
        <div className="relative flex items-end justify-end w-full h-full py-12 bg-white border-0 md:py-0 sm:py-32">
          {/* header */}
          <h1 className="text-[#eeeff4] absolute -top-4 -translate-y-1/2 lg:text-[9vw] text-8xl font-extrabold text-[#e5e6e7c4] left-1/2 -translate-x-1/2">
            {header}
          </h1>
          {/* text */}
          <div className="md:w-[70%] w-[90%] mx-auto">
            <h1 className="mb-8 text-5xl font-bold">{title}</h1>
            <p className="text-xl">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
