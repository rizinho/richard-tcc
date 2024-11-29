import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
    return(
        

        <div className={styles.container}>



        <h1>Lista Teste</h1>
        <Link href="/home"               > <p className={styles.linkTemp}>Inicio</p>              </Link><br/>
        {/* <Link href="/home/liMedico"      > <p className={styles.linkTemp}>Lista de medicos</p>    </Link><br/>
        <Link href="/home/liPaciente"    > <p className={styles.linkTemp}>Lista pacientes</p>     </Link><br/> */}
        <Link href="/home/telAgen"       > <p className={styles.linkTemp}>Tela de perfis</p> </Link><br/>
        <Link href="/home/telMedico"     > <p className={styles.linkTemp}>Tela de medico</p>      </Link><br/>
        {/* <Link href="/home/telMensa"      > <p className={styles.linkTemp}>Tela de Mensagens</p>   </Link><br/>  excluido */}
        <Link href="/usuarios/cadCliente"> <p className={styles.linkTemp}>Cadastro do cliente</p> </Link><br/>
        <Link href="/usuarios/cadMedico" > <p className={styles.linkTemp}>Cadastro do medico</p>  </Link><br/>
        {/* <Link href="/perfil/medico"      > <p className={styles.linkTemp}>Perfil medico</p>       </Link><br/> */}
        <Link href="/usuarios/login"     > <p className={styles.linkTemp}>Login</p>               </Link><br/>
        <Link href="/duvidas"            > <p className={styles.linkTemp}>duvidas Frequentes</p>  </Link>

        <Link href="/padrao/header"      > <p className={styles.linkTemp}>header</p>              </Link><br/>
        <Link href="/padrao/footer"      > <p className={styles.linkTemp}>footer</p>              </Link>
        
 

        </div>
        
        
    )
}