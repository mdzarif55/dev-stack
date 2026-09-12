import logo from "../assets/logo-text.png"
const Navbar = () => {
  return (
    <nav className="h-16 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        
        
        <div>
            <img src={logo} alt="logo" />
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-7 text-[12px] text-gray-600 md:flex">
          <a className="text-pink-600" href="#">
            Home
          </a>

          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-4">
          <button className="text-[12px] text-gray-600 cursor-pointer">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-4 py-2 text-[12px] font-medium text-white cursor-pointer">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;