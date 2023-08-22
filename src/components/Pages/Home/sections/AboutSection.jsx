import MainBtn from "../../../Features/MainBtn";

export default function AboutSection() {
  const styles = {
    section: "relative my-24 md:w-auto w-[90%] mx-auto",
    content_wrapper:
      "flex flex-col items-start justify-center h-full overflow-hidden font-bold text-white",
    img: "absolute object-cover w-full h-full -z-10 brightness-50",
    text_wrapper:
      " ms-[12vw] flex w-1/2 flex-col items-start gap-y-16 py-24 lg:w-[40%]",
  };

  return (
    <section className={styles.section}>
      {/* img */}
      <div className={styles.content_wrapper}>
        <div className="w-full h-full ">
          <picture>
            <source
              srcSet="home/mobile/small-team-img.bak.webp"
              media="(max-width:640px)"
            />
            <img
              src="home/pc/small-team-img.bak.webp"
              className={styles.img}
              alt="small-team"
            />
          </picture>
        </div>
        {/* text */}
        <div className={styles.text_wrapper}>
          <h1 className="text-5xl text-white lg:text-7xl">
            Small team, big ideas
          </h1>
          <MainBtn text="About Us" name="about page" link="/about-us" />
        </div>
      </div>
    </section>
  );
}
