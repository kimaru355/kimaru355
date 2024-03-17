import CustomText from "./CustomText";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div
      id="hero"
      className="w-full flex flex-col items-center h-screen md:justify-center"
    >
      <div className="py-12 px-4 md:px-12 flex flex-col-reverse md:flex-row gap-6 max-w-screen-2xl w-full">
        <div className="w-full md:w-1/2 grid place-content-center gap-2">
          <h3 className="text-3xl text-teal-500">Full Stack Web Developer</h3>
          <p className="text-xl text-slate-400">Hi, I&lsquo;m</p>
          <h2 className="text-4xl md:text-6xl text-stone-400">
            Emmanuel Kimaru
          </h2>
          <CustomText />
          <div className="flex justify-between max-w-96 pt-6 sm:pt-16">
            <a
              href="https://wa.me/254757821727"
              target="_blank"
              className="border-2 border-green-300 rounded-xl py-2 px-8 text-2xl text-neutral-200 font-semibold hover:bg-green-300 hover:text-black hover:duration-150"
            >
              Hire Me
            </a>
            <a
              href="#contact"
              type="button"
              className="border-2 border-green-300 rounded-xl py-2 px-8 text-2xl text-neutral-200 font-semibold hover:bg-green-300 hover:text-black hover:duration-150"
            >
              Connect
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 grid place-content-center">
          <img
            src="/me.svg"
            alt="my image"
            className="w-auto h-80 rounded-xl md:h-[32rem]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-6 px-10 md:px-20">
        <div className="w-full md:w-3/4 max-w-[48rem] flex justify-between items-center">
          <a
            href="Emmanuel-Kimaru-CV.pdf"
            className="ring ring-sky-500 rounded-xl px-4 py-2 md:px-8 md:py-2 hover:bg-sky-500 font-bold text-md md:text-xl text-neutral-200"
          >
            Download CV
          </a>
          <div className="flex justify-center items-center">
            <a href="https://github.com/kimaru355" target="_blank">
              <FaGithub className="w-12 h-12 md:w-20 md:h-20 rounded-full hover:bg-blue-400" />
            </a>
            <a href="https://linkedin.com/in/kimaru355" target="_blank">
              <FaLinkedin className="w-12 h-12 md:w-20 md:h-20 rounded-xl hover:bg-blue-400" />
            </a>
            <a href="https://medium.com/@kimaru355" target="_blank">
              <FaMedium className="w-12 h-12 md:w-20 md:h-20 rounded-xl hover:bg-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
