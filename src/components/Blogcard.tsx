interface propsType{
    img:string;
    title:string;
    coment:string;
    date:string
}

const Blogcard:React.FC<propsType> = ({img, title, date, coment}) => {
  return (
    <div className="space-y-4">
        <img className="rounded-lg scale-105 transition-transform" src={img} alt="post" />
      <div className="text-accent font-medium ">
        <span className="">{date}</span>
        <span>{coment}</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default Blogcard
