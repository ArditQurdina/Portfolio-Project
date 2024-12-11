import { FaPhoneAlt } from "react-icons/fa";
import style from "../style";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return ( 
        <div className="">
            <div className="w-fit">
            <div className="flex items-start w-fit pb-10">
                <div className={`${style.contact} p-2 mr-6`} title="Phone number">
                    <FaPhoneAlt className="text-green-400" size={20} />
                </div>
                <div>
                    <div className="text-gray-400">Phone</div>
                    <div>+383 45 359 970</div>
                </div>
            </div>
            <div className="flex items-center w-fit pb-10">
                <div className={`${style.contact} p-2 mr-6`} title="Email">
                    <MdEmail className="text-green-400" size={20} />
                </div>
                <div>
                    <div className="text-gray-400">Email</div>
                    <div>ardit.qurdina@gmail.com</div>
                </div>
            </div>
            <div className="flex items-center w-fit">
                <div className={`${style.contact} p-2 mr-6`} title="Phone number">
                    <FaMapMarkerAlt className="text-green-400 text-green" size={20} />
                </div>
                <div>
                    <div className="text-gray-400">Address</div>
                    <div>Sadik Stavileci, nr. 149, Gjakove, Kosove</div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Contact;