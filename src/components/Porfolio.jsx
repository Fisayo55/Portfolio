import { useRef } from "react";
import Dictionary from "../assets/portfolio/Dictionary.png";
import expensetracker from "../assets/portfolio/expensetracker.png";
import pizzaorder from "../assets/portfolio/pizzaorder.png";
import reactquiz from "../assets/portfolio/reactquiz.png";
import recipeapp from "../assets/portfolio/recipeapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pizzaorder,
      code: "https://github.com/Fisayo55/Fast-React-pizza/tree/master",
      live: "https://aof-fast-react-app.netlify.app",
    },
    {
      id: 2,
      src: recipeapp,
      code: "https://github.com/Fisayo55/forkify-course-video",
      live: "https://forkify-recipe-fisayo.netlify.app",
    },
    {
      id: 3,
      src: expensetracker,
      code: "https://github.com/Fisayo55/React-Tracking-Expenses/tree/master",
      live: "https://aof-expense-tracker.netlify.app",
    },
    {
      id: 4,
      src: Dictionary,
      code: "https://github.com/Fisayo55/Dictionary/tree/master",
      live: "https://aof-dictionary.netlify.app",
    },
    {
      id: 5,
      src: reactquiz,
      code: "https://github.com/Fisayo55/react-quiz/tree/master",
      live: "https://aof-react-quiz.netlify.app",
    },
  ];

  const linkRef = useRef(null);

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="shadow-md shadow-gray-600 rounded-lg mb-8 cursor-pointer"
              onClick={() => (window.location.href = portfolio.live)}
            >
              <img
                src={portfolio.src}
                alt=""
                className="rounded-md w-full h-auto duration-200 hover:scale-105"
                ref={linkRef}
              />
              <div className="flex items-center justify-center mt-4">
                <button className="w-full px-6 py-3 m-2 duration-200 hover:scale-105">
                  <a
                    href={portfolio.live}
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Demo
                  </a>
                </button>
                <button className="w-full px-6 py-3 m-2 duration-200 hover:scale-105">
                  <a
                    href={portfolio.code}
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
