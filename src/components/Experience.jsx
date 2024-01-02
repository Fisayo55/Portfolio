import css from "../assets/css.png";
import HTML from "../assets/html.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import reactHtml from "../assets/react.png";
import styledcomponents from "../assets/styledcomponents.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {
  const techStack = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },

    {
      id: 4,
      src: reactHtml,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: styledcomponents,
      title: "Styled-Components",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}
            >
              <img
                src={tech.src}
                alt={tech.title}
                className="w-16 sm:w-20 mx-auto"
              />
              <p className="mt-2 sm:mt-4 text-sm sm:text-base">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
