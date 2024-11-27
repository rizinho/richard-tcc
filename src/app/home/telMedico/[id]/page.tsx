'use client';

import doctors from '../../../listMed/medicos';
import Header from '../../../padrao/header/page';
import Footer from '../../../padrao/footer/page';
import Link from 'next/link';
import styles from './page.module.css';

export default function DoctorProfile({ params: { id } }) {
  // Filtra o médico pelo ID fornecido na URL
  const doctor = doctors.filter((doc) => doc.id === parseInt(id, 10));

  if (doctor.length === 0) {
    return <p className={styles.notFound}>Médico não encontrado.</p>;
  }

  const { name, specialty, location, bio, numero } = doctor[0];

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/home">Início</Link> &gt; <span>{specialty}</span> &gt; <span>{name}</span>
        </nav>

        <div className={styles.profile}>
          {/* Informações do Médico */}
          <div className={styles.profileCard}>
            <img
              src="/path/to/doctor-image.jpg"
              alt={`Foto de ${name}`}
              className={styles.doctorImage}
            />
            <h1 className={styles.doctorName}>{name}</h1>
            <p className={styles.doctorSpecialty}>{specialty}</p>
            <p className={styles.doctorLocation}>Local: {location.toUpperCase()}</p>
          </div>

          {/* Informações Adicionais */}
          <div className={styles.details}>
            <h2>Sobre o Médico</h2>
            <p className={styles.doctorBio}>{bio}</p>

            {/* Botão para WhatsApp */}
            <a
              href={`https://wa.me/${numero}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              Fale com o médico no WhatsApp
            </a>
          </div>
        </div>

        <Link href="/home/telAgen/" className={styles.link}>
          Voltar
        </Link>
      </div>
      <Footer />
    </div>
  );
}
