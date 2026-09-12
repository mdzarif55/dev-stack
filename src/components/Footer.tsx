import logo from "../assets/logo-text.png"
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">

        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">

          <div className="md:col-span-2">
            
            <div>
                <img src={logo} alt="" />
            </div>

            
            <p className="mt-3 max-w-sm text-[10px] leading-4 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="text-[12px] text-gray-600 transition hover:text-pink-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[12px] text-gray-600 transition hover:text-pink-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[12px] text-gray-600 transition hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>

          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 transition hover:text-pink-600"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 transition hover:text-pink-600"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 transition hover:text-pink-600"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 transition hover:text-pink-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 transition hover:text-pink-600"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 transition hover:text-pink-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 transition hover:text-pink-600"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 transition hover:text-pink-600"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-center">

          {/* Copyright */}
          <p className="text-[10px] text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[10px] text-gray-400 transition hover:text-pink-600"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-gray-400 transition hover:text-pink-600"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;