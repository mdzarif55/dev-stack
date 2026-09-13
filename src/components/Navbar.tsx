import logo from "../assets/logo-text.png";
import hamberg from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <nav className="h-16 border-b border-gray-100 bg-white">
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6">

        <div className="md:hidden">
          <img
            src={hamberg}
            alt="Menu"
            className="h-5 w-5 object-contain"
          />
        </div>

        <div className="md:static">
          <img
            src={logo}
            alt="logo"
            className="h-auto w-auto"
          />
        </div>

        <div className="hidden items-center gap-7 text-[14px] text-gray-600 md:flex">
          <a className="text-pink-600" href="#">
            Home
          </a>

          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer text-[14px] text-gray-600">
            Sign In
          </button>

          <button className="cursor-pointer rounded-full bg-pink-600 px-4 py-2 text-[14px] font-medium text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;