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

                    <div className={styles.conCarousel}>
                        <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>

                            <SwiperSlide> <Image className={styles.imgCarosel} src="/carrosel1.jpg" width={3000} height={3000} alt="Imagem do logo"/> </SwiperSlide>
                            <SwiperSlide> <Image className={styles.imgCarosel} src="/carrosel2.jpg" width={3000} height={3000} alt="Imagem do logo"/> </SwiperSlide>
                            <SwiperSlide> <Image className={styles.imgCarosel} src="/carrosel3.jpg" width={3000} height={3000} alt="Imagem do logo"/> </SwiperSlide>

                        </Swiper>
                    </div>

                    <div className={styles.boxMain}>

                        <div className={styles.box}>
                           
                        </div>

                        <div className={styles.box}>
                            
                        </div>

                        <div className={styles.box}>
                            
                        </div>

                    </div>

            </div>

            <footer className={styles.roda}>
                &copy; 2024 ConsultDoctor.com - Todos os direitos reservados
            </footer>

        </div>
    )
}
