
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
              <a
                href="#"
                className="block p-2 rounded hover:bg-gray-100 transition"
              >
                Dashboard
              </a>
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
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-2 text-gray-600">
          Ini adalah area konten utama. Sidebar tetap responsif di semua layar.
        </p>
      </main>
    </div>
  );
};

export default Sidebar;
