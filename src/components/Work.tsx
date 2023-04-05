import { useEffect, useRef, useState } from "react";
import bulletPoint from "../assets/bulletPoint.svg";
import { workData } from "../assets/data";
import { motion, useInView } from "framer-motion";
const Work = () => {
  const [workIndex, setWorkIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(scrollRef);
  useEffect(() => {
    scrollRef?.current?.scrollTo(0, 0);
  }, [workIndex]);

  return (
    <div className="flex flex-col w-[98%] mx-auto space-y-3 ">
      <h6>&lt;div&gt;</h6>
      <div className="flex flex-col w-[98%] mx-auto space-y-4">
        <div className="">
          <h6>&lt;h2&gt;</h6>
          <div className="flex flex-col w-[98%] mx-auto">
            <motion.div
              initial={{ opacity: 0, translateX: "-10%" }}
              whileInView={{
                opacity: 1,
                translateX: "0",
                transition: { duration: 0.5 },
              }}
              className="flex items-center space-x-3 text-[40px] font-extrabold"
            >
              <h2 className="text-white  ">{workData.number}</h2>
              <h2 className="text-secondary  ">{workData.title}</h2>
              <div className="bg-[#012E3D] w-[20rem] h-[1px]"></div>
            </motion.div>
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
                        : "text-primarySidebar border-l-[2px] border-transparent"
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
                  <p className="text-primarySidebar text-[13px]">
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
                      animate={{
                        translateX: isInView ? "0" : "-10%",
                        opacity: isInView ? 1 : 0,
                        transition: {
                          delay: idx * 0.1,
                          duration: 1,
                        },
                      }}
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
