import { AiOutlineArrowRight } from "react-icons/ai";
import Main from "./Main";
import MySkills from "./MySkills";
import Work from "./Work";
import { motion } from "framer-motion";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Body = () => {
  return (
    <div className="flex-[0.9] bg-primary h-screen overflow-y-scroll overflow-x-hidden relative scroll-smooth">
      <div className="absolute  bottom-16 -left-9">
        <div className="flex space-x-3 text-white items-center rotate-90  ">
          <motion.p
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            scroll down
          </motion.p>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="absolute  bottom-16 -right-9">
        <div className="flex space-x-3 text-white items-center rotate-90  ">
          <motion.p
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            scroll down
          </motion.p>
          <AiOutlineArrowRight />
        </div>
      </div>

      <div className="flex flex-col w-[95%] mx-auto my-4">
        <h6>&lt;html&gt;</h6>
        <div className="flex flex-col w-[98%] mx-auto">
          <h6>&lt;body&gt;</h6>
          <Main />
          <Projects />
          <About />
          <Work />
          <MySkills />
          <Contact />
          <h6>&lt;/body&gt;</h6>
        </div>
        <h6>&lt;/html&gt;</h6>
      </div>
    </div>
  );
};

export default Body;
