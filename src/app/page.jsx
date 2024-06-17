'use client'

import { useRef } from "react";

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {

  const targetRef = useRef(null);

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView ({ behavior: 'smooth'});
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            className={styles.icon}
            src="/logotcc.png"
            width={500}
            height={500}
            alt="Imagem do logo"
          />
          <h1 className={styles.txtLog}>Consult Doctor</h1>
        </div>
        <div className={styles.navBar}>
          <button className={styles.link} onClick={handleScroll}>SAC</button>
          <button className={styles.link}>Configurações</button>
          <Link href="/usuarios/login" className={styles.bLogin}>Login</Link>
          <Link href="/usuarios/cadCliente" className={styles.bLogin}>Cadastro</Link>
        </div>
      </div>

      <div className={styles.container}>
        <Image
          className={styles.backgroundContainer}
          src="/imgContainer.png"
          width={3000}
          height={3000}
          alt="foto de uma médica"
        />
        <Image
          className={styles.logoContainer}
          src="/logoContainer.png"
          width={500}
          height={500}
          alt="Imagem do logo na frente da foto da médica"
        />

        <div className={styles.caixa}>
          <p className={styles.caixaText}>Consult Doctor é um site que permite agendar consultas médicas online de forma rápida e fácil. Os usuários podem escolher entre uma variedade de especialidades, ver a disponibilidade de horários em tempo real. O site também fornece informações detalhadas sobre os médicos e envia lembretes automáticos de consulta. É uma solução conveniente para acessar cuidados médicos de qualidade sem sair de casa.</p>
        </div>

        <div className={styles.caixaTitulo}>
          <p className={styles.titleText}>SOBRE NÓS</p>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.ajuda}>
          <p className={styles.textAjuda} ref={targetRef}> Olá, como podemos te ajudar?</p>
        </div>

        <div className={styles.caixaContainer}>
          <div className={styles.caixa1}>
            <p className={styles.titleBox1}>Fale conosco</p>
            <p className={styles.textBox1}>Telefone: (14) 99887766<br /><br />Whatsapp: (14) 99887766<br /><br />E-mail: beta@gmail.com</p>
          </div>

          <div className={styles.caixa2}>
            <p className={styles.titleBox2}>Duvidas frequentes</p>
            <button className={styles.butDuvidas}>Duvidas sobre cadastro</button>
            <button className={styles.butDuvidas}>Duvidas sobre pagamentos</button>

            
          </div>
        </div>
      </div>
      <footer className={styles.roda}>
                &copy; 2024 ConsultDoctor.com - Todos os direitos reservados
          </footer>
    </main>
  );
}
