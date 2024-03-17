import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnazop");
  const sentRef = useRef(null);
  if (state.succeeded) {
    sentRef.current.classList.remove("hidden");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-xl flex flex-col justify-center gap-4 w-full"
    >
      <div>
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="py-1 px-4 rounded-xl text-xl outline-none focus:ring focus:ring-sky-400"
        />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="What would you like to talk about?"
        className="py-1 px-4 rounded-xl text-xl outline-none focus:ring focus:ring-sky-400 h-40"
      />
      <ValidationError prefix="Message" field="message" errors={state.error} />
      <button
        type="submit"
        disabled={state.submitting}
        className="py-2 px-8 ring ring-sky-400 rounded-xl text-neutral-200"
      >
        Submit
      </button>
      <p ref={sentRef} className="text-green-400 text-center hidden">
        Message sent
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <div id="contact" className="h-[70vh] w-full py-20 px-10 md:px-20">
      <h2 className="text-4xl text-center text-teal-400 md:text-6xl mb-10">
        Contact me
      </h2>
      <div className="flex justify-between md:justify-center gap-2 md:gap-12">
        <div className="h-[40vh] flex flex-col justify-center items-center">
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
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
