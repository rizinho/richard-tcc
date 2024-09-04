'use client';
import { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Center, ChakraProvider } from "@chakra-ui/react";
import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Center>
      <Button className={styles.butModal} onClick={onOpen}>Pesquisar areas, ex: urologista, pediatra, etc...</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW="40vw" // Define a largura máxima do modal como 80% da largura da viewport
          mx="auto"  // Centraliza horizontalmente
          my="auto"  // Centraliza verticalmente
          // mt="100" // para espaçamento
        >
          <ModalCloseButton />
          <ModalHeader>Busca</ModalHeader>

          <ModalBody>
            <FormControl>
              <Input placeholder='Buscar por area'/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="blueGray" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={onClose}>
              Pesquisar
            </Button>
          </ModalFooter>
          
        </ModalContent>
      </Modal>

    </Center>
  );
};

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.container}>

        <div className={styles.searchContainer}>
          <ChakraProvider>
            <Center flex={1} px="3">
              <Example />
            </Center>
          </ChakraProvider>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
