import { useState } from "react";
import CodeHighlighter from "../components/CodeHiglighter";

const Contact = () => {
  const [showCode, setShowCode] = useState<boolean>(false);

  const codeContact = `
         <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>
    
    `;

  return (
    <>
      <h2 className="ml-[1rem] mt-[1.5rem] text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Contact Component Code
      </h2>
      <button
        className={`ml-[1rem] mb-[0.6rem] text-[1rem] rounded-lg hover:cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-[1.4rem] py-[0.4rem] font-bold ${
          showCode
            ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
        } text-white`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowCode((prev) => !prev);
        }}
      >
        {showCode ? "Hide Code" : "Show Code"}
      </button>
      {showCode ? (
        <div className="outline-2 outline-purple-500 outline-offset-2 shadow-2xl rounded-xl">
          <CodeHighlighter
            codeString={codeContact}
            language="html"
            maxHeight="70vh"
            outerMaxWidth="calc(100vw - 18rem)"
            containerPadding="1rem"
          />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl shadow-xl p-8 mx-4">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-8 mx-auto">
              <div className="flex flex-col text-center w-full mb-16">
                <h1 className="sm:text-4xl text-3xl font-bold title-font mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Contact Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700 font-medium">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="leading-7 text-sm font-semibold text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-50 bg-opacity-50 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-all duration-300 ease-in-out hover:border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="leading-7 text-sm font-semibold text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-50 bg-opacity-50 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-all duration-300 ease-in-out hover:border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="leading-7 text-sm font-semibold text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-50 bg-opacity-50 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 h-36 text-base outline-none text-gray-700 py-3 px-4 resize-none leading-6 transition-all duration-300 ease-in-out hover:border-gray-300"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0 py-3 px-12 focus:outline-none focus:ring-4 focus:ring-indigo-200 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Contact;
