'use client';

import { useState, useEffect } from 'react';
import { Modal, Box, Button } from '@mui/material';

import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';

export default function Home() {

  const [open, setOpen] = useState(false); // Controle do primeiro modal
  const [openSecondModal, setOpenSecondModal] = useState(false); // Controle do segundo modal
  const [showSecondButton, setShowSecondButton] = useState(false); // Exibe o botão para o segundo modal
  const [showThirdButton, setShowThirdButton] = useState(false); // Exibe o botão para iniciar a busca
  const [selectedSpecialty, setSelectedSpecialty] = useState(''); // Estado para armazenar a especialidade selecionada
  const [selectedLocation, setSelectedLocation] = useState(''); // Estado para armazenar a Localidade selecionada

  

  // Função que fecha o primeiro modal e exibe o botão para abrir o segundo modal
  const handleOptionSelect = (event) => {
    const selectedValue = event.target.value; // Obtém o valor da opção selecionada
    setSelectedSpecialty(selectedValue); // Atualiza o estado com a especialidade selecionada
    setOpen(false); // Fecha o primeiro modal
    setShowSecondButton(true); // Exibe o botão para o segundo modal
  };

  // Função que fecha o primeiro modal e exibe o botão para abrir o segundo modal
  const handleOptionSelect2 = (event) => {
    const selectedValue = event.target.value; // Obtém o valor da opção selecionada
    setSelectedLocation(selectedValue); // Atualiza o estado com a especialidade selecionada
    setOpenSecondModal(false); // Fecha o primeiro modal
    setShowThirdButton(true); // Exibe o botão para o segundo modal
  };

  // Funções para abrir e fechar primeiro e segundo modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenSecondModal = () => setOpenSecondModal(true);
  const handleCloseSecondModal = () => setOpenSecondModal(false);

  return (
    <div className={styles.pageContainer}>
      <Header />

      <div className={styles.modalMain}>
        <p className={styles.tt}>BUSCA PELOS ESPECIALISTAS</p>

        <div className={styles.areaBut}>
          <Button className={styles.modalBut} onClick={handleOpen}>
            {selectedSpecialty || 'Pesquisar áreas, ex: urologista, pediatra, etc...'}
          </Button>
        </div>

        <Modal open={open} onClose={handleClose}>
          <Box className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h3>Escolha a Especialidade</h3>

              <div className={styles.modalChose}>
                <h3>Especialista</h3>

                <select onChange={handleOptionSelect} value={selectedSpecialty}>
                  <option value="" disabled>
                    Selecione uma especialidade
                  </option>
                  <option value="urologista">Urologista</option>
                  <option value="pediatra">Pediatra</option>
                  <option value="cardiologista">Cardiologista</option>
                </select>
                
              </div>
            </div>
          </Box>
        </Modal>

        {showSecondButton && (
          <Button className={styles.modalBut} onClick={handleOpenSecondModal}>
            Localizão
          </Button>
        )}

        <Modal open={openSecondModal} onClose={handleCloseSecondModal}>
          <Box className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h3>Segundo Modal</h3>

              <select onChange={handleOptionSelect2} value={selectedLocation}>
                  <option value="" disabled>
                    Selecione um estado
                  </option>
                  <option value="sp">SP</option>

                </select>

            </div>
          </Box>
        </Modal>

        {showThirdButton && (
          <Button className={styles.modalButEnd}>
            Buscar
          </Button>
        )}
      </div>



      <Footer />
    </div>
  );
}
