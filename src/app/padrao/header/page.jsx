'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link';


export default function Header () {

  const [isOpen, setIsOpen] = useState(false);
      
        const toggleSidebar = () => {
          setIsOpen(!isOpen);
        }
   return(
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

                        <button className={styles.menuButton} onClick={toggleSidebar}>
                            ☰
                        </button>
                        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                            <h2>Administração</h2>
                            <ul>
                            <li>
                                <Link href="/liMedico">
                                Configurações
                                </Link>
                            </li>
                            <li>
                                <Link href="/liMedico">
                                Gerenciar Usuários
                                </Link>
                            </li>
                            <li>
                                <Link href="/liMedico">
                                Relatórios
                                </Link>
                            </li>
                            <li>
                                <Link href="/liMedico">
                                Suporte
                                </Link>
                            </li>
                            </ul>
                        </div>
                </div>
            </header>
   )
}