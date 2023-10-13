"use client"
import clsx from 'clsx';
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import pic1 from "@/assets/icon/ok.png"
import pic2 from "@/assets/icon/cancle.png"
import pic3 from "@/assets/icon/question-mark.png"


export default function SwiperPage() {

    return (
        <Swiper
            className={clsx(
                "w-40 h-40",
            )}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Image src={pic1} width={40} height={40} alt='pic' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={pic2} width={40} height={40} alt='pic' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={pic3} width={40} height={40} alt='pic' />
            </SwiperSlide>
        </Swiper>
    )
}
