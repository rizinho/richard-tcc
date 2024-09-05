'use client';

import { useState } from 'react';
// Chakra
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, Input, Center, ChakraProvider } from "@chakra-ui/react";
import { SearchIcon, LocationIcon } from "@chakra-ui/icons";
// FIM Chakra

import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false); // Novo estado para controlar o modal do novo botão
  const [showNewButton, setShowNewButton] = useState(false); // Novo estado para controlar a visibilidade do novo botão

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const handleSearch = () => {
    setIsOpen(false); // Fecha o primeiro modal
    setShowNewButton(true); // Mostra o novo botão
  };

  const onNewModalOpen = () => setIsNewModalOpen(true); // Abre o novo modal
  const onNewModalClose = () => setIsNewModalOpen(false); // Fecha o novo modal

  return (
    <Center flexDirection="column">
      <Button
        onClick={onOpen}
        leftIcon={<SearchIcon />}
        w='1000px' h='40px'
        backgroundColor='white'
        borderRadius='50px'
        justifyContent='flex-start'
        textAlign='left'
        fontSize='15px'
      >
        Pesquisar áreas, ex: urologista, pediatra, etc...
      </Button>

      {/* Primeiro Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW="40vw" // Define a largura máxima do modal como 40% da largura da viewport
          mx="auto"  // Centraliza horizontalmente
          my="auto"  // Centraliza verticalmente
        >
          <ModalCloseButton />
          <ModalHeader>Busca</ModalHeader>
          <ModalBody>
            <FormControl>
              <Input placeholder='Buscar por área' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" colorScheme="blueGray" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="teal" onClick={handleSearch}>
              Pesquisar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Novo botão que também abre um Modal */}
      {showNewButton && (
        <>
          <Button onClick={onNewModalOpen} mt='7'
                  leftIcon={<LocationIcon />}
                  w='1000px' h='40px'
                  backgroundColor='white'
                  borderRadius='50px'
                  justifyContent='flex-start'
                  textAlign='left'
                  fontSize='15px'
          >
            Localização
          </Button>

          {/* Segundo Modal */}
          <Modal isOpen={isNewModalOpen} onClose={onNewModalClose}>
            <ModalOverlay />
            <ModalContent
              maxW="40vw" // Define a largura máxima do modal como 40% da largura da viewport
              mx="auto"  // Centraliza horizontalmente
              my="auto"  // Centraliza verticalmente
            >
              <ModalCloseButton />
              <ModalHeader>Novo Modal</ModalHeader>
              <ModalBody>
                <FormControl>
                  <Input placeholder='Novo campo de busca' />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" colorScheme="blueGray" onClick={onNewModalClose}>
                  Cancelar
                </Button>
                <Button colorScheme="teal" onClick={onNewModalClose}>
                  Pesquisar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
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
