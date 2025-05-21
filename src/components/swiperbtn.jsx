import { useSwiper } from "swiper/react";

const Swiperbtn = () => {
  const swiperRef = useSwiper();
  return (
    <>
      <div>
        <button onClick={() => swiperRef.slidePrev()}>Prev</button>
        <button onClick={() => swiperRef.slideNext()}>Next</button>
      </div>
    </>
  );
};

export default Swiperbtn;
