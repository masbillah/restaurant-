import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import Cartconcaitbag from "./Cartconcaitbag";

const Navber = () => {
  return (
    <div className="container hidden lg:block">
     <div className=" flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>
        <div className="relative w-full max-w-[500px]">
            <input type="text"  placeholder="search product" className="outline-none border-none
            bg-[#d9dbdd] rounded-[30px] w-full px-6 py-3
            "/>

   <IoIosSearch className="top-0 absolute right-0 mt-4 mr-4 text-gray-500 " size={20} />

        </div>
<div className="flex gap-4 ">
    <div className="icon_wraper">
    <FaRegUser />
    </div>
    <div className="icon_wraper relative">
    <CiShoppingCart />

    <Cartconcaitbag />

    </div>
</div>
        
     </div>
    </div>
  )
}

export default Navber
