'use client';

import { useRouter } from 'next/router';

const DoctorProfile = () => {
  const router = useRouter();
  const { id } = router.query;  // Pega o id da URL

  // Aqui, você pode fazer uma consulta ao banco de dados ou buscar os dados do médico com base no `id`
  // Supondo que você tenha um objeto de médico para esse exemplo:

  // Exemplo de dados do médico (substitua com dados reais)
  const doctorData = {
    1: { name: "Dr. João Silva", specialty: "Pediatra", bio: "Especialista em pediatria." },
    2: { name: "Dr. Ana Oliveira", specialty: "Cardiologista", bio: "Especialista em cardiologia." },
    // Adicione outros médicos aqui
  };

  const doctor = doctorData[id] || {};

  return (
    <div>
      <h1>{doctor.name}</h1>
      <p><strong>Especialidade:</strong> {doctor.specialty}</p>
      <p><strong>Bio:</strong> {doctor.bio}</p>
      {/* Exiba outras informações relevantes */}
    </div>
  );
};

export default DoctorProfile;
