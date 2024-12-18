'use client' 

import React, {useRef,useState} from 'react';

// carrosel

import { Navigation, Autoplay, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// carrosel

import styles from "./page.module.css"
import Image from "next/image";
import Link from 'next/link';
import Header from '../padrao/header/page';
import Footer from '../padrao/footer/page';

export default function Home() {

    return (
        <div className={styles.main}>

           <Header/>

            <div className={styles.container}>

                    <div className={styles.conCarousel}>

                    <Swiper className={styles.swiper}
                            centeredSlides={true}
                            autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                    >

                            <SwiperSlide className={styles.swiperSlide}> <Image className={styles.imgCarosel} src="/carroTest3.png" width={2000} height={600} alt="Imagem do logo"/> </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}> <Image className={styles.imgCarosel} src="/carrosel2.jpg" width={2000} height={600} alt="Imagem do logo"/> </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}> <Image className={styles.imgCarosel} src="/carrosel3.jpg" width={2000} height={600} alt="Imagem do logo"/> </SwiperSlide>

                    </Swiper>
                    </div>

                    <h1 className={styles.titleTxt}>Guia Médico</h1>
                    <p className={styles.txt}>Sua busca ainda mais facil.</p>
                    <p className={styles.txt}>Encontre Médicos perto de você.</p>

                    <div className={styles.butMain}>
                        
                      <div className={styles.contBut}>
                      <Link className={styles.butt} href="/home/telAgen">
                        <Image className={styles.iconBut} src="/calendar.png" width={80} height={80} alt="Ícone do botão" />
                        <p className={styles.txtBut}>Consulte Agora</p>
                      </Link>
                      </div>

                    </div>

            </div>

            <Footer/>
        </div>
    )
};
