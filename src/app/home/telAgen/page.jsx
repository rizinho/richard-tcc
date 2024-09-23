'use client';

import { useState } from 'react';
// Chakra
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, Input, Center, List, ListItem, Image, Box, ChakraProvider } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdLocationOn } from 'react-icons/md'; // Ícone de localização
// FIM Chakra

import Header from '../../padrao/header/page';
import Footer from '../../padrao/footer/page';
import styles from './page.module.css';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [showNewButton, setShowNewButton] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [stateInput, setStateInput] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [specialists, setSpecialists] = useState([]); // Lista de especialistas

  const suggestions = ['Urologista', 'Pediatra', 'Cardiologista'];
  const stateSuggestions = ['São Paulo']; // Sugestões de estados

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSelectedOption(suggestion);
    setShowNewButton(true); // Mostra o novo botão
    setIsOpen(false); // Fecha o primeiro modal
  };

  const onNewModalOpen = () => setIsNewModalOpen(true);
  const onNewModalClose = () => setIsNewModalOpen(false);

  const handleStateInputChange = (e) => {
    setStateInput(e.target.value);
  };

  const handleSelectState = () => {
    setSelectedState('SP'); // Define a sigla "SP"
    setIsNewModalOpen(false); // Fecha o segundo modal
    fetchSpecialists(selectedOption, 'SP'); // Busca especialistas com base na seleção
  };

  const fetchSpecialists = (option, state) => {
    // Aqui você pode substituir com uma chamada real para uma API
    // Exemplo de dados estáticos
    const exampleSpecialists = [
      { id: 1, name: 'Dr. João Silva', clinic: 'Clínica A', specialty: 'Urologista', state: 'SP', img: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Dra. Maria Oliveira', clinic: 'Clínica B', specialty: 'Urologista', state: 'SP', img: 'https://via.placeholder.com/50' },
      { id: 1, name: 'Dra. Maria Oliveira', clinic: 'Clínica B', specialty: 'Urologista', state: 'SP', img: 'https://via.placeholder.com/50' }
    ];

    // Filtrar especialistas com base na especialidade e estado selecionado
    const filteredSpecialists = exampleSpecialists.filter(specialist => 
      specialist.specialty === option && specialist.state === state
    );

    setSpecialists(filteredSpecialists);
  };

  return (
    <Center flexDirection="column">
      {/* Primeiro botão que abre o primeiro modal */}
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
        {selectedOption || 'Pesquisar áreas, ex: urologista, pediatra, etc...'}
      </Button>

      {/* Primeiro Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW="40vw"
          mx="auto"
          my="auto"
        >
          <ModalCloseButton />
          <ModalHeader>Busca</ModalHeader>
          <ModalBody>
            <FormControl>
              <Input 
                placeholder='Buscar por área' 
                value={inputValue} 
                onChange={handleInputChange}
              />
              <List spacing={2} mt={2}>
                {suggestions
                  .filter(suggestion => suggestion.toLowerCase().includes(inputValue.toLowerCase()))
                  .map(suggestion => (
                    <ListItem 
                      key={suggestion} 
                      onClick={() => handleSelectSuggestion(suggestion)} 
                      cursor="pointer"
                      _hover={{ backgroundColor: "gray.100" }}
                      padding="5px"
                      borderRadius="5px"
                    >
                      {suggestion}
                    </ListItem>
                  ))}
              </List>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Segundo botão que abre o segundo modal */}
      {showNewButton && (
        <>
          <Button 
            onClick={onNewModalOpen} 
            mt='7'
            leftIcon={<MdLocationOn />} // Ícone de localização
            w='1000px' h='40px'
            backgroundColor='white'
            borderRadius='50px'
            justifyContent='flex-start'
            textAlign='left'
            fontSize='15px'
          >
            {selectedState || 'Localização'}
          </Button>

          {/* Segundo Modal */}
          <Modal isOpen={isNewModalOpen} onClose={onNewModalClose}>
            <ModalOverlay />
            <ModalContent
              maxW="40vw"
              mx="auto"
              my="auto"
            >
              <ModalCloseButton />
              <ModalHeader>Selecione o estado</ModalHeader>
              <ModalBody>
                <FormControl>
                  <Input 
                    placeholder='Buscar estado' 
                    value={stateInput} 
                    onChange={handleStateInputChange}
                  />
                  <List spacing={2} mt={2}>
                    {stateSuggestions
                      .filter(state => state.toLowerCase().includes(stateInput.toLowerCase()))
                      .map(state => (
                        <ListItem 
                          key={state} 
                          onClick={handleSelectState} 
                          cursor="pointer"
                          _hover={{ backgroundColor: "gray.100" }}
                          padding="5px"
                          borderRadius="5px"
                        >
                          {state}
                        </ListItem>
                      ))}
                  </List>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" colorScheme="blueGray" onClick={onNewModalClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}

      {/* Lista de especialistas */}
      {specialists.length > 0 && (
        <Box mt={5} display="flex" flexWrap="wrap" gap="10px">
          {specialists.map(specialist => (
            <Box key={specialist.id} display="flex" alignItems="center" bg="white" p={4} borderRadius="md" shadow="md" width="100%">
              <Image borderRadius="full" boxSize="50px" src={specialist.img} alt={specialist.name} mr={4} />
              <Box>
                <Box fontWeight="bold">{specialist.name}</Box>
                <Box fontSize="sm">{specialist.clinic}</Box>
              </Box>
            </Box>
          ))}
        </Box>
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
