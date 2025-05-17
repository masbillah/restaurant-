import { LuMailOpen } from "react-icons/lu"


const Newsletter = () => {
  return (
    <div className="bg-accentDarrk pt-16">
        <div className=" container py-8 flex flex-col md:flex-row justify-evenly items-center gap-4 text-white" >
            <div className="flex flex-shrink-0 items-center gap-4">
                <LuMailOpen className="text-[60px]"/>
                <div >
                    <h3 className="text-xl sm:text-2xl font-semibold" >
                        Singh up to our Newsletter 
                    </h3>
                    <p>...and receive $50 coupon for frist shopping</p>
                </div>
            </div>
            <div className=" w-[500px] mx-w-[500px] relative">
                <input type="text" placeholder="Email Adddress" className="py-4 px-12 w-full rounded-full" />

                <button className="bg-accentDarrk py-2 px-5 rounded-full absolute top-[15%] right-3">Subscribe</button>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
