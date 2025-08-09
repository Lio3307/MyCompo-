import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container max-w-[50rem] mx-auto p-8 rounded-2xl ">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Get Started
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-8 bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300">
          This website helps you speed up your UI development by offering
          ready-to-use, reusable components. You no longer have to build UI
          elements from scratch or dig through old code repositories. Easily
          customize each component to match your project's unique design and
          functionality, saving you valuable time and effort. All styles are
          based on Tailwind CSS.
        </p>

        <h1 className="mt-12 text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          UI Components
        </h1>
        <p className="text-lg text-gray-700 mt-4 mb-8 bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300">
          The available UI elements are organized as components and HTML
          snippets for easy integration.
        </p>

        <div className="mt-12 justify-center flex flex-wrap gap-6">
          <button
            className="font-bold bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 
            py-8 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105
            transition-all duration-300 ease-in-out hover:cursor-pointer
            focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50
            text-gray-800 text-lg border border-gray-300 min-w-[140px]"
          >
            Sidebar
          </button>
          <button
            className="font-bold bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 
            py-8 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105
            transition-all duration-300 ease-in-out hover:cursor-pointer
            focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50
            text-gray-800 text-lg border border-gray-300 min-w-[140px]"
          >
            Footer
          </button>
          <Link
            to={"/dashboard/hero"}
            className="font-bold bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 
            py-8 px-12 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105
            transition-all duration-300 ease-in-out hover:cursor-pointer
            focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50
            text-gray-800 text-lg border border-gray-300 min-w-[140px]"
          >
            Hero
          </Link>
          <button
            className="font-bold bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 
            py-8 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105
            transition-all duration-300 ease-in-out hover:cursor-pointer
            focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50
            text-gray-800 text-lg border border-gray-300 min-w-[140px]"
          >
            Navbar
          </button>
          <Link
            to={"/dashboard/contact"}
            className="font-bold bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 
            py-8 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105
            transition-all duration-300 ease-in-out hover:cursor-pointer
            focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50
            text-gray-800 text-lg border border-gray-300 min-w-[140px]"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
