import male from "/public/about/employee-male.webp";
import female from "/public/about/employee-female.webp";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";

export default function Leaders() {

  const styles = {
    section: "mx-auto my-40 grid w-[80%] gap-x-10 md:w-auto md:grid-cols-3",

    contact_PC_wrapper:
      "absolute inset-0 items-center justify-center hidden transition-all duration-500 bg-gray-900 bg-opacity-50 opacity-0 gap-x-8 sm:flex",
    logo_contact_PC:
      "cursor-pointer text-4xl text-white transition-all hover:text-gray-200",

    contact_MOBLIE_wrapper:
      "mt-auto flex gap-4 sm:hidden [&>svg]:cursor-pointer [&>svg]:text-4xl",
    logo_contact_MOBILE:
      "text-gray-500 transition-colors duration-500 hover:text-gray-800",
  };

  return (
    <>
      <section className={styles.section}>
        {/* header */}
        <div className="col-span-1">
          <h1 className="w-1/2 text-4xl font-bold md:text-6xl">The Leaders</h1>
        </div>
        {/* the team */}
        <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-12 md:col-span-2 md:mt-0">
          {cards.map(({ img, name, position }, i) => (
            <div key={i} className="flex flex-col">
              {/* hover content*/}
              <div className="relative mb-4 overflow-hidden [&>div]:hover:opacity-100 ">
                {/* contact pc */}
                <div className={styles.contact_PC_wrapper}>
                  <AiFillTwitterSquare
                    className={`${styles.logo_contact_PC} hover:bg-[#1d9bf0]`}
                  />
                  <AiFillLinkedin
                    className={`${styles.logo_contact_PC}  hover:bg-[#0a66c2]`}
                  />
                </div>
                <img src={img} alt={position+" image"} className="bg-gray-200 " />
              </div>
              <p className="text-lg font-bold">{name}</p>
              <p className="text-lg">{position}</p>
              {/* contact mobile */}
              <div className={styles.contact_MOBLIE_wrapper}>
                <AiFillTwitterSquare className={styles.logo_contact_MOBILE} />
                <AiFillLinkedin className={styles.logo_contact_MOBILE} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const cards = [
  { img: male, name: "Jake Richards", position: "Chief Architect" },
  { img: male, name: "Thompson Smith", position: "Head of Finance" },
  { img: male, name: "Jackson Rourke", position: "Lead Designer" },
  { img: female, name: "Maria Simpson", position: "Senior Architect" },
];
