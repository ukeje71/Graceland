const Cards = (props) => {
  return (
    <>
      <div className=" shadow-2xl  rounded-2xl  bg-gray-200 h-full w-full mb-8">
        <img
          src={props.image}
          alt="Img"
          className="w-full h-[40%] rounded-t-2xl"
        />
        <div className="text-[#4c6288] px-5 ">
          <h2 className="text-3xl font-bold pt-4 ">{props.name}</h2>
          <p className="text-[15px">{props.type}</p>
          <p>{props.content}</p>
          <span>
            {props.icon1}
          </span>
          <div className="flex  justify-between">
            <span className=" text-gray-600  rounded-full px-4 py-3 flex  ">
              {props.icon2} <p>{props.txt1}</p>
            </span>
            <span className=" text-[#FF5C5C] rounded-full px-4 py-3 flex ">
              {props.icon3} <p>{props.txt2}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
//ff5c5c
