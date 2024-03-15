import CustomText from "./CustomText";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div id="hero" className="w-full flex flex-col justify-center">
      <div className="py-6 px-4 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row gap-6 md:h-[80vh] max-w-screen-2xl w-full">
        <div className="w-full md:w-1/2 grid place-content-center gap-2">
          <h3 className="text-3xl text-teal-500">Full Stack Web Developer</h3>
          <p className="text-xl text-slate-400">Hi, I&lsquo;m</p>
          <h2 className="text-4xl md:text-6xl text-stone-400">
            Emmanuel Kimaru
          </h2>
          <CustomText />
          <div className="flex justify-between max-w-96 pt-4 sm:pt-6 sm:">
            <button
              type="button"
              className="border-2 border-green-300 rounded-xl py-2 px-8 text-2xl text-neutral-200 font-semibold hover:bg-green-300 hover:text-black hover:duration-150"
            >
              Hire Me
            </button>
            <button
              type="button"
              className="border-2 border-green-300 rounded-xl py-2 px-8 text-2xl text-neutral-200 font-semibold hover:bg-green-300 hover:text-black hover:duration-150"
            >
              Connect
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 grid place-content-center">
          <img
            src="/me3.png"
            alt="my image"
            className="w-auto h-80 rounded-xl md:h-max"
          />
        </div>
      </div>
      <div className="flex justify-center items-center pb-12">
        <a href="https://github.com/kimaru355" target="_blank">
          <FaGithub className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:bg-blue-400" />
        </a>
        <a href="https://linkedin.com/in/kimaru355" target="_blank">
          <FaLinkedin className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:bg-blue-400" />
        </a>
        <a href="https://medium.com/@kimaru355" target="_blank">
          <FaMedium className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:bg-blue-400" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
