import { FiPhoneCall } from "react-icons/fi"
import { LiaGiftSolid, LiaMoneyBillWaveSolid, LiaShippingFastSolid } from "react-icons/lia"
import Fathercard from "./Fathercard"


const data=[
    {
        title:"free shipping",
        icon:<LiaShippingFastSolid/>
    },
    {
        title:"free shipping",
        icon:<LiaMoneyBillWaveSolid/>
    },
    {
        title:"Free curbssid pickup",
        icon:<LiaGiftSolid/>
    },
    {
        title:"support 24/7",
        icon:<FiPhoneCall/>
    },
]

const Fatherseaction = () => {
  return (
    <div className="container pt-16">
        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map(el => <Fathercard key={el.title} title={el.title} icon={el.icon}   /> )}
        </div>
      
    </div>
  )
}

export default Fatherseaction
