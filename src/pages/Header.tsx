import ComponentHighlight from "../components/ComponentHighlight";

const Header = () => {
  const codeHeader1 = `<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>`;

  const codeHeader2 = `<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>`;

  const codeHeader3 = `<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>`;
  const codeHeader4 = `<header class="bg-white shadow-sm">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-2xl font-bold">BrandName</span>
    </a>
    <nav class="md:mr-auto md:ml-8 flex flex-wrap items-center text-base justify-center">
      <a class="mr-8 text-gray-700 hover:text-indigo-600 font-medium">Home</a>
      <a class="mr-8 text-gray-700 hover:text-indigo-600 font-medium">About</a>
      <a class="mr-8 text-gray-700 hover:text-indigo-600 font-medium">Services</a>
      <a class="mr-8 text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
    </nav>
    <button class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md font-medium transition-all">
      Get Started
    </button>
  </div>
</header>
`;
  const codeHeader5 = `<header class="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span class="ml-3 text-2xl font-bold">GradientCo</span>
    </a>
    <nav class="md:mr-auto md:ml-8 flex flex-wrap items-center text-base justify-center">
      <a class="mr-8 text-white/90 hover:text-white font-medium">Home</a>
      <a class="mr-8 text-white/90 hover:text-white font-medium">Portfolio</a>
      <a class="mr-8 text-white/90 hover:text-white font-medium">Blog</a>
      <a class="mr-8 text-white/90 hover:text-white font-medium">Contact</a>
    </nav>
    <button class="px-6 py-2 bg-white text-indigo-700 rounded-lg shadow-lg hover:scale-105 transition-transform font-medium">
      Sign Up
    </button>
  </div>
</header>
`;
  const codeHeader6 = `<header class="bg-gray-900">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span class="ml-3 text-2xl font-bold">DarkBrand</span>
    </a>
    <nav class="md:mr-auto md:ml-8 flex flex-wrap items-center text-base justify-center">
      <a class="mr-8 text-gray-300 hover:text-white font-medium">Dashboard</a>
      <a class="mr-8 text-gray-300 hover:text-white font-medium">Projects</a>
      <a class="mr-8 text-gray-300 hover:text-white font-medium">Team</a>
      <a class="mr-8 text-gray-300 hover:text-white font-medium">Reports</a>
    </nav>
    <button class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md font-medium">
      Login
    </button>
  </div>
</header>
`;
  const codeHeader7 = `<header class="backdrop-blur-md bg-white/80 border-b border-gray-200">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-2xl font-bold">GlassUI</span>
    </a>
    <nav class="md:mr-auto md:ml-8 flex flex-wrap items-center text-base justify-center">
      <a class="mr-8 text-gray-700 hover:text-indigo-600 font-medium">Features</a>
      <a class="mr-8 text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
      <a class="mr-8 text-gray-700 hover:text-indigo-600 font-medium">Testimonials</a>
    </nav>
    <button class="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-lg">
      Try Now
    </button>
  </div>
</header>
`;
  const codeHeader8 = `<header class="bg-white shadow-md">
  <div class="container mx-auto flex items-center justify-between px-6 py-4">
    <!-- Logo -->
    <a href="#" class="text-2xl font-bold text-indigo-600">ProBrand</a>

    <!-- Mobile Menu Toggle (Checkbox Hack) -->
    <input type="checkbox" id="menu-toggle" class="hidden peer" />
    <label for="menu-toggle" class="md:hidden block cursor-pointer text-gray-600 hover:text-indigo-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </label>

    <!-- Navigation -->
    <nav class="flex-col md:flex-row md:flex hidden peer-checked:flex space-y-3 md:space-y-0 md:space-x-8 items-start md:items-center mt-4 md:mt-0">
      <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium">Home</a>

      <!-- Dropdown -->
      <div class="relative group">
        <button class="flex items-center text-gray-700 hover:text-indigo-600 font-medium">
          Services
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48 mt-2">
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">Web Development</a>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">UI/UX Design</a>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">SEO Optimization</a>
        </div>
      </div>

      <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium">Portfolio</a>
      <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>

      <!-- CTA Button -->
      <a href="#" class="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
        Get Started
      </a>
    </nav>
  </div>
</header>

`;
  return (
    <>
      <ComponentHighlight sourceCode={codeHeader1} title="Header component" />
      <ComponentHighlight sourceCode={codeHeader2} title="" />
      <ComponentHighlight sourceCode={codeHeader3} title="" />
      <ComponentHighlight sourceCode={codeHeader4} title="" />
      <ComponentHighlight sourceCode={codeHeader5} title="" />
      <ComponentHighlight sourceCode={codeHeader6} title="" />
      <ComponentHighlight sourceCode={codeHeader7} title="" />
      <ComponentHighlight sourceCode={codeHeader8} title="" />
    </>
  );
};

export default Header;
