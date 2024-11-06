'use client';

import { useState } from 'react';
import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';

import { Modal, Box, Button } from '@mui/material';

export default function ModalExample() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.pageContainer}>
      <Header/>

            <Button onClick={handleOpen}>Abrir Modal</Button>
            
            <Modal open={open} onClose={handleClose}
            >
                <Box className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Meu Modal com Material-UI</h2>
                        <Button onClick={handleClose}>Fechar</Button>
                    </div>
                </Box>
                
            </Modal>
      <Footer/>
     </div>
  );
}
