import { MdFileDownload } from "react-icons/md";
// import style from "../style";

const DownloadCV = () => {
    return (
      <a href="/Ardit-Qurdina-Resume.pdf" download>
        <div className="text-green-400 flex items-center rounded-[30px] border border-green-400 w-fit py-2.5 px-5 hover:bg-green-500 hover:text-black mr-[30px] cursor-pointer">
          <div className=" mr-1">Download CV</div>
          <div className="">
            <MdFileDownload size={20} />
          </div>
        </div>
      </a>
    );
  };
   
export default DownloadCV;