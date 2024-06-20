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

                    <Swiper className={styles.swiper}
                            centeredSlides={true}
                            autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                    >

                            <SwiperSlide className={styles.swiperSlide}> <Image className={styles.imgCarosel} src="/carrosel1.jpg" width={3000} height={3000} alt="Imagem do logo"/> </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}> <Image className={styles.imgCarosel} src="/carrosel2.jpg" width={3000} height={3000} alt="Imagem do logo"/> </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}> <Image className={styles.imgCarosel} src="/carrosel3.jpg" width={3000} height={3000} alt="Imagem do logo"/> </SwiperSlide>

                    </Swiper>
                    </div>

                    <div className={styles.butMain}>
                        
                      <div className={styles.contBut}>

                            <button className={styles.butt}>
                                <Image className={styles.iconBut} src="/calendar.png" width={100} height={100} alt="Icone do botão"/>
                            </button>

                           <p className={styles.txtBut}>Agendar Consulta</p>

                      </div>

                      <div className={styles.contBut}>

                            <button className={styles.butt}> 
                                <Image className={styles.iconBut} src="/desktop.png"  width={100} height={100} alt="Icone do botão"/>
                            </button>

                            <p className={styles.txtBut}>Pedidos de Exames</p>

                      </div>  

                      <div className={styles.contBut}>

                            <button className={styles.butt}>
                                <Image className={styles.iconBut} src="/chat.png"     width={100} height={100} alt="Icone do botão"/>
                            </button>

                            <p className={styles.txtBut}>Minhas Consultas</p>

                      </div> 

                    </div>

            </div>

            <footer className={styles.roda}>
                &copy; 2024 ConsultDoctor.com - Todos os direitos reservados
            </footer>

        </div>
    )
}
