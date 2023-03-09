import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import './Domestic.css'

import domestic1 from '../../../../Images/Domestic1 .png'
import domestic2 from '../../../../Images/Domestic2 .png'
import domestic3 from '../../../../Images/Domestic3.png'
import domestic4 from '../../../../Images/Domestic4.png'
import domestic5 from '../../../../Images/Domestic5.png'


// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";


const Domestic = () => {
    const superlativeData = [
        {
            id: 1,
            p: "For the home",
            h: "Domestic Pleasures",
            pp: "Our range of aromatic formulations for the home are practical and pleasing in equal measure.",
            bt: "See all Home"
        },
        {
            img: domestic1,
            id: 2,
            text: "Rozu Parfum",
            btn: "Both Bruzen and delicate"

        },
        {
            img: domestic1,
            id: 3,
            text: "Aesop and rick",
            btn: "Fragrant for journey"

        },
        {
            img: domestic3,
            id: 4,
            text: "Sublime night masque",
            btn: "Balances of the skin"

        },
        {
            img: domestic3,
            id: 5,
            text: "Rozu Parfum",
            btn: "Both Bruzen and delicate"

        },
        {
            img: domestic1,
            id: 6,
            text: "Aesop and rick",
            btn: "Fragrant for journey"

        },
        {
            img: domestic1,
            id: 7,
            text: "Sublime night masque",
            btn: "Balances of the skin"

        },

        {
            img: domestic3,
            id: 8,
            text: "Aesop and rick",
            btn: "Fragrant for journey"

        }


    ]
    return (
        <>
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
                        <SwiperSlide className="mt-28">
                            {data.h ? <><div className="text-secondary ml-20">
                                <p className="text-sm mb-5 font-bold">{data.p}</p>
                                <h1 className="text-3xl">{data.h}</h1>
                                <p className="text-sm leading-7 my-6">{data.pp}</p>
                                <div className='my-5 flex items-center' >
                                    <Link className='text-sm mr-2'>{data.bt}</Link>
                                    <FiArrowRight className='text-sm'></FiArrowRight>
                                   

                                </div>
                            </div>
                            </> : <><div >
                                <div >
                                    <img src={data.img} alt='' />

                                </div>
                                <div className="text-center text-secondary my-6">
                                <p className="hover:underline font-bold">{data.text}</p>
                                <p className="mb-2">{data.btn}</p>
                            </div>
                            </div>
                            </>}




                        </SwiperSlide>
                    )
                }

            </Swiper>
        </>
    );
}
export default Domestic;