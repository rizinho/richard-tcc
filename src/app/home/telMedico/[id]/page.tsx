'use client';

import doctors from '../../../listMed/medicos';
import Header from '../../../padrao/header/page';
import Footer from '../../../padrao/footer/page';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function DoctorProfile({ params: { id } }) {
  const doctor = doctors.find((doc) => doc.id === parseInt(id, 10));

  if (!doctor) {
    return <p className={styles.notFound}>Médico não encontrado.</p>;
  }

  const { name, specialty, location, bio, crm, numero } = doctor;

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.container}>
        <div className={styles.backColor}>
          <nav className={styles.breadcrumb}>
            <Link href="/home">Início</Link> &gt; <span>{specialty}</span> &gt; <span>{name}</span>
          </nav>

          <div className={styles.profile}>
            {/* Card Esquerdo - Informações Básicas */}
            <div className={styles.profileCard}>
              <Image
                src="/fotoPerf.jpg"
                width={200}
                height={200}
                alt={`Foto de ${name}`}
                className={styles.doctorImage}
              />
              <h1 className={styles.doctorName}>{name}</h1>
              <p className={styles.doctorCrm}>CRM: {crm}</p>
              <p className={styles.doctorSpecialty}>{specialty}</p>
              <p className={styles.doctorLocal}>{location}</p>
            </div>

            {/* Card Direito - Informações Adicionais */}
            <div className={styles.details}>
              <div className={styles.aboutSection}>
                <h2 className={styles.txtSob}>Sobre Mim</h2>
                <p className={styles.doctorBio}>{bio}</p>
              </div>

              {/* Botão para WhatsApp */}
              <a
                href={`https://wa.me/${numero}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                Fale com o médico via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
