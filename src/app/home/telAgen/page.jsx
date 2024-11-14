'use client';

import { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';

import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';


export default function Home() {

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
                        <h3>Meu Modal com Material-UI</h3>

                        <div className={styles.modalChose}>
                          <h3>Especialista</h3>
                         <select> 
                           <option selected value='urologista'>Urologista</option>
                           <option value='pediatra'>Pediatra</option>
                           <option value='cardiologista'>Cardiologista</option>
                         </select>
                        </div>

                        <Button onClick={handleClose}>Fechar</Button>
                    </div>
                </Box>
                
            </Modal>
      <Footer/>
     </div>
  );
}
