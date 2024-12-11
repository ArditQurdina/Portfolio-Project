import Image from "next/image";
import style from "./style";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import DownloadCV from "./downloadComp/donwloadCV";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className={`${style.whiteColor} ${style.contentChildElements}`}>Software Developer</div>
        <div className={`${style.contentChildElements}`}>
          <h1 className={`${style.whiteColor} text-6xl ${style.contentChildElements} tracking-wider font-cursive word-spacing-wider`}>Hello I'm</h1>
          <h1 className="text-green-500 text-6xl mb-8 word-spacing-wider">Ardit Qurdina</h1>
        </div>
        <p className="text-gray-300 mb-8">I'm proficient in various programming languages and technologies.</p>
        <div className="flex items-center">
          <DownloadCV />
          <div className="flex text-green-400 items-center">
            <a href="https://github.com/ArditQurdina/" target="_blank" rel="noopener noreferrer" title="Github">
              <div className="mr-5 rounded-[50%] border border-green-400 p-2">
                  <FaGithub size={15} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ardit-qurdina-43166b239/" target="_blank" rel="noopener noreferrer" title="Linkedin">
              <div className="mr-5 border border-green-400 p-2 rounded-[50%]">
                  <FaLinkedinIn size={15} />
              </div>
            </a>
            <a href="https://www.facebook.com/ardit.qurdina" target="_blank" rel="noopener noreferrer" title="Facebook">
              <div className="mr-5 border border-green-400 p-2 rounded-[50%]">
                <FaFacebookF size={15} />
              </div>
            </a>
            <div className="border border-green-400 p-2 rounded-[50%]">
              <FaTwitter />
            </div>
          </div>
        </div>
        </div>
        <div>
          <Image alt="Ardit Qurdina's Profile Picture" className="rounded-full" src="/images/IMG_4688.jpeg"         
            width={400} 
            height={400}
          />
        </div>
    </div>
  );
}
