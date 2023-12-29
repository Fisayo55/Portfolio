import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="Home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Frontend Developer
          </h2>
          <p className="text-gray-500 py-4">
            Greetings! I'm Adeyekun Oluwafisayo, an enthusiastic front-end
            developer with a keen eye for crafting captivating and user-centric
            web experiences. Proficient in HTML, CSS, JavaScript , TailwindCSS
            and ReactJS, I specialize in transforming design concepts into
            polished, intuitive interfaces. My journey in front-end development
            has been marked by a dedication to staying at the forefront of
            evolving technologies and implementing industry best practices. I
            revel in the art of translating ideas into dynamic and seamless
            websites, and I'm always eager to tackle novel challenges that push
            the boundaries of web development. Let's collaborate and bring
            exceptional digital experiences to life!
          </p>
          <div>
            <button className=" group text-white w-fit flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 my-2 cursor-pointer">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
