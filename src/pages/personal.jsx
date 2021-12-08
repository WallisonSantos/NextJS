
import Layout from "../components/Layout"
import styles from '../styles/Home.module.css'


export default function Personal() {

    return (

        <>
            <Layout titulo = "PERFIL FUNCIONARIO">

                <div className={styles.vermelho}>

                    <h1>Dados</h1>
                    <h3>Nome: Wallison</h3>
                    <h3>Email: wallison@</h3>
                    <h3>Endereço: Rua um, Jardim Oliveiras</h3>

                </div>

            </Layout>

        </>
        
    )
}