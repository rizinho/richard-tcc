'use client';

import doctors from '../../../listMed/medicos'; // Assuma que seus dados estão em 'src/doctors.js'
import Link from 'next/link';
import styles from './page.module.css'; // Importando o CSS Module

export default function DoctorProfile({ params: { id } }) {
  // Filtra o médico pelo ID fornecido na URL
  const doctor = doctors.filter((doc) => doc.id === parseInt(id, 10));

  if (doctor.length === 0) {
    return <p>Médico não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Perfil do Médico</h1>
      <div className={styles['profile-info']}>
        <p><strong>Nome:</strong> {doctor[0].name}</p>
        <p><strong>Especialidade:</strong> {doctor[0].specialty}</p>
        <p><strong>Localidade:</strong> {doctor[0].location.toUpperCase()}</p>
        <p><strong>Descrição:</strong> {doctor[0].bio}</p>
      </div>
      <li>
        <Link href="/telAgen" className={styles.link}>Voltar</Link>
      </li>
    </div>
  );
}
