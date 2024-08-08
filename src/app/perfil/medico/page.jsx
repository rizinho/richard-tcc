'use client'

import { useState } from 'react';
import styles from './page.module.css';
import Footer from '../../padrao/footer/page'
import Image from 'next/image';
import Link from 'next/link';

export default function Home () {
    return(
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                
                <header className={styles.header}>
                    <Image className={styles.logotcc} src="/logotcc.png" width={40} height={40} alt="Logotipo Médico" />
                    <h1 className={styles.tHeader} src="/logotcc.png">Consult Doctor</h1>

                    <Link href="/" className={styles.volt}>
                        <Image src="/voltar.png" width={40} height={40} alt="Voltar"/>
                    </Link>
                </header>

                <div className={styles.container}>
                    <div className={styles.profileHeader}>
                        <Image src="/carrosel1.jpg" width={500} height={500} alt="Foto do Médico" />

                        <div>
                            <h1>Dr. João Silva</h1>
                            <p><strong>Especialidade:</strong> Cardiologia</p>
                            <p><strong>CRM:</strong> 12345-SP</p>
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <div>
                            <div className={styles.sectionTitle}>Informações de Contato</div>
                            <div className={styles.sectionContent}>
                                <p><strong>Email:</strong>teste@gmail.com</p>
                                <p><strong>Celular:</strong> +55 11 98765-4321</p>
                                <p><strong>Cidade:</strong> São Paulo</p>
                                <p><strong>Estado:</strong> SP</p>
                                <p><strong>Atende Convênios:</strong> Sim</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.sectionTitle}>Local de Atendimento</div>
                            <div className={styles.sectionContent}>
                                <p>Clinaica teste, São Paulo - SP</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.profileInfo}>
                        <div className={styles.sectionTitle}>Sobre o Médico</div>
                        <p className={styles.textarea} placeholder="Fale um pouco sobre você...">
                            Sou um cardiologista com experiência em tratamento de doenças do coração. Meu objetivo é proporcionar um atendimento de qualidade e personalizado para cada paciente.
                        </p>
                    </div>
                    <div className={styles.chatButton}>
                        <Link className={styles.chatButton} href="/home/telMensa"> 💬 </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
