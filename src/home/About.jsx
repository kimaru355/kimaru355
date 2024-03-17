import { useRef } from "react";

export default function About() {
  const aboutRef = useRef(null);
  const interestsRef = useRef(null);
  const educationRef = useRef(null);

  const changeContent = (event) => {
    if (event.target.id === "about") {
      aboutRef.current.classList.remove("hidden");
      interestsRef.current.classList.add("hidden");
      educationRef.current.classList.add("hidden");
    } else if (event.target.id === "interests") {
      aboutRef.current.classList.add("hidden");
      interestsRef.current.classList.remove("hidden");
      educationRef.current.classList.add("hidden");
    } else if (event.target.id === "education") {
      aboutRef.current.classList.add("hidden");
      interestsRef.current.classList.add("hidden");
      educationRef.current.classList.remove("hidden");
    }
  };
  return (
    <div id="about" className="h-screen w-full p-20">
      <h2 className="text-4xl text-center text-teal-400 md:text-6xl">
        About me
      </h2>
      <div className="py-16">
        <div className="flex justify-center items-center gap-4 text-xl md:text-2xl text-neutral-300">
          <button
            id="about"
            type="button"
            onClick={changeContent}
            className="hover:text-stone-400 hover:scale-110 duration-100"
          >
            About
          </button>
          <button
            id="education"
            type="button"
            onClick={changeContent}
            className="hover:text-stone-400 hover:scale-110 duration-100"
          >
            Education
          </button>
          <button
            id="interests"
            type="button"
            onClick={changeContent}
            className="hover:text-stone-400 hover:scale-110 duration-100"
          >
            Interests
          </button>
        </div>
        <div ref={aboutRef} className=" w-full h-96">
          <p>about</p>
        </div>
        <div ref={educationRef} className="hidden w-full h-96 grid grid-cols-4">
          <p className="col-span-1">Sep 2023 - Sep 2027</p>
          <p className="col-span-3">Chuka University</p>
        </div>
        <div ref={interestsRef} className="hidden w-full h-96">
          <p>Coding</p>
          <p>Gaming</p>
        </div>
      </div>
    </div>
  );
}
