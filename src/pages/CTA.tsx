import ComponentHighlight from "../components/ComponentHighlight";

const CTA = () => {
  const code = `<section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white body-font">
  <div class="container px-6 py-24 mx-auto">
    <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center shadow-2xl">
      
      <div class="flex-grow text-center md:text-left mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
          Elevate Your Business to the Next Level
        </h1>
        <p class="text-gray-300 text-lg max-w-xl">
          Unlock powerful tools and premium insights designed to help you grow faster, smarter, and more efficiently. 
          Start your 14-day free trial today—no credit card required.
        </p>
      </div>

      <div class="flex-shrink-0">
        <button class="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-indigo-600 hover:to-blue-700">
          <span>Get Started</span>
          <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</section>

`;
  const code1 = `<section class="bg-white text-gray-900 body-font">
  <div class="container mx-auto px-6 py-20">
    <div class="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-3xl shadow-xl p-12 flex flex-col md:flex-row items-center">
      
      <!-- Text -->
      <div class="flex-grow text-center md:text-left mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Ideas Into Reality
        </h1>
        <p class="text-lg text-gray-600 max-w-lg">
          Build and scale your project with our all-in-one platform designed for speed, flexibility, and growth.
        </p>
      </div>

      <!-- Button -->
      <div>
        <button class="px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          Start Free Trial
        </button>
      </div>

    </div>
  </div>
</section>
`;
  const code2 = `<section class="relative bg-cover bg-center bg-no-repeat" style="background-image: url('https://source.unsplash.com/1600x900/?business,technology');">
  <div class="bg-black/60 w-full h-full absolute inset-0"></div>
  <div class="container relative z-10 px-6 py-24 mx-auto text-center text-white">
    <h2 class="text-4xl md:text-5xl font-bold mb-6">
      Take Your Projects to New Heights
    </h2>
    <p class="max-w-2xl mx-auto text-lg mb-8 text-gray-200">
      Join thousands of professionals who trust us to deliver the best tools and insights.
    </p>
    <button class="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all font-semibold text-lg">
      Start Now
    </button>
  </div>
</section>
`;
  const code3 = `<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-6">
    <div class="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
      <div class="flex justify-center mb-6">
        <div class="p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
      <h3 class="text-2xl font-bold mb-4">Boost Your Productivity</h3>
      <p class="text-gray-600 mb-6">
        Save time and get more done with our intelligent automation tools.
      </p>
      <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition-all">
        Try It Free
      </button>
    </div>
  </div>
</section>
`;
  const code4 = `<section class="bg-white py-20">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div>
      <h2 class="text-4xl font-bold mb-6">
        Build Smarter, Launch Faster
      </h2>
      <p class="text-gray-600 mb-8">
        Our platform empowers you with the tools to create, test, and launch your ideas with speed and precision.
      </p>
      <button class="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all">
        Get Started Today
      </button>
    </div>

    <div>
      <img src="https://dummyimage.com/600x400" alt="Illustration" class="rounded-2xl shadow-lg" />
    </div>

  </div>
</section>
`;
  return (
    <>
      <ComponentHighlight sourceCode={code} title="CTA Components" />
      <ComponentHighlight sourceCode={code1} title="" />
      <ComponentHighlight sourceCode={code2} title="" />
      <ComponentHighlight sourceCode={code3} title="" />
      <ComponentHighlight sourceCode={code4} title="" />
    </>
  );
};

export default CTA;
