import logo from "../assets/logo-text.png";
import hamberg from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <nav className="h-16 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-full max-w-6xl items-center px-4 md:px-6">

        <button className="block md:hidden">
          <img
            src={hamberg}
            alt="Menu"
            className="h-5 w-5 object-contain"
          />
        </button>

        <div className="mx-auto md:mx-0">
          <img
            src={logo}
            alt="DevStack"
            className="h-7 w-auto"
          />
        </div>


        <div className="ml-auto hidden items-center gap-7 text-[12px] text-gray-600 md:flex">
          <a className="text-pink-600" href="#">
            Home
          </a>

          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="ml-auto flex items-center gap-3 md:ml-7">
          <button className="cursor-pointer text-[12px] text-gray-600 md:text-[12px]">
            Sign In
          </button>

          <button className="cursor-pointer rounded-full bg-pink-600 px-3 py-1.5 text-[12px] font-medium text-white md:px-4 md:py-2 md:text-[12px]">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;