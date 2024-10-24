'use client'

import styles from './page.module.css';
import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';

export default function Home() {
    return(
      <div className={styles.main}>
        <Header/>
        <h1>PACI</h1>
        <Footer/>
      </div>
    );
  }