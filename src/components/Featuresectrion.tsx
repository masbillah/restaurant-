import ProductCard from "./ProductCard"



const data =[
    {id:0, img:"product__1.webp", name:"dried mango", price:"$500"},
    {id:1, img:"product__2.webp", name:"Cruncy chips", price:"$500"},
    {id:2, img:"product__3.webp", name:"juail Cabarias", price:"$500"},
    {id:3, img:"product__4.webp", name:"Almond organic", price:"$500"},
]


const Featuresectrion = () => {
  return (
    <div className="container pt-16">
        <div className="flex justify-between items-center">
            <div>
                <h3 className="font-medium text-2xl">Fruits & vegetable</h3>
                <p className=" text-gray-500 mt-2">buy farm fresh fruits and vegetable online at the best prise</p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="feature_btn">Fruits</button>
                <button className="text-gray-600 hover:text-accent">vegetables </button>
                <button className="text-gray-600 hover:text-accent">bread and bakery</button>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img className="w-full h-full " src="/feature__2.webp" alt="" />
            </div>

            {data.map((el)=>(<ProductCard key={el.id} name={el.name} price={el.price} img={el.img}/>))}
        </div>
      
    </div>
  )
}

export default Featuresectrion
