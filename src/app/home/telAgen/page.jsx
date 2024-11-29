'use client';

import { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';

import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';

export default function Home() {
  const [open, setOpen] = useState(false); // Controle do primeiro modal
  const [openSecondModal, setOpenSecondModal] = useState(false); // Controle do segundo modal
  const [showSecondButton, setShowSecondButton] = useState(false); // Exibe o botão para o segundo modal
  const [showThirdButton, setShowThirdButton] = useState(false); // Exibe o botão para iniciar a busca
  const [selectedSpecialty, setSelectedSpecialty] = useState(''); // Especialidade selecionada
  const [selectedLocation, setSelectedLocation] = useState(''); // Localidade selecionada
  const [filteredDoctors, setFilteredDoctors] = useState([]); // Lista de especialistas filtrados

  // Simulação de dados de especialistas
  const doctors = [
    { id: 1, name: 'Dr. João Silva', specialty: 'urologista', location: 'sp' },
    { id: 2, name: 'Dra. Maria Costa', specialty: 'pediatra', location: 'sp' },
    { id: 3, name: 'Dr. Carlos Sousa', specialty: 'cardiologista', location: 'sp' },
    { id: 4, name: 'Dra. Ana Oliveira', specialty: 'urologista', location: 'rj' },
    { id: 5, name: 'Dr. Pedro Lima', specialty: 'pediatra', location: 'rj' },
    { id: 6, name: 'Dr. Alexandre Morais', specialty: 'cardiologista', location: 'rj'},
    { id: 6, name: 'Dr. Felipe Lima', specialty: 'cardiologista', location: 'rj'},
    { id: 7, name: 'Dr. Mariani Grassi', specialty: 'cardiologista', location: 'rj'},
    { id: 8, name: 'Dr. Ricardão Dedo Grosso', specialty: 'cardiologista', location: 'rj'},
  ];

  const handleOptionSelect = (event) => {
    setSelectedSpecialty(event.target.value); // Atualiza a especialidade selecionada
    setFilteredDoctors([]); // Limpa a lista ao mudar a especialidade
    setOpen(false);
    setShowSecondButton(true);
  };

  const handleOptionSelect2 = (event) => {
    setSelectedLocation(event.target.value); // Atualiza a localização selecionada
    setFilteredDoctors([]); // Limpa a lista ao mudar a localidade
    setOpenSecondModal(false);
    setShowThirdButton(true);
  };

  const handleSearch = () => {
    const results = doctors.filter(
      (doctor) =>
        doctor.specialty === selectedSpecialty && doctor.location === selectedLocation
    );
    setFilteredDoctors(results);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />

      <div className={styles.modalMain}>
        <p className={styles.tt}>BUSCA PELOS ESPECIALISTAS</p>

        <div className={styles.areaBut}>
          <Button className={styles.modalBut} onClick={() => setOpen(true)}>
            {selectedSpecialty || 'Pesquisar áreas, ex: urologista, pediatra, etc...'}
          </Button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h3>Escolha a Especialidade</h3>
              <select onChange={handleOptionSelect} value={selectedSpecialty}>
                <option value="" disabled>
                  Selecione uma especialidade
                </option>
                <option value="urologista">Urologista</option>
                <option value="pediatra">Pediatra</option>
                <option value="cardiologista">Cardiologista</option>
              </select>
            </div>
          </Box>
        </Modal>

        {showSecondButton && (
          <Button className={styles.modalBut} onClick={() => setOpenSecondModal(true)}>
            Localização
          </Button>
        )}

        <Modal open={openSecondModal} onClose={() => setOpenSecondModal(false)}>
          <Box className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h3>Escolha a Localização</h3>
              <select onChange={handleOptionSelect2} value={selectedLocation}>
                <option value="" disabled>
                  Selecione um estado
                </option>
                <option value="sp">SP</option>
                <option value="rj">RJ</option>
              </select>
            </div>
          </Box>
        </Modal>

        {showThirdButton && (
          <Button className={styles.modalButEnd} onClick={handleSearch}>
            Buscar
          </Button>
        )}

        {/* Lista de especialistas filtrados */}
        <div className={styles.resultsContainer}>
  {filteredDoctors.map((doctor) => (
    <div key={doctor.id} className={styles.doctorCard}>
      <div className={styles.doctorContent}>
        {/* Imagem do médico */}
        <div className={styles.doctorImage}>
          <img 
            src="/fotoPerf.jpg" // Exemplo de imagem
            alt={doctor.name} 
            className={styles.image}
          />
        </div>

        {/* Informações do médico */}
        <div className={styles.doctorInfo}>
          <h3>{doctor.name}</h3>
          <p>{doctor.specialty}</p>
          <p>{doctor.location === 'sp' ? 'São Paulo' : 'Rio de Janeiro'}</p>
        </div>
      </div>

      {/* Botão de agendamento */}
      <div className={styles.schedule}>
        <Button
          className={styles.timeButton}
          onClick={() => {
            window.location.href = `/home/telMedico/${doctor.id}`;
          }}
        >
          Detalhes
        </Button>
      </div>
    </div>
  ))}
</div>

      </div>

      <Footer />
    </div>
  );
}
