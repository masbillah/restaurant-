import { BsArrowRight } from "react-icons/bs"


const Hero = () => {
  return (
    <div className="container pt-8">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
                <img className="w-full h-full object-cover rounded-lg" src="/hero__1.webp" alt="hero image" />
                <div className="absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                    <p className="text-2xl hidden sm:block"> 100% original dry fruits</p>
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">Dried Fruits Qulity</h2>
                    <p className="text-gray-500 text-xl pt-4 sm:pt-8 ">Starting At</p>
                    <div className="font-medium text-red-500 text-2xl sm:text-4xl sm:pb-8 pb-4">$18.36</div>

                    <div className="bg-green-500 w-fit py-4 hover:bg-accent cursor-pointer rounded-full items-center px-4 gap-4 sm:px-6 sm:py-3 flex">Shop now <BsArrowRight/></div>
                </div>
            </div>
            <div className="relative">
                <img className="w-full h-full rounded-lg object-cover" src="/hero__2.webp" alt="hero image" />

                <div className="absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                    
                    <h2 className="text-[5px] sm:text-2xl md:text-3xl font-bold">Dried Fruits Qulity</h2>
                    <p className="text-gray-500 text-[20px] pt-2 sm:pt-4 ">Starting At</p>
                    <div className="font-medium text-red-500 text-2xl sm:text-3xl sm:pb-8 pb-4">$30.36</div>

                    <div ><button className="bg-green-500 w-fit hover:bg-accent cursor-pointer rounded-full items-center px-4 py-4  gap-4 sm:px-6 sm:py-4 flex ">Shop Now <BsArrowRight/></button>  </div>
                </div>
            </div>

            <div className="relative">
                <img className="w-full h-full rounded-lg object-cover" src="/hero__3.webp" alt="hero image" />

                <div className="absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                    
                    <h2 className="text-[5px] sm:text-2xl md:text-3xl font-bold">Dried Fruits Qulity</h2>
                    <p className="text-gray-500 text-[20px] pt-2 sm:pt-4 ">Starting At</p>
                    <div className="font-medium text-red-500 text-2xl sm:text-3xl sm:pb-8 pb-4">$10.36</div>

                    <div ><button className="bg-green-500 w-fit hover:bg-accent cursor-pointer rounded-full items-center px-4 py-4  gap-4 sm:px-6 sm:py-4 flex ">Shop Now <BsArrowRight/></button>  </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Hero
