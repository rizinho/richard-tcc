'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: 'You' }]);
      setInput('');
    }
  };

    return(

      <div className={styles.main}>

      <header>
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

        </div>
      </header>

      <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${message.user === 'You' ? styles.userMessage : styles.otherMessage}`}
          >
            <strong>{message.user}: </strong>{message.text}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className={styles.input}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className={styles.sendButton}>Send</button>
      </div>
    </div>

    <footer className={styles.roda}>
      &copy; 2024 ConsultDoctor.com - Todos os direitos reservados
    </footer>

    </div>
  );
};