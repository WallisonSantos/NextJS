import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Layout(params) {

    return (
        <>
            <div className = {styles.layout}>
               

                <div className = {styles.cabecalho}>

                    <h1>{params.titulo ?? "Mais um Exemplo"}</h1>

                    <Link href="/"> Voltar </Link>
                
                </div>




                <div className = {styles.conteudo}>

                    {params.children}

                </div>


            </div>
        </>
    )
}