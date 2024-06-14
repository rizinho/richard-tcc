'use client' 
import React, {useRef,useState} from 'react';

// carrosel
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// carrosel

import styles from "./page.module.css"
import Image from "next/image";

export default function Home() {

    return (
        <div className={styles.main}>

            <header>
                <div className={styles.header}>
                    <div className={styles.logo}>

                        <Image className={styles.icon}
                            src="/logotcc.png"
                            width={500}
                            height={500}
                            alt="Imagem do logo"
                        />
                        <h1 className={styles.txtLog}>Consult Doctor</h1>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
            <>
      <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
            </div>

            <footer className={styles.roda}>
                &copy; 2024 ConsultDoctor.com - Todos os direitos reservados
            </footer>

        </div>
    )
}
