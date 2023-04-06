import { useEffect, useRef, useState } from "react";
import bulletPoint from "../assets/bulletPoint.svg";
import { workData } from "../assets/data";
import { motion, useInView } from "framer-motion";
import parse from "html-react-parser";
const Work = () => {
  const [workIndex, setWorkIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(scrollRef);
  useEffect(() => {
    scrollRef?.current?.scrollTo(0, 0);
  }, [workIndex]);

  return (
    <div id="work" className="flex flex-col w-[98%] mx-auto space-y-3 ">
      <h6>&lt;div&gt;</h6>
      <div className="flex flex-col w-[98%] mx-auto space-y-4 relative">
        <div className="absolute z-[1] flex items-center justify-end top-[-30%] text-[rgba(255,255,255,0.04)] right-[-20%] h-full text-[20rem]">
          <p>WORK</p>
        </div>
        <div className="z-[10]">
          <h6>&lt;h2&gt;</h6>
          <div className="flex flex-col w-[98%] mx-auto">
            <div className="flex items-center text-[65px] font-extrabold">
              <>
                {workData.number?.split("").map((letter, idx) => (
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: [1, 1.2, 1],
                      transition: {
                        // type: "spring",
                        stiffness: 300,
                        delay: idx * 0.1,
                      },
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      // color: "#5DECCC",
                      scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                      scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                      transition: {
                        stiffness: 100,
                        damping: 30,
                        duration: 0.5,
                      },
                    }}
                    className="text-white"
                    key={idx}
                  >
                    {letter}
                  </motion.h2>
                ))}
                <p className="w-3"></p>
                {workData.title?.split("").map((letter, idx) => (
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: [1, 1.2, 1],
                      transition: {
                        // type: "spring",
                        stiffness: 300,
                        delay: (idx + 3) * 0.1,
                      },
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      // color: "#5DECCC",
                      scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                      scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                      transition: {
                        stiffness: 100,
                        damping: 30,
                        duration: 0.5,
                      },
                    }}
                    className="text-secondary"
                    key={idx}
                  >
                    {letter == "/" ? parse("<span>&nbsp;</span>") : letter}
                  </motion.h2>
                ))}
              </>
            </div>
          </div>
          <h6>&lt;/h2&gt;</h6>
        </div>
        <div className="space-y-5">
          <h6>&lt;p&gt;</h6>
          <div className=" w-[98%] mx-auto">
            <div className="w-[65%] flex space-x-10">
              <div className="flex-[0.2] border-l-[1px] border-[#012E3D] h-[20rem]">
                {workData.work.map((work, idx) => (
                  <div
                    onClick={() => setWorkIndex(idx)}
                    key={idx}
                    className={`${
                      workIndex === idx
                        ? "border-l-[2px] border-[#5DECCC] bg-[#102340] text-secondary"
                        : "text-primaryLight border-l-[2px] border-transparent"
                    } px-5 py-2 cursor-pointer transition-all duration-150 border-l-[2px]`}
                  >
                    {work.company}
                  </div>
                ))}
              </div>
              <div className="flex-[0.8] flex flex-col space-y-10">
                <div className="space-y-2">
                  <div className=" text-[24px] flex space-x-3">
                    <h3 className="text-white">
                      {workData.work[workIndex].title}
                    </h3>
                    <h3 className="text-secondary">
                      @ {workData.work[workIndex].company}
                    </h3>
                  </div>
                  <p className="text-primaryLight text-[13px]">
                    {workData.work[workIndex].date}
                  </p>
                </div>
                <div
                  ref={scrollRef}
                  className="w-full flex flex-col space-y-5 mt-6 max-h-[14rem] overflow-y-auto scrollbar-thin scrollbar-thumb-[#08fdd8] scrollbar-track-transparent"
                >
                  {workData.work[workIndex].description.map((desc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ translateX: "-10%", opacity: 0 }}
                      whileInView={{
                        translateX: "0",
                        opacity: 1,
                        transition: {
                          delay: idx * 0.1,
                          duration: 1,
                        },
                      }}
                      viewport={{ once: true }}
                      className="flex space-x-6"
                    >
                      <img className="" src={bulletPoint} alt="" />
                      <p className="text-white font-[100] text-[15px]">
                        {desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h6>&lt;/p&gt;</h6>
        </div>
      </div>
      <h6>&lt;/div&gt;</h6>
    </div>
  );
};

export default Work;
