import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const Projects = () => {
  return(
      <section
          id="projects"
          className="min-h-screen flex items-center justify-center py-20"
      >
          <RevealOnScroll>
          <div className=" max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent text-center">
                  {" "}
                  Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition-all">
                      <h3 className="text-xl font-bold mb-2">Movie Ticket Booking System</h3>
                      <p className="text-gray-400 mb-4">
                          A web-based Movie Ticket Booking System built with Yii2 (PHP).
                          It allows users to browse movies, check seat availability,
                          and book tickets online, while admins manage theaters, movies,
                          and reservations.
                      </p>
                      <div>
                          {["Yii2","PHP","HTML","CSS","Javascript","MySQL"].map((tech,key) => (
                              <span
                                  key={key}
                                  className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                              >
                                        {tech}
                                    </span>
                              ))}
                      </div>
                      <div>
                          <a
                              href="https://github.com/MCsomm/Movie-Ticket-Buying"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-4 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
                          >
                              View Project
                          </a>
                      </div>
                  </div>
                  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition-all">
                      <h3 className="text-xl font-bold mb-2">Movie Finder App</h3>
                      <p className="text-gray-400 mb-4">
                          The Movie Finder App lets users search for movies and view trending titles using the TMDB API.
                          Built with React, it displays movie details and tracks search activity.
                      </p>
                      <div>
                          {["React","HTML","JS(Fetch API)","TailwindCSS"].map((tech,key) => (
                              <span
                                  key={key}
                                  className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                              >
                                        {tech}
                                    </span>
                          ))}
                      </div>
                      <div>
                          <a
                              href="https://github.com/MCsomm/Movie-Search"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-4 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
                          >
                              View Project
                          </a>
                      </div>
                  </div>
                  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition-all">
                      <h3 className="text-xl font-bold mb-2">Allergy</h3>
                      <p className="text-gray-400 mb-4">
                          This app is set up to give me a simple answer that how big dose of allergy medicine do i need today.
                          It calls API Ambee and OpenWeatherMap than calculates how strong the pollen concentration and how hot the weather is.
                      </p>
                      <div>
                          {["React","HTML","HTML","TailwindCSS","JS(Fetch API)"].map((tech,key) => (
                              <span
                                  key={key}
                                  className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                              >
                                        {tech}
                                    </span>
                          ))}
                      </div>
                      <div>
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-4 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
                          >
                              Under development.
                          </a>
                      </div>
                  </div>
                  {/*<div className="flex-1 flex justify-center items-center">
                      <img
                          src="/PHP.png"
                          alt="Project Screenshot"
                          className="rounded-lg shadow-lg object-cover max-h-70"
                      />
                  </div>*/}

              </div>
          </div>
          </RevealOnScroll>
      </section>
  );
}