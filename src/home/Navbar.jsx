import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useRef } from "react";

function Navbar() {
  const hamburgerRef = useRef(null);
  const closeHamburgerRef = useRef(null);
  const menuRef = useRef(null);

  let toggleHamburger = () => {
    hamburgerRef.current.classList.toggle("hidden");
    closeHamburgerRef.current.classList.toggle("hidden");
    if (hamburgerRef.current.classList.contains("hidden")) {
      menuRef.current.className =
        "text-2xl bg-blue-dark text-slate-300 absolute z-10 flex flex-col top-16 left-0 w-full items-center pb-4";
    } else {
      menuRef.current.className =
        "text-2xl bg-blue-dark text-slate-300 hidden flex-col md:flex md:flex-row md:gap-4 lg:gap-6 xl:gap-8";
    }
  };

  return (
    <header className="bg-blue-dark h-16 md:h-auto px-4 py-2 md:px-12 lg:px-24 flex justify-center sticky top-0">
      <nav className="max-w-screen-2xl w-full flex justify-between items-center">
        <a href="#hero" className="hover:scale-110">
          <img
            src="/logo.svg"
            alt="my logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </a>
        <div
          ref={hamburgerRef}
          className="w-12 h-12 md:hidden"
          onClick={toggleHamburger}
        >
          <GiHamburgerMenu className="w-full h-full" />
        </div>
        <div
          ref={closeHamburgerRef}
          className="w-12 h-12 hidden md:hidden"
          onClick={toggleHamburger}
        >
          <MdClose className="w-full h-full" />
        </div>
        <menu
          ref={menuRef}
          className="text-2xl bg-blue-dark text-slate-300 hidden flex-col md:flex md:flex-row md:gap-4 lg:gap-6 xl:gap-8"
        >
          <a
            href="#hero"
            className="hover:scale-110 hover:underline hover:underline-offset-8 hover:text-blue-1"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:scale-110 hover:underline hover:underline-offset-8 hover:text-blue-1"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:scale-110 hover:underline hover:underline-offset-8 hover:text-blue-1"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:scale-110 hover:underline hover:underline-offset-8 hover:text-blue-1"
          >
            Projects
          </a>
          <a
            href="#services"
            className="hover:scale-110 hover:underline hover:underline-offset-8 hover:text-blue-1"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:scale-110 hover:underline hover:underline-offset-8 hover:text-blue-1"
          >
            Contact
          </a>
        </menu>
      </nav>
    </header>
  );
}

export default Navbar;
