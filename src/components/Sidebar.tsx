import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  children?: ReactNode;
  getPath: string;
}

const Sidebar = ({ children, getPath }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen">
      <button
        className="md:hidden fixed top-4 left-4 z-60 px-3 py-2 bg-gray-200 rounded shadow-md focus:outline-none"
        onClick={() => setIsOpen(true)}
        aria-label="Open Sidebar"
      >
        ☰
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-transparent z-50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <aside
        className={`fixed md:static min-h-screen top-0 left-0 h-full w-64 bg-white shadow-md z-60 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-4 font-bold text-lg border-b flex justify-between items-center">
          <span>My Sidebar</span>
          <button
            className="md:hidden text-2xl font-bold focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar"
          >
            ×
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to={"/dashboard/home"}
                className={`block p-2 rounded hover:bg-gray-100 transition ${
                  getPath === "home" ? "bg-gray-100" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Started
              </Link>
            </li>

            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 transition"
                aria-expanded={dropdownOpen}
              >
                <span>Projects</span>
                <span>{dropdownOpen ? "▲" : "▼"}</span>
              </button>
              {dropdownOpen && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="block p-2 rounded hover:bg-gray-100 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Project A
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 rounded hover:bg-gray-100 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Project B
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="#"
                className="block p-2 rounded hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 md:ml-[2rem] mt-[2rem]">{children}</main>
    </div>
  );
};

export default Sidebar;
