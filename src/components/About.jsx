const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto p-4 md:p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        </div>
        <div className="text-lg md:text-xl leading-8">
          <p className="mb-4">
            👋 I'm Oluwafisayo, a passionate frontend developer with a love for
            creating engaging and user-friendly web experiences. With a keen eye
            for design and a knack for turning ideas into reality, I thrive on
            bringing digital concepts to life.
          </p>

          <h2 className="text-xl font-bold border-b-4 border-gray-500 mb-2 md:mb-4">
            Who Am I?
          </h2>
          <p className="mb-4">
            I am more than just a coder; I am a storyteller through code. My
            journey into the world of frontend development began 2 years ago,
            and since then, I've been on an exciting quest to explore the
            ever-evolving landscape of web technologies.
          </p>

          <h2 className="text-xl font-bold border-b-4 border-gray-500 mb-2 md:mb-4">
            What I Do?
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Coding Magic ✨</h3>
            <p>
              My primary focus is turning innovative ideas into functional and
              visually stunning websites. Whether it's crafting pixel-perfect
              layouts or implementing seamless interactions, I take pride in
              writing clean, efficient, and scalable code.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">User-Centric Design 🎨</h3>
            <p>
              User experience is at the heart of what I do. I believe in
              creating interfaces that not only look good but also feel
              intuitive. Through a combination of design principles and
              technical expertise, I strive to make the web a more accessible
              and enjoyable place for everyone.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Tech Stack 🛠️</h3>
            <ul>
              <li>Languages: HTML, CSS, JavaScript (ES6+)</li>
              <li>Frameworks/Libraries: React</li>
              <li>Tools: Git, Webpack, Babel</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold border-b-4 border-gray-500 mb-2 md:mb-4">
            Why Work With Me?
          </h2>
          <ul className="mb-4">
            <li>
              <h3 className="text-xl font-bold mb-2">
                Passion for Excellence:
              </h3>
              I approach every project with a dedication to excellence, ensuring
              that the end result not only meets but exceeds expectations.
            </li>
            <li>
              <h3 className="text-xl font-bold mb-2">Adaptability:</h3>
              The tech world is ever-changing, and I love keeping up with the
              latest trends and technologies. I am adaptable and always ready to
              embrace new challenges.
            </li>
            <li>
              <h3 className="text-xl font-bold mb-2">Collaborative Spirit:</h3>I
              thrive in collaborative environments. Working closely with
              designers, backend developers, and stakeholders is where I find
              synergy and bring ideas to life.
            </li>
          </ul>

          <h2 className="text-xl font-bold border-b-4 border-gray-500 mb-2 md:mb-4">
            Let's Connect!
          </h2>
          <p className="mb-4">
            I'm always open to new opportunities, collaborations, and
            interesting projects. Whether you have a specific project in mind or
            just want to chat about the latest in web development, feel free to{" "}
            <span className="text-blue-500">contact me</span> – I'd love to hear
            from you! Let's build something amazing together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
