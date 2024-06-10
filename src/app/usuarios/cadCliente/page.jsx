'use client'

import { useState } from 'react';

import { IMaskInput } from "react-imask";

import { useRouter } from 'next/navigation';

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";



export default function Cadastro() {

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState();
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  
  const router = useRouter()

  function handleSubmit(event) { 
    valida();
    event.preventDefault();
}

  function valida () {
    let validado = true;
  }

  return (


    <div className={styles.main}>
      <header>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              className={styles.icon}
              src="/logotcc.png"
              width={500}
              height={500}
              alt="Imagem do logo"
            />
            <h1 className={styles.txtLog}>Consult Doctor</h1>
          </div>

        </div>
      </header>

      <h1 className={styles.tit}>FAÇA SEU CADASTRO</h1>
      
      <div className={styles.form}>
        <form className={styles.form1} onSubmit={handleSubmit}>

          <div>
            <input className={styles.inp}
              type='text' value={nomeCompleto}
              placeholder='Nome Completo:'
              onChange={(e) => setNomeCompleto(e.target.value)}

            />
          </div>

          <div>
            <input className={styles.inp}
              type="email" value={email}
              placeholder='E-mail:'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>

            <input className={styles.inp}
              type="password" value={senha}
              placeholder='Senha:'
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div>
            
          <IMaskInput className={styles.inp}
            value={cpf}
            mask="000.000.000-00"
            placeholder='CPF:(Somente Números)'
            onChange={e => setCpf(e.target.value)}
          />


          </div>

          <div>

          <IMaskInput className={styles.inp}
            value={telefone}
            mask="(00) 00000-0000"
            placeholder='Numero do telefone:'
            onChange={e => setTelefone(e.target.value)}

          />


          </div>

          <div >
            <input className={styles.inp1} type="text" value={cidade} placeholder='Cidade:' onChange={(e) => setCidade(e.target.value)}  />
            <input className={styles.inp2} type="text" value={estado} placeholder='Estado:' onChange={(e) => setEstado(e.target.value)}  />
          </div>


          <div>
          <IMaskInput className={styles.date}
            mask="00/00/0000"
            value={dataNascimento}
            placeholder='Data do Nascimento:'
            onChange={(e) => setDataNascimento(e.target.value)}
          />

            <select className={styles.genero} value={genero} onChange={(e) => setGenero(e.target.value)}>
              <option value="">Selecione o Gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <button className={styles.cad} type="submit">Cadastrar</button>

        </form>
      </div>

      <footer className={styles.roda}>
        &copy; 2024 ConsultDoctor.com - Todos os direitos reservados
      </footer>

    </div>
  );
};

