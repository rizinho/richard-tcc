import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
    return(
        <div className="container">
        <h1>Lista Teste</h1>
        <Link href="/home"               > <p className={styles.linkTemp}>Inicio</p>              </Link>
        <Link href="/home/liMedico"      > <p className={styles.linkTemp}>Lista de medicos</p>    </Link>
        <Link href="/home/liPaciente"    > <p className={styles.linkTemp}>Lista pacientes</p>     </Link>
        <Link href="/home/telAgen"       > <p className={styles.linkTemp}>Tela de agendamento</p> </Link>
        <Link href="/home/telMedico"     > <p className={styles.linkTemp}>Tela de medico</p>      </Link>
        <Link href="/home/telMensa"      > <p className={styles.linkTemp}>Tela de Mensagens</p>   </Link>
        <Link href="/usuarios/cadCliente"> <p className={styles.linkTemp}>Cadastro do cliente</p> </Link>
        <Link href="/usuarios/cadMedico" > <p className={styles.linkTemp}>Cadastro do medico</p>  </Link>
        <Link href="/usuarios/login"     > <p className={styles.linkTemp}>Login</p>               </Link>
        </div>
    )
}