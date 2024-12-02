'use client';

import { useState, useEffect } from 'react';
import { Modal, Box, Button } from '@mui/material';

import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';

import api from '../../../services/api';

export default function Home() {
  const [open, setOpen] = useState(false); // Controle do primeiro modal
  const [openSecondModal, setOpenSecondModal] = useState(false); // Controle do segundo modal
  const [showSecondButton, setShowSecondButton] = useState(false); // Exibe o botão para o segundo modal
  const [showThirdButton, setShowThirdButton] = useState(false); // Exibe o botão para iniciar a busca
  const [selectedSpecialty, setSelectedSpecialty] = useState(0); // Especialidade selecionada
  const [selectedLocation, setSelectedLocation] = useState(''); // Localidade selecionada
  const [filteredDoctors, setFilteredDoctors] = useState([]); // Lista de especialistas filtrados 
  const [listaEspecialidades, setListaEspecialidades] = useState([{
    "esp_cod": 0,
    "esp_nome": ""
  }]);

  useEffect(() => {
    listarEspecialidades();
  }, []);

  async function listarEspecialidades() {
    try {
      const response = await api.get('/especialidades');
      if (response.data.sucesso) {
        setListaEspecialidades(response.data.dados);
      } else {
        setListaEspecialidades([
          {
            "esp_cod": 1,
            "esp_nome": "Cardiologia"
          },
          {
            "esp_cod": 2,
            "esp_nome": "Pediatria"
          },
          {
            "esp_cod": 3,
            "esp_nome": "Dermatologia"
          }
        ]);
      }

    } catch (error) {
      alert(error);
    }
  }

  // Simulação de dados de especialistas
  const doctors = [
    { id: 1, name: 'Dr. João Silva', specialty: 'Urologista', location: 'sp' },
    { id: 2, name: 'Dra. Maria Costa', specialty: 'Pediatra', location: 'sp' },
    { id: 3, name: 'Dr. Carlos Sousa', specialty: 'Cardiologista', location: 'sp' },
    { id: 4, name: 'Dra. Ana Oliveira', specialty: 'Urologista', location: 'sp' },
    { id: 5, name: 'Dr. Pedro Lima', specialty: 'Pediatra', location: 'sp' },
    { id: 6, name: 'Dr. Alexandre Morais', specialty: 'Pediatra', location: 'sp' },
    { id: 6, name: 'Dr. Felipe Lima', specialty: 'Pediatra', location: 'sp' },
    { id: 7, name: 'Dra. Mariani Grassi', specialty: 'Pediatra', location: 'sp' },
    { id: 8, name: 'Dr. Ricardão Dedo Grosso', specialty: 'Cardiologista', location: 'rj' },
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
            {selectedSpecialty == 0 ? 'Pesquisar áreas, ex: urologista, pediatra, etc...' : listaEspecialidades[selectedSpecialty - 1].esp_nome}            
          </Button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h3>Escolha a Especialidade</h3>
              <select onChange={handleOptionSelect} value={selectedSpecialty}>
                <option value={0} disabled>
                  Selecione uma especialidade
                </option>
                {
                  listaEspecialidades.map((especialidade) =>
                    <option value={especialidade.esp_cod}>{especialidade.esp_nome}</option>
                  )
                }
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
                  Selecione uma cidade
                </option>
                <option value="Bastos">Bastos</option>                
                <option value="Iacri">Iacri</option>                
                <option value="Tupã">Tupã</option>                
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
                  <h3 className={styles.docName}>{doctor.name}</h3>
                  <p className={styles.docSpecialty}>{doctor.specialty}</p>
                  <p className={styles.docLocation}>{doctor.location === 'sp' ? 'São Paulo' : 'Rio de Janeiro'}</p>
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
