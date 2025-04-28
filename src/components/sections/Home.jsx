import {RevealOnScroll} from "../RevealOnScroll.jsx";


export const Home = () => {
  return(
      <section
          id={"home"}
          className="min-h-screen flex items-center justify-center relative"
      >
          <RevealOnScroll>
          <div className="text-center z-10 px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-indigo-700
               bg-clip-text text-transparent  leading-tight md:leading-normal">
                  Mészáros Csongor
              </h1>
              <p className= " text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                  I’m a web developer with a recent focus on React and Tailwind CSS.
                  Passionate about creating dynamic web applications,
                  I’m eager to expand my skills and explore new technologies.
              </p>
              <div className="flex justify-center space-x-4">
                  <a href="#projects" className="bg-red-500 text-white py-3 px-6 rounded
                   transition relative overflow-hidden hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                      View Projects
                  </a>
                  <a href="#contact" className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200
                     hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:bg-red-500/10">
                      Contact Me
                  </a>
              </div>
          </div>
          </RevealOnScroll>
     </section>
  );
}