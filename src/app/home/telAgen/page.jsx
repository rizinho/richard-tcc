
  // Simulação de dados de especialistas
  // const doctors = [
  //   { id: 1, name: 'Dr. João Silva', specialty: 'urologista', location: 'sp' },
  //   { id: 2, name: 'Dra. Maria Costa', specialty: 'pediatra', location: 'sp' },
  //   { id: 3, name: 'Dr. Carlos Sousa', specialty: 'cardiologista', location: 'sp' },
  //   { id: 4, name: 'Dra. Ana Oliveira', specialty: 'urologista', location: 'rj' },
  //   { id: 5, name: 'Dr. Pedro Lima', specialty: 'pediatra', location: 'rj' },
  //   { id: 6, name: 'Dr. Alexandre Morais', specialty: 'cardiologista', location: 'rj' },
  // ];

'use client';

import { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';

import api from '../../../services/api';

import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';

export default function Home() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [open, setOpen] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showThirdButton, setShowThirdButton] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  async function listarMedicos() {
    try {
      setLoading(true); // Ativa o estado de carregamento
      const response = await api.get('/medicos/home');

      if (response.data.sucesso) {
        setMedicos(response.data.dados);
      } else {
        alert('Erro:' + response.data.mensagem + '\n' + response.data.dados);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + '\n' + error.response.data.dados);
      } else {
        alert('Erro no front-end' + '\n' + error);
      }
    } finally {
      setLoading(false); // Desativa o estado de carregamento
    }
  }

  const handleOptionSelect = (event) => {
    setSelectedSpecialty(event.target.value);
    setOpen(false);
    setShowSecondButton(true);
  };

  const handleOptionSelect2 = (event) => {
    setSelectedLocation(event.target.value);
    setOpenSecondModal(false);
    setShowThirdButton(true);
  };

  const handleSearch = async () => {
    await listarMedicos(); // Busca os médicos do backend
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

        {/* Lista de médicos com carregamento */}
        <div className={styles.produtos}>
          {loading ? (
            <div className={styles.loading}>Carregando...</div>
          ) : medicos.length > 0 ? (
            medicos.map((medico) => (
              <div key={medico.id} className={styles.doctorCard}>
                <div className={styles.doctorContent}>
                  <div className={styles.doctorImage}>
                    <img
                      src="/fotoPerf.jpg"
                      alt={medico.name}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.doctorInfo}>
                    <h3>{medico.name}</h3>
                    <p>{medico.specialty}</p>
                    <p>{medico.location === 'sp' ? 'São Paulo' : 'Rio de Janeiro'}</p>
                  </div>
                </div>
                <div className={styles.schedule}>
                  <Button
                    className={styles.timeButton}
                    onClick={() => {
                      window.location.href = `/home/telMedico/${medico.id}`;
                    }}
                  >
                    Detalhes
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <h1>Não foi possível carregar os itens</h1>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
