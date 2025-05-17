import Catagorycard from "./Catagorycard"

const data=[
    {
        id:0,
        name:"Fresh fruits",
        count:"9 Products",
        img:"/category__1.webp",
    },
    {
        id:1,
        name:"Fresh Vegs",
        count:"8 Products",
        img:"/category__2.webp",
    },
    {
        id:2,
        name:"Canned goods",
        count:"7 Products",
        img:"/category__3.webp",
    },
    {
        id:3,
        name:"breads and bakery",
        count:"6 Products",
        img:"/category__4.webp",
    },
    {
        id:4,
        name:"Fresh Vegs",
        count:"5 Products",
        img:"/category__5.webp",
    },
    {
        id:5,
        name:"Fresh Vegs",
        count:"4 Products",
        img:"/category__6.webp",
    },
    {
        id:6,
        name:"Fresh Vegs",
        count:"3 Products",
        img:"/category__7.webp",
    },
    {
        id:7,
        name:"Fresh Vegs",
        count:"2 Products",
        img:"/category__8.webp",
    },
]

const Catagary = () => {
  return (
    <div className=" container pt-16">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-4">
       {data.map(el => <Catagorycard key={el.id} img={el.img} name={el.name} count={el.count} /> )}
        </div>
      
    </div>
  )
}

export default Catagary
