import { useRouter } from 'next/router';

const MedicoDetalhes = () => {
  const router = useRouter();
  const { id } = router.query;

  // Aqui você pode buscar os detalhes do médico com base no `id`
  // Exemplo de dados estáticos para o médico
  const exampleSpecialists = [
    { id: 1, name: 'Dr. João Silva', clinic: 'Clínica A', specialty: 'Urologista', state: 'SP', description: 'Especialista com 20 anos de experiência', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Dra. Maria Oliveira', clinic: 'Clínica B', specialty: 'Urologista', state: 'SP', description: 'Expert em tratamentos minimamente invasivos', img: 'https://via.placeholder.com/150' }
  ];

  const specialist = exampleSpecialists.find(specialist => specialist.id === parseInt(id));

  if (!specialist) {
    return <div>Médico não encontrado</div>;
  }

  return (
    <div>
      <h1>{specialist.name}</h1>
      <img src={specialist.img} alt={specialist.name} />
      <p>Especialidade: {specialist.specialty}</p>
      <p>Clínica: {specialist.clinic}</p>
      <p>{specialist.description}</p>
    </div>
  );
};

export default MedicoDetalhes;
