import Blogcard from "./Blogcard"




const data=[

    {
        img:"/post__1.webp",
        title:"healthy food healthy life",
        date:"aug 25, 2024",
        coment:1
    },
    {
        img:"/post__2.webp",
        title:"healthy food healthy life",
        date:"aug 25, 2024",
        coment:1
    },

    {
        img:"/post__3.webp",
        title:"healthy food healthy life",
        date:"aug 25, 2024",
        coment:1
    },
]

const Blogpost = () => {
  return (
    <div className="container pt-16">
        <h3 className="font-medium text-2xl">Latest News </h3>
        <p className="text-gray-500">present post in a best way to highlight intaresting momment of your blog</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">

           {data.map((el)=> <Blogcard title={el.title} key={el.date} date={el.date} img={el.img} comment={el.coment}/>)}

        </div>
      
    </div>
  )
}

export default Blogpost
