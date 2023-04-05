import React, { useEffect, useState } from "react";
import { mainData } from "../assets/data";
import { motion } from "framer-motion";
const Main = () => {
  const [firstLine, setFirstLine] = useState<string[]>();
  const [secondLine, setSecondLine] = useState<string[]>();
  const [thirdLine, setThirdLine] = useState<string[]>();
  useEffect(() => {
    let temp1 = [...mainData.firstLine];
    console.log(temp1);
    setFirstLine(temp1);
    let temp2 = [...mainData.secondLine];
    setSecondLine(temp2);
    let temp3 = [...mainData.thirdLine];
    setThirdLine(temp3);
  }, []);

  return (
    <div className="flex flex-col w-[98%] mx-auto h-screen mt-10 ">
      <div className="my-1">
        <h6>&lt;h1&gt;</h6>
        <div className="flex flex-col w-[98%] mx-auto">
          <div className="flex text-[85px] leading-[5rem] tracking-tight font-[900] text-white">
            {firstLine?.map((letter, idx) => (
              <motion.h1
                whileHover={{
                  color: "#5DECCC",
                  scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                  scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                  transition: {
                    stiffness: 100,
                    damping: 30,
                    duration: 0.5,
                  },
                }}
                className=""
                key={idx}
              >
                {letter}
              </motion.h1>
            ))}
          </div>
          <div className="flex text-[85px] leading-[5rem] tracking-tight font-[900] text-white ">
            {secondLine?.map((letter, idx) => (
              <>
                {letter === "-" ? (
                  <h1 className="" key={idx}>
                    &nbsp;
                  </h1>
                ) : (
                  <motion.h1
                    style={
                      letter === "T"
                        ? {
                            textShadow: "-10px 0px 5px #04fcd8",
                            color: "#fd2155",
                          }
                        : {}
                    }
                    whileHover={{
                      color: letter === "T" ? "#fd2155" : "#5DECCC",
                      scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                      scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                    }}
                    transition={{
                      stiffness: 500,
                      damping: 30,
                      duration: 0.5,
                    }}
                    className=""
                    key={idx}
                  >
                    {letter}
                  </motion.h1>
                )}
              </>
            ))}
          </div>
          <div className="flex text-[85px] leading-[7rem] tracking-tight font-[900] text-white">
            {thirdLine?.map((letter, idx) => (
              <>
                {letter === "-" ? (
                  <h1 className="" key={idx}>
                    &nbsp;
                  </h1>
                ) : (
                  <motion.h1
                    whileHover={{
                      color: "#5DECCC",
                      scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                      scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                    }}
                    transition={{
                      stiffness: 500,
                      damping: 30,
                      duration: 0.5,
                    }}
                    className=""
                    key={idx}
                  >
                    {letter}
                  </motion.h1>
                )}
              </>
            ))}
          </div>
        </div>
        <h6>&lt;/h1&gt;</h6>
      </div>
      <div className="my-1">
        <h6>&lt;p&gt;</h6>
        <div className="flex flex-col w-[98%] mx-auto">
          <h1 className="text-primarySidebar text-[20px] tracking-[0.2rem]">
            {mainData.subHeading}
          </h1>
        </div>
        <h6>&lt;/p&gt;</h6>
      </div>
      <div className="ml-[30px] mt-10 ">
        <button className="buttonFlow">Contact me!</button>
      </div>
    </div>
  );
};

export default Main;
