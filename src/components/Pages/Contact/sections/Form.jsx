import { useState } from "react";
import { useNavigate } from "react-router";
import { TfiArrowRight } from "react-icons/tfi";

export default function Form() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const styles = {
    form: "grid lg:grid-cols-4 grid-cols-1 gap-y-10 my-40 mx-2",
    hero: "text-5xl text-[#222329] font-bold w-fit md:text-balance",
    input:
      "resize-none text-xl font-bold placeholder:text-gray-400 p-4 outline-0 border-b-2 rounded-md text-black transition-all duration-500 border-gray-400 focus:border-black",
    button:
      "ms-auto bg-[#222329] text-white p-6 hover:bg-[#60636d] transition-all [&>svg]:!duration-300 [&>svg]:hover:scale-[1.5] {&>svg]:transition-all",
  };

  const handleUpdateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your trust!\n" +
        " The information that you entered looks like this:\n" +
        'Name:"' +
        user.name +
        '",\n' +
        'Email:"' +
        user.email +
        '",\n' +
        'Message:"' +
        user.message +
        '",\n'
    );
    setTimeout(() => {
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.hero}>Contact with us</h1>
      <div className="col-span-3 flex flex-col">
        <div className="flex flex-col gap-y-6">
          <input
            type="text"
            className={styles.input}
            placeholder="name"
            onChange={handleUpdateUser}
            name="name"
            required
          />
          <input
            type="email"
            className={styles.input}
            placeholder="email"
            onChange={handleUpdateUser}
            name="email"
            required
          />
          <textarea
            onChange={handleUpdateUser}
            name="message"
            required
            className={styles.input}
            placeholder="message"
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <button aria-label="submit" className={styles.button} type="submit">
          <TfiArrowRight />
        </button>
      </div>
    </form>
  );
}
