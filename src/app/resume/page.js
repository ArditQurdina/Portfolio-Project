"use client"

import style from "../style";
import { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

const Resume = () => {
    const [activeSection, setActiveSection] = useState("experience");

    // const [showExperience, setShowExperience] = useState(false);
    // const [showEducation, setShowEducation] = useState(false);
    // const [showSkills, SetshowEduction] = useState(false);


    const ShowSection = (section) => {
        setActiveSection(section)
    }
    return ( 
        <div>
            <div className="flex">
                <div className="mr-[80px]">
                    <div className={`${style.whiteColor} mb-[30px] text-5xl w-[320px]`}>Why hire me?</div>
                    <div className="text-gray-400 w-[300px] mb-[30px]">Motivated Junior Front-End Developer focused on creating engaging and responsive web interfaces, user-centered designs and dedicated to continuous improvement</div>
                    <div className={`${style.whiteColor}`}>
                        <div onClick={() => ShowSection('experience')} className={`${style.resumeElements} ${activeSection === "experience" && style.resumeSectionsColorBg}`}>Experience</div>
                        <div onClick={() => ShowSection('education')} className={`${style.resumeElements} ${activeSection === "education" && style.resumeSectionsColorBg}`}>Education</div>
                        <div onClick={() => ShowSection('skills')} className={`${style.resumeElements} ${activeSection === "skills" && style.resumeSectionsColorBg}`}>Skills</div>
                        <div onClick={() => ShowSection('about me')} className={`${style.resumeElements} ${activeSection === "about me" && style.resumeSectionsColorBg}`}>About me</div>
                    </div>
                </div>
                {activeSection === "experience" && (
                <div className="">
                    <div className={`${style.whiteColor} text-3xl mb-[30px]`}>My Experience</div>
                    <div className="text-gray-400 mb-[30px]">I have worked on a range of projects, starting with basic web development tasks and gradually taking on more complex challenges, all while collaborating with teams to deliver quality results!</div>
                    <div className="grid grid-cols-2 gap-8 overflo h-[340px] custom-scrollbar">
                        <div className={`${style.ExperienceParentElement}`}>
                            <div className={`text-green-400 mb-2`}>Jun 2022 - Present</div>
                            <div className={`${style.whiteColor} text-lg mb-4`}>Junior Frontend Developer</div>
                            <div className="text-gray-400">Worki</div>
                        </div>
                        <div className={`${style.ExperienceParentElement}`}>
                            <div className={`text-green-400 mb-2`}>Jan 2022 - Apr 2022</div>
                            <div className={`${style.whiteColor} text-lg mb-4`}>Frontend Developer Intern</div>
                            <div className="text-gray-400">Logistics Plus LLC</div>
                        </div>
                        <div className={`${style.ExperienceParentElement}`}>
                            <div className={`text-green-400 mb-2`}>Jan 2020 - Mar 2020</div>
                            <div className={`${style.whiteColor} text-lg mb-4`}>Traffic Enginner Intern</div>
                            <div className="text-gray-400">Vehicle Technical Inspection Nesim Bakija</div>
                        </div>
                        <div className={`${style.ExperienceParentElement}`}>
                            <div className={`text-green-400 mb-2`}>Dec 2019 - Jan 2020</div>
                            <div className={`${style.whiteColor} text-lg mb-4`}>Traffic Enginner Intern</div>
                            <div className="text-gray-400">Vehicle Technical Inspection Nesim Bakija</div>
                        </div>
                    </div>
                </div>
                )}
                {activeSection === "education" && (
                <div className="">
                    <div className={`${style.whiteColor} text-3xl mb-[30px]`}>My Education</div>
                    <div className="text-gray-400 w-[300px] mb-[30px]">Here is an overview of my education.</div>
                    <div className="grid grid-cols-2 gap-8 overflo custom-scrollbar">
                        <div className={`${style.ExperienceParentElement}`}>
                            <div className={`text-green-400 mb-2`}>Oct 2015 - Jul 2020</div>
                            <div className={`${style.whiteColor} text-lg mb-4`}>Bachelor of Mechanical Engineering</div>
                            <div className="text-gray-400">University of Prishtina</div>
                        </div>
                    </div>
                </div>
                )}
                {activeSection === "skills" && 
                <div className="">
                    <div className={`${style.whiteColor} text-3xl mb-[30px]`}>My Skills</div>
                    <div className="text-gray-400 w-[500px] mb-[30px]">There are some programming languages ​​and frameworks that I know and I use them and they are:</div>
                    <div className="grid grid-cols-4 gap-8 overflo custom-scrollbar">
                        <div className={`${style.skillsParentElement}`} title="HTML5">
                            <FaHtml5 className={`${style.whiteColor} ${style.HoverTextGreen}`} size={50} />
                        </div>
                        <div className={`${style.skillsParentElement}`} title="CSS3">
                            <FaCss3 className={`${style.whiteColor} ${style.HoverTextGreen}`} size={50} />
                        </div>
                        <div className={`${style.skillsParentElement}`} title="Tailwind CSS">
                            <RiTailwindCssFill className={`${style.whiteColor} ${style.HoverTextGreen}`} size={50} />
                        </div>
                        <div className={`${style.skillsParentElement}`} title="Javascript">
                            <IoLogoJavascript className={`${style.whiteColor} ${style.HoverTextGreen}`} size={50} />
                        </div>
                        <div className={`${style.skillsParentElement}`} title="React.js">
                            <FaReact className={`${style.whiteColor} ${style.HoverTextGreen}`} size={50} />
                        </div>
                        <div className={`${style.skillsParentElement}`} title="Next.js">
                            <RiNextjsLine className={`${style.whiteColor} ${style.HoverTextGreen}`} size={50} />
                        </div>
                        <div className={`${style.skillsParentElement}`} title="Python">
                            <FaPython className={`${style.whiteColor} ${style.HoverTextGreen}`} size={50} />
                        </div>
                        <div className={`${style.skillsParentElement}`} title="Django.py">
                            <SiDjango className={`${style.whiteColor} ${style.HoverTextGreen}`} size={50} />
                        </div>

                    </div>
                </div>
            
                }
                {activeSection === "about me" && (
                <div className="">
                    <div className={`${style.whiteColor} text-3xl mb-[30px]`}>About me</div>
                    <div className="text-gray-400 w-[320px] mb-[30px]">Here are some of my personal details!</div>
                {/* <div className="grid grid-cols-2 gap-y-8 overflow-auto max-h-[400px] custom-scrollbar max-w-[500px]"> */}
                    <div className="grid grid-cols-2 gap-y-8 max-h-[400px] custom-scrollbar max-w-[500px]">
                        <div className={`${style.textGray} w-max`}>Name: <span className={`${style.whiteColor}`}>Ardit Qurdina</span></div>
                        <div className={`${style.textGray} w-max`}>Phone: <span className={`${style.whiteColor}`}> (+383) 45 359 970</span></div>
                        <div className={`${style.textGray} w-max`}>Date of Birth: <span className={`${style.whiteColor}`}>15.11.1995</span></div>
                        <div className={`${style.textGray}  w-max`}>Email: <span className={`${style.whiteColor}`}>ardit.qurdina@gmail.com</span></div>
                        <div className={`${style.textGray}  w-max`}>Experience: <span className={`${style.whiteColor}`}>2+ years</span></div>
                        <div className={`${style.textGray}  w-max`}>Address: <span className={`${style.whiteColor}`}>Sadik Stavileci, nr. 149, Gjakove, Kosove</span></div>
                        <div className={`${style.textGray}  w-max`}>Nationality: <span className={`${style.whiteColor}`}>Albanian</span></div>
                        <div className={`${style.textGray}  w-max`}>Languages: <span className={`${style.whiteColor}`}>Albanian, English</span></div>
                    </div>
                </div>
                )}

            </div>
        </div>
     );
}
 
export default Resume;