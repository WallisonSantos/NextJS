import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


export default function Lista() {

    return(

        <>
            
            <Layout titulo="PARCEIROS">

                <div className={styles.vermelho}>

                    <h1>Listas de Empresas Parceiras:</h1>
                    <h3>Academia Fit - Endereço: Rua dois, Jardim Oliveiras</h3>
                    <h3>Faculdade - Endereço: Rua três, Jardim Maria</h3>
                
                </div>

            </Layout>

        </>
        
    )
}