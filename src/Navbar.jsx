import ytLogo from "./assets/yt-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="h-14 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-6 mx-4 sm:mx-1">
        <div className="hidden sm:block">
            <RxHamburgerMenu size={'1.2em'}/>
        </div>
        <img className="w-28" src={ytLogo} alt="" />
      </div>
      <div className="flex items-center border rounded-full overflow-hidden">
        <input className="w-96 p-2 pl-4 border-r focus-within:outline-0" type="text" placeholder="Search"/>
        <span className="inline-block m-0 py-2 px-6 cursor-pointer hover:bg-gray-100">
          <FiSearch size={'1.2em'} />
        </span>
      </div>
      <div className="flex items-center gap-6 mx-4">
        <BsBellFill size={'1.2em'}/>
        <FaRegUserCircle size={'2em'}/>
      </div>
    </div>
  );
}

export default Navbar;
