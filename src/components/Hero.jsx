import { useState, useEffect } from "react";
//import logo
// import LogoLight from '../assets/img/bg-light';
// import LogoDark from '../assets/img/bg-dark';
//import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";

const Hero = () => {
  //select html element
  const [theme, setTheme] = useState("light");

  const handleThemeSwitch = () => {
    const html = document.querySelector("html");
    if (theme === "light") {
      setTheme("dark");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <section className="min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark">
      <button
        onClick={handleThemeSwitch}
        className="bg-accent w-12 h-12 rounded-full flex justify-center items-center text-white"
      >
        {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
      </button>
    </section>
  );
};
export default Hero;
