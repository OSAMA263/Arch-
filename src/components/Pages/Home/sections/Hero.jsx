export default function Welcome() {
  const styles = {
    welcome:
      "absolute -top-[8%] -translate-y-1/2 lg:text-[9vw] sm:text-8xl text-7xl font-extrabold text-[#e0e5eb7f] left-1/2 -translate-x-1/2",
    content_wrapper:
      "grid justify-center pt-4 overflow-hidden md:grid-cols-2 rounded-r-2xl lg:justify-end",
    text_wrapper: "flex flex-col justify-end px-4 gap-y-6 lg:px-14",
  };

  return (
    <>
      <div className="relative my-44 ">
        {/* header */}
        <h1 className={styles.welcome}>Welcome</h1>
        {/* content */}
        <div className={styles.content_wrapper}>
          <div className={styles.text_wrapper}>
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

const text = [
  "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
  "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
  "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
];
