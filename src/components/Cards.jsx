const Cards = ({
  image,
  name,
  type,
  content,
  link,
  icon1,
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
        {name && <h2 className="text-3xl font-bold pt-4">{name}</h2>}
        {type && <p className="  font-bold">{type}</p>}
        {content && <p>{content}</p>}
        <a href="#" className="text-white underline underline-offset-4">
          {link}
        </a>
        {icon1 && <span>{icon1}</span>}

        {/* ONLY SHOW THIS IF icon2 OR icon3 EXISTS */}
        {(icon2 || icon3) && (
          <div className="flex justify-between mt-5 rat1">
            <span className="bg-gray-300 text-gray-600 rounded-full flex items-center px-4 py-2 gap-2">
              {icon2}
              <p className="">{txt1}</p>
            </span>
            <span className="bg-[#ff5c5c82] text-[#f74a4a] rounded-full flex items-center px-4 py-2 gap-2">
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
