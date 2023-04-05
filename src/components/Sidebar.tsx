import logo from "../assets/logo.svg";
import { sidebarData } from "../assets/data";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="flex-[0.10] h-screen bg-primaryLight flex items-center flex-col justify-between pb-8">
      <div className="flex flex-col items-center w-full space-y-4 py-8 bg-[#111111]">
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer w-[75px] h-[75px]"
        />
        <p className="text-primarySidebar text-[13px]">
          {sidebarData.subTitle}
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
        {sidebarData.options.map((op, idx) => (
          <a
            href={`#${op.id}`}
            className="text-primarySidebar cursor-pointer w-full text-center py-4 hover:text-secondary duration-300 transition-all  border-y-[1px] border-y-[#282828]"
            key={idx}
          >
            {op.title}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/tushar-tomar-882708213/"
          target="_blank"
          className="text-[#909096] hover:text-secondary transition-all duration-150"
          rel="noreferrer"
        >
          <FaLinkedinIn size={25} />
        </a>
        <a
          href="https://www.instagram.com/t.u.s.h.a.r0_0/"
          target="_blank"
          className="text-[#909096] hover:text-secondary transition-all duration-150"
          rel="noreferrer"
        >
          <AiFillInstagram size={25} />
        </a>
        <a
          href="https://github.com/brogrammer07"
          target="_blank"
          className="text-[#909096] hover:text-secondary transition-all duration-150"
          rel="noreferrer"
        >
          <AiFillGithub size={25} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
