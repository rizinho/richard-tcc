'use client'

import { useState } from 'react';
import styles from './page.module.css';
import Footer from '../../padrao/footer/page'


export default function Home () {

  const [isChatOpen, setChatOpen] = useState(false);

    const toggleChatPopup = () => {
        setChatOpen(!isChatOpen);
    };


    return(

      <main>
            <header className={styles.header}>
                <img src="https://via.placeholder.com/40?text=MD" alt="Logotipo Médico" />
                <h1>Consult Doctor</h1>
            </header>
            <div className={styles.container}>
                <div className={styles.profileHeader}>
                    <img src="https://via.placeholder.com/150" alt="Foto do Médico" />
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
                    <textarea className={styles.textarea} placeholder="Fale um pouco sobre você...">
                        Sou um cardiologista com experiência em tratamento de doenças do coração. Meu objetivo é proporcionar um atendimento de qualidade e personalizado para cada paciente.
                    </textarea>
                </div>
                <div
                    className={styles.chatButton}
                    onClick={toggleChatPopup}
                >
                    💬
                </div>
                {isChatOpen && (
                    <div className={styles.chatPopup}>
                        <div className={styles.chatPopupHeader}>Chat com Suporte</div>
                        <div className={styles.chatPopupBody}>
                            <p><strong>Suporte:</strong> Olá! Como posso ajudar você?</p>
                            {/* Mensagens de chat fictícias */}
                        </div>
                        <div className={styles.chatPopupFooter}>
                            <input type="text" placeholder="Digite sua mensagem..." />
                            <button>Enviar</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
      </main>      

);
};