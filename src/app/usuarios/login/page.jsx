'use client' 

import {useState} from 'react'

import styles from "./page.module.css"
import Image from "next/image";

export default function Home() {

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

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

            <h1 className={styles.tit}>FAÇA SEU LOGIN</h1>

            <div className={styles.form}>
                <form className={styles.form1}>

                    <input className={styles.inp}
                           type="email" value={email}
                           placeholder='E-mail:'
                           onChange={(e) => setEmail(e.target.value)}
                           required
                    />
                    <input className={styles.inp}
                           type="password" value={senha}
                           placeholder='Senha:'
                           onChange={(e) => setSenha(e.target.value)}
                           required
                    />
                  <button className={styles.cad}  onClick={() => {
                      window.location.href = `/home`;
                    }}>Entrar</button>

                </form>
            </div>

            <footer className={styles.roda}>
                &copy; 2024 ConsultDoctor.com - Todos os direitos reservados
            </footer>

        </div>
    )
}
