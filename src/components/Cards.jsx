const Cards = ({
  image,
  name,
  type,
  content,
  link,
  icon1,
  pic1,
  pic2,
  user,
  icon2,
  icon3,
  txt1,
  txt2,
}) => {
  return (
    <div className="shadow-2xl rounded-2xl  h-full w-full mb-8">
      {image && (
        <img src={image} alt="Img" className="w-full h-[40%] rounded-t-2xl" />
      )}
      <div className="text-[#4c6288] px-5  rat">
        {name && <h2 className="text-2xl font-bold pt-4">{name}</h2>}
        {type && <p className="  font-bold">{type}</p>}
        {content && <p>{content}</p>}
        <a href="#" className="text-white underline underline-offset-4">
          {link}
        </a>
        {icon1 && <span>{icon1}</span>}
        {/* Testimonies */}
        {(pic1 || pic2 || user) && (
          <div className="flex gap-10 items-center text-black pt-16">
            <div className="bg-green-400 rounded-full p-3 font-bold  ">
              {pic1}
            </div>
            <span>
              <h2 className="font-bold">{user}</h2>
              <div className="bg-gray-300  p-1.5  rounded-2xl">{pic2}</div>
            </span>
          </div>
        )}
        {/* ONLY SHOW THIS IF icon2 OR icon3 EXISTS */}
        {(icon2 || icon3) && (
          <div className="flex justify-between mt-5 rat1">
            <span className="bg-gray-300 text-gray-600 rounded-full flex items-center px-4 py-2 gap-2">
              {icon2}
              <p className="">{txt1}</p>
            </span>
            <span className="bg-[#ff5c5c82]  text-[#f74a4a] rounded-full flex items-center px-4 py-2 gap-2">
              {icon3}
              <p className="">{txt2}</p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
