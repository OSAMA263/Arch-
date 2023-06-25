import MainBtn from "../../../Features/MainBtn";

export default function AboutSection() {
  return (
    <div className="relative my-24 md:w-auto w-[90%] mx-auto">
      {/* img */}
      <div className="flex h-full overflow-hidden flex-col items-start justify-center font-bold text-white">
        <div className="w-full h-full ">
          <img src="home/small-team-img.jpg" className="h-full -z-10 absolute w-full brightness-50 object-cover" alt="" />
        </div>
        {/* text */}
        <div className=" ms-[12vw] flex lg:w-[40%] w-1/2 py-24 flex-col items-start gap-y-16">
          <h1 className="lg:text-7xl text-5xl text-white">Small team, big ideas</h1>
          <MainBtn text="About Us " link="/about-us"/>
        </div>
      </div>
    </div>
  );
}
