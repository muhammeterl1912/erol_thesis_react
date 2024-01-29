import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {sliderHandle} from "@/redux/reducers/sliderSlice";

export default function Slider() {

    const dispatch = useDispatch();
    const { sliders } = useSelector(state => state.slider);

    useEffect(()=>{
        dispatch(sliderHandle());
    }, []);

    console.log(sliders);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {
            sliders?.map(slider => (
                <SwiperSlide key={slider.id}>
                    <img src={slider.image} className="w-full h-[600px] object-cover" />
                    <div className="absolute top-16 left-16">
                        <h3 className="font-bold text-4xl">{slider.title}</h3>
                        <p className="text-2xl">{slider.description}</p>
                    </div>
                </SwiperSlide>
            ))
        }

    </Swiper>
  );
}
