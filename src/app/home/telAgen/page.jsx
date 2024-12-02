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

  // // Simulação de dados de especialistas
  // const doctors = [
  //   { med_cod: 1, usu_nome: 'Dr. João Silva', esp_nome: 'Urologista', usu_cidade: 'sp' },
  //   { med_cod: 2, usu_nome: 'Dra. Maria Costa', esp_nome: 'Pediatra', usu_cidade: 'sp' },
  //   { med_cod: 3, usu_nome: 'Dr. Carlos Sousa', esp_nome: 'Cardiologista', usu_cidade: 'sp' },
  //   { med_cod: 4, usu_nome: 'Dra. Ana Oliveira', esp_nome: 'Urologista', usu_cidade: 'sp' },
  //   { med_cod: 5, usu_nome: 'Dr. Pedro Lima', esp_nome: 'Pediatra', usu_cidade: 'sp' },
  //   { med_cod: 6, usu_nome: 'Dr. Alexandre Morais', esp_nome: 'Pediatra', usu_cidade: 'sp' },
  //   { med_cod: 6, usu_nome: 'Dr. Felipe Lima', esp_nome: 'Pediatra', usu_cidade: 'sp' },
  //   { med_cod: 7, usu_nome: 'Dra. Mariani Grassi', esp_nome: 'Pediatra', usu_cidade: 'sp' },
  //   { med_cod: 8, usu_nome: 'Dr. Ricardão Dedo Grosso', esp_nome: 'Cardiologista', usu_cidade: 'rj' },
  // ];

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

  const handleSearch = async () => {
    try {
      const dados = {
        esp_cod: selectedSpecialty,
        med_cidade: selectedLocation
      }
      const response = await api.post('/medicos/lista', dados);
      if (response.data.sucesso) {
        setFilteredDoctors(response.data.dados);
      }
    } catch (error) {
      alert(error);
    }
    
  };
  console.log(selectedLocation);
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
            {selectedLocation == '' ? 'Selecione a localização' : selectedLocation}
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
          <Button className={styles.modalButEnd} onClick={() => handleSearch()}>
            Buscar
          </Button>
        )}

        {/* Lista de especialistas filtrados */}
        <div className={styles.resultsContainer}>
          {
            filteredDoctors.length > 0 ? 
            filteredDoctors.map((doctor) => (
              <div key={doctor.med_cod} className={styles.doctorCard}>
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
                    <h3 className={styles.docName}>{doctor.usu_nome}</h3>
                    <p className={styles.docSpecialty}>{doctor.esp_nome}</p>
                    <p className={styles.docLocation}>{doctor.usu_cidade}</p>
                  </div>
                </div>
  
                {/* Botão de agendamento */}
                <div className={styles.schedule}>
                  <Button
                    className={styles.timeButton}
                    onClick={() => {
                      window.location.href = `/home/telMedico/${doctor.med_cod}`;
                    }}
                  >
                    Detalhes
                  </Button>
                </div>
              </div>
            )) :
            <p>Não existem médicos com este critério de pesquisa</p>
          }
        </div>


      </div>

      <Footer />
    </div>
  );
}
