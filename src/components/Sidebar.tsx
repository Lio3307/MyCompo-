
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface SidebarProps  {
  children?: ReactNode
  getPath: string
}

const Sidebar = ({children, getPath} : SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen">
      <button
        className="md:hidden p-3 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 blur bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <aside
        className={`fixed md:static min-h-screen top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-4 font-bold text-lg border-b">My Sidebar</div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
              to={"/dashboard/home"}
                className={`block p-2 ${getPath === "home" ? 'bg-gray-100' : ''} rounded hover:bg-gray-100 transition`}
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
                    >
                      Project A
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 rounded hover:bg-gray-100 transition"
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
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
