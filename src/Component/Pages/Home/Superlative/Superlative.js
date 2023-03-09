import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import './Superlative.css'

import superlative1 from '../../../../Images/superlative1.png'
import superlative2 from '../../../../Images/superlative2.png'
import superlative3 from '../../../../Images/superlative3.png'
import superlative4 from '../../../../Images/Intensive.png'

// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Superlative = () => {
    const superlativeData = [
        {
            img: superlative3,
            prev: 7,
            id: 1,
            next: 2,
            text: "Rozu Parfum",
            btn: "Both Bruzen and delicate"

        },
        {
            img: superlative3,
            prev: 1,
            id: 2,
            next: 3,
            text: "Aesop and rick",
            btn: "Fragrant for journey"

        },
        {
            img: superlative4,
            prev: 2,
            id: 3,
            next: 4,
            text: "Sublime night masque",
            btn: "Balances of the skin"

        },
        {
            img: superlative3,
            prev: 3,
            id: 4,
            next: 5,
            text: "Rozu Parfum",
            btn: "Both Bruzen and delicate"

        },
        {
            img: superlative4,
            prev: 4,
            id: 5,
            next: 6,
            text: "Aesop and rick",
            btn: "Fragrant for journey"

        },
        {
            img: superlative3,
            prev: 5,
            id: 6,
            next: 7,
            text: "Sublime night masque",
            btn: "Balances of the skin"

        },

        {
            img: superlative3,
            prev: 6,
            id: 7,
            next: 1,
            text: "Aesop and rick",
            btn: "Fragrant for journey"

        }


    ]
    return (
        <>  
            <div>
                <h1 className="text-secondary text-4xl mb-24 ml-20">A superlative selection</h1>
            </div>
            <Swiper
                
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                // grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation]}
                className="mySwiper"
            >
                {
                    superlativeData.map(data =>
                        <SwiperSlide>
                            <div>
                                <img src={data.img} alt='' />

                            </div>
                            <div className="text-center text-secondary my-6">
                                <p className="hover:underline font-bold">{data.text}</p>
                                <p className="mb-2">{data.btn}</p>
                            </div>

                        </SwiperSlide>
                    )
                }

            </Swiper>
        </>
    );
}
export default Superlative;