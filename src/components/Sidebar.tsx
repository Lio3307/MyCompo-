import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  children?: ReactNode;
  getPath: string;
}

const Sidebar = ({ children, getPath }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  function toggleDropdown(param: string): void {
    setDropdownOpen((prev) => (prev === param ? null : param));
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <button
        className="md:hidden fixed top-6 left-6 z-60 px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-105 text-gray-800 font-bold text-lg border border-gray-300"
        onClick={() => setIsOpen(true)}
        aria-label="Open Sidebar"
      >
        ☰
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 md:hidden z-50 backdrop-blur-md bg-transparent"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed md:sticky min-h-screen md:top-0 top-0 left-0 h-full w-72 bg-white shadow-2xl z-60 transform transition-all duration-300 border-r-2 border-gray-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6 font-bold text-xl border-b-2 border-gray-200 flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100">
          <span className="ml-2 text-3xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            My Compo
          </span>
          <button
            className="md:hidden text-3xl font-bold focus:outline-none text-gray-600 hover:text-gray-800 transition-colors duration-300 bg-gray-100 hover:bg-gray-200 rounded-lg p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar"
          >
            ×
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-3">
            <li>
              <Link
                to={"/dashboard/home"}
                className={`block p-4 rounded-xl font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border-2 ${
                  getPath === "home"
                    ? "bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400 shadow-lg text-gray-800"
                    : "border-transparent hover:border-gray-300 hover:shadow-md"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Started
              </Link>
            </li>

            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown("navbar");
                }}
                className="flex items-center justify-between w-full p-4 rounded-xl font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border-2 border-transparent hover:border-gray-300 hover:shadow-md"
                aria-expanded={dropdownOpen === "navbar"}
              >
                <span className="flex items-center gap-3">
                  <span>Navbar</span>
                </span>
                <span className="text-gray-500 font-bold text-lg">
                  {dropdownOpen === "navbar" ? "▲" : "▼"}
                </span>
              </button>
              {dropdownOpen === "navbar" && (
                <ul className="ml-8 mt-2 space-y-2 bg-gray-50 rounded-xl p-3 border-2 border-gray-200">
                  <li>
                    <a
                      href="#"
                      className="block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 text-gray-600 font-medium border border-transparent hover:border-gray-300"
                    >
                      Sidebar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 text-gray-600 font-medium border border-transparent hover:border-gray-300"
                    >
                      Headerbar
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to={"/dashboard/contact"}
                className={`block p-4 rounded-xl font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border-2 ${
                  getPath === "contact"
                    ? "bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400 shadow-lg text-gray-800"
                    : "border-transparent hover:border-gray-300 hover:shadow-md"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to={"/dashboard/hero"}
                className={`block p-4 rounded-xl font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border-2 ${
                  getPath === "hero"
                    ? "bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400 shadow-lg text-gray-800"
                    : "border-transparent hover:border-gray-300 hover:shadow-md"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Hero
              </Link>
            </li>

            <li>
              <Link
                to={"/dashboard/statistic"}
                className={`block p-4 rounded-xl font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border-2 ${
                  getPath === "statistic"
                    ? "bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400 shadow-lg text-gray-800"
                    : "border-transparent hover:border-gray-300 hover:shadow-md"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Statistic
              </Link>
            </li>

          </ul>
        </nav>
      </aside>

      <main className="flex-1 md:ml-6 mt-6">{children}</main>
    </div>
  );
};

export default Sidebar;
