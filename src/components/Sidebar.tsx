import logo from "../assets/logo.svg";
import { sidebarData } from "../assets/data";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="flex-[0.10] h-screen bg-primaryLight flex items-center flex-col justify-between pb-8">
      <a
        href=""
        className="flex flex-col items-center w-full space-y-4 py-8 bg-[#111111]"
      >
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer w-[75px] h-[75px]"
        />
        <p className="text-primaryLight text-[13px]">{sidebarData.subTitle}</p>
      </a>
      <div className="flex flex-col items-center w-full">
        {sidebarData.options.map((op, idx) => (
          <a
            href={`#${op.id}`}
            className="text-primaryLight cursor-pointer w-full text-center py-4 hover:text-secondary duration-300 transition-all  border-y-[1px] border-y-[#282828]"
            key={idx}
          >
            {op.title}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a
          href={sidebarData.links.find((arr) => arr.type === "linkedin")?.link}
          target="_blank"
          className="text-primaryLight hover:text-secondary transition-all duration-150"
          rel="noreferrer"
        >
          <FaLinkedinIn size={25} />
        </a>
        <a
          href={sidebarData.links.find((arr) => arr.type === "instagram")?.link}
          target="_blank"
          className="text-primaryLight hover:text-secondary transition-all duration-150"
          rel="noreferrer"
        >
          <AiFillInstagram size={25} />
        </a>
        <a
          href={sidebarData.links.find((arr) => arr.type === "github")?.link}
          target="_blank"
          className="text-primaryLight hover:text-secondary transition-all duration-150"
          rel="noreferrer"
        >
          <AiFillGithub size={25} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
