export default function Welcome() {
  const text = [
    "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
    "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
    "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
  ];

  return (
    <>
      <div className="relative my-44 ">
        {/* header */}
        <h1 className="absolute -top-[8%] -translate-y-1/2 lg:text-[9vw] sm:text-8xl text-7xl font-extrabold text-[#e0e5eb7f] left-1/2 -translate-x-1/2">
          Welcome
        </h1>
        {/* content */}
        <div className="grid md:grid-cols-2 overflow-hidden rounded-r-2xl pt-4 lg:justify-end justify-center">
          <div className="flex  flex-col justify-end gap-y-6 px-4 lg:px-14">
            <h1 className="text-4xl font-bold lg:text-5xl">
              Welcome to Arch Studio
            </h1>
            {text.map((par, i) => (
              <p className="text-xl font-thin" key={i}>
                {par}
              </p>
            ))}
          </div>
          <img
            src="home/welcome-img.jpg"
            className="hidden h-full ml-auto md:inline-block"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
