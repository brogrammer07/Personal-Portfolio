import { mySkillsData } from "../assets/data";
import SkillsProgressBar from "../utils/SkillsProgressBar";
import TagSphere from "../utils/TagSphere";
import { motion } from "framer-motion";

const MySkills = () => {
  return (
    <div id="skill" className="grid grid-cols-2 pr-16">
      <div className="flex flex-col w-[98%] mx-auto space-y-3 self-center">
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
                <h2 className="text-white">{mySkillsData.number}</h2>
                <h2 className="text-secondary">{mySkillsData.title}</h2>
                <div className="bg-[#012E3D] w-[14rem] h-[1px]"></div>
              </motion.div>
            </div>
            <h6>&lt;/h2&gt;</h6>
          </div>
          <div className="">
            <h6>&lt;p&gt;</h6>
            <div className="flex flex-col w-[98%] mx-auto space-y-7">
              {mySkillsData.skills.map((skill, idx) => (
                <motion.div
                  initial={{ opacity: 0, translateX: "-10%" }}
                  whileInView={{
                    opacity: 1,
                    translateX: "0",
                    transition: { duration: 0.5, delay: idx * 0.2 },
                  }}
                  key={idx}
                  className="flex flex-col space-y-2"
                >
                  <p className="text-white">{skill.skill}</p>
                  <SkillsProgressBar
                    index={idx}
                    color={skill.color}
                    progress={skill.progress}
                  />
                </motion.div>
              ))}
            </div>
            <h6>&lt;/p&gt;</h6>
          </div>
        </div>
        <h6>&lt;/div&gt;</h6>
      </div>
      <div>
        <TagSphere />
      </div>
    </div>
  );
};

export default MySkills;
