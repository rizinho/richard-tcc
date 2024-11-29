'use client';

import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../padrao/footer/page';
import styles from './page.module.css';

export default function FAQ() {
  // Dados de perguntas e respostas
  const faqData = [
    {
      question: "Como encontro um especialista?",
      answer:
        "Na página inicial, selecione a especialidade desejada e a localização. Depois, clique em 'Buscar' para ver os especialistas disponíveis.",
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer:
        "Após selecionar o especialista desejado, clique no botão 'Detalhes' e siga as instruções de agendamento na página do médico.",
    },
    {
      question: "Posso escolher o horário da consulta?",
      answer:
        "Sim! Após acessar a página do médico, você verá os horários disponíveis para agendamento. Escolha o horário que melhor se adequar à sua agenda.",
    },
    {
      question: "Os médicos são certificados?",
      answer:
        "Todos os especialistas cadastrados na Consult Doctor possuem certificações e experiência comprovada em suas respectivas áreas de atuação.",
    },
    {
      question: "Como faço para entrar em contato com o suporte?",
      answer:
        "Você pode entrar em contato com o nosso suporte pelo e-mail suporte@consultdoctor.com ou pelo telefone (11) 4002-8922.",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          className={styles.icon}
          src="/logotcc.png"
          width={65}
          height={50}
          alt="Imagem do logo"
        />
        <h1 className={styles.txtLog}>Consult Doctor</h1>
      </div>
      
      <div className={styles.navBar}>
          <Link className={styles.link} href='../home'>voltar</Link>


        </div>
    </header>

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Dúvidas Frequentes</h1>
        <p className={styles.subtitle}>
          Aqui estão algumas das perguntas mais comuns sobre o Consult Doctor.
        </p>

        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <Accordion key={index} className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={styles.accordionSummary}
              >
                <h3 className={styles.question}>{item.question}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.answer}>{item.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
