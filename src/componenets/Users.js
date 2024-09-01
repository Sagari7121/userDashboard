import User from "./User";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFlip,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import './Users.css'

const error = {
  variant: "error",
  autoHideDuration: 5000,
};
export default function Users() {
  const [usersData, setUsersData] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsersData(response.data);
      } catch (err) {
        enqueueSnackbar("Something went wrong. Please reload the page", error);
      } 
    };
    fetchData();
  }, []);

  return (
    <main>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectFlip]}
        loop='true'
        breakpoints={{
          250: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
            spaceBetween:20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween:20,
          },
          1200:{
            slidesPerView:4,
            spaceBetween:20
          }
        }}
      >
        {usersData.length>0 &&
          usersData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <User key={item.id} user={item}/>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </main>
  );
}
