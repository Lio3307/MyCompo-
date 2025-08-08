const Home = () => {
  return (
    <>
      <div className="container max-w-[50rem] mx-auto p-6">
        <h1 className="text-[2rem] font-bold mb-4">Get Started</h1>
        <p className="text-base leading-relaxed text-gray-700">
          This website helps you speed up your UI development by offering
          ready-to-use, reusable components. You no longer have to build UI
          elements from scratch or dig through old code repositories. Easily
          customize each component to match your project's unique design and
          functionality, saving you valuable time and effort. All styles are
          based on Tailwind CSS.
        </p>

        <h1 className="mt-[3rem] text-[2rem] font-bold">UI Components</h1>
        <p className="text-base text-gray-700">
          The available UI elements are organized as components and HTML
          snippets for easy integration.
        </p>

        <div className="mt-[3rem] justify-center flex flex-wrap gap-4">
          <button
            className="bg-gray-300 py-6 rounded-[0.5rem] px-[4rem] 
        hover:bg-gray-400 hover:shadow-lg hover:scale-105
        transition duration-300 ease-in-out
        hover:cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Sidebar
          </button>
          <button
            className="bg-gray-300 py-6 rounded-[0.5rem] px-[4rem] 
        hover:bg-gray-400 hover:shadow-lg hover:scale-105
        transition duration-300 ease-in-out hover:cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Footer
          </button>
          <button
            className="bg-gray-300 py-6 rounded-[0.5rem] px-[4rem] 
        hover:bg-gray-400 hover:shadow-lg hover:scale-105
        transition duration-300 ease-in-out hover:cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Hero
          </button>
          <button
            className="bg-gray-300 py-6 rounded-[0.5rem] px-[4rem] 
        hover:bg-gray-400 hover:shadow-lg hover:scale-105
        transition duration-300 ease-in-out hover:cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Navbar
          </button>
          <button
            className="bg-gray-300 py-6 rounded-[0.5rem] px-[4rem] 
        hover:bg-gray-400 hover:shadow-lg hover:scale-105
        transition duration-300 ease-in-out hover:cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Sidebar
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
