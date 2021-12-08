
import Link from 'next/link'
import styles from '../styles/Navigator.module.css'

export default function Navigator(params) {
    
    return (
        <>
            <Link href = {params.destino ?? null}>

                <div className = {styles.navigator}>

                    {params.texto}
    
                </div>
            
            </Link>
        
        </>
    )
}