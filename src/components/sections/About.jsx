import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = ["React", "TypeScript", "Expo", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"];
  const backendSkills = ["Node.js", "MongoDB", "MySQL", "Express", "JSON", "PHP"];
  const toolSkills = ["VSCode", "Powershell", "Emmet", "Vim", "TMUX", "Bash", "Git", "Github", "Virtual Box"]
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a passionate developer in Buckeye Arizona who is mainly
              proficient in coding using JavaScript.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent text-center">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent text-center">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent text-center">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 ">
              <h3 className="text-xl font-bold mb-4 text-blue-600 float-center flex justify-center">
                Education
              </h3>
              <div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                  <li className="flex justify-center">
                    West-MEC Central Campus (2023-2025)
                  </li>
                  <li className="flex justify-center">
                    Relevant Coursework: Data Structures, Web Development
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at ABC Corp (2020 - Present)
                  </h4>
                  <p>Developed and maintained microservices</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Intern at DEF Startups (2019)
                  </h4>
                  <p>Assisted in building front-end components</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
