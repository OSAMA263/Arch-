export default function Heritage() {
  const content = {
    header: "Our Heritage",
    text: [
      "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",
      "Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.",
      "Our small team of world-class professionals provides input on every project.",
    ],
  };

  return (
    <>
      <div className="my-40 grid items-baseline justify-between gap-x-8 md:grid-cols-2 lg:gap-x-32">
        {/* some text */}
        <div className="mx-auto flex w-[90%] flex-col gap-y-8 ">
          {/* header */}
          <h1 className="text-6xl font-semibold">{content.header}</h1>
          {/* text */}
          {content.text.map((text, i) => (
            <p key={i} className="text-lg">
              {text}
            </p>
          ))}
        </div>
        {/* image */}
        <div className="h-full w-full hidden md:block">
          <img
            src="about/heritage-img.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
