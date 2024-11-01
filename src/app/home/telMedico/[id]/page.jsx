"use client"; // Mark the component as a Client Component

import { useRouter } from 'next/navigation'; // Use next/navigation instead
import { useEffect, useState } from 'react';
import { Box, Heading, Text, Image, Center, Spinner, ChakraProvider } from "@chakra-ui/react";

const MedicoDetalhes = () => {
  const router = useRouter();
  const { id } = router.query || {}; // Safely destructure id
  const [specialist, setSpecialist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se o ID está disponível
    if (id) {
      console.log("ID:", id); // Log the id for debugging
      
      // Simulação de dados estáticos
      const exampleSpecialists = [
        { id: 1, name: 'Dr. João Silva', clinic: 'Clínica A', specialty: 'Urologista', state: 'SP', description: 'Especialista com 20 anos de experiência', img: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Dra. Maria Oliveira', clinic: 'Clínica B', specialty: 'Urologista', state: 'SP', description: 'Expert em tratamentos minimamente invasivos', img: 'https://via.placeholder.com/150' }
      ];

      const foundSpecialist = exampleSpecialists.find(spec => spec.id === parseInt(id));
      console.log("Specialist Found:", foundSpecialist); // Log the found specialist for debugging
      setSpecialist(foundSpecialist);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!specialist) {
    return (
      <Center h="100vh">
        <Text fontSize="xl">Médico não encontrado</Text>
      </Center>
    );
  }

  return (
    <ChakraProvider>
      <Center h="100vh" p={4}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="lg">
          <Image src={specialist.img} alt={specialist.name} borderRadius="md" mb={4} />
          <Heading as="h1" size="lg" mb={4}>{specialist.name}</Heading>
          <Text fontWeight="bold">Especialidade:</Text>
          <Text mb={2}>{specialist.specialty}</Text>
          <Text fontWeight="bold">Clínica:</Text>
          <Text mb={2}>{specialist.clinic}</Text>
          <Text fontWeight="bold">Estado:</Text>
          <Text mb={2}>{specialist.state}</Text>
          <Text fontWeight="bold">Descrição:</Text>
          <Text>{specialist.description}</Text>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default MedicoDetalhes;
