import Navigator from "../components/Navigator"

export default function Index() {
  
  function subtitulo(params) {
    return <h2>"{params.toString()}"</h2>
  }


 

  // Aplicação de HTML diretamente no código JavaScript
  return(

    <> 
      
      <Navigator destino="/lista" texto="@LISTA DE PARCEIROS"/>
      <Navigator destino="/personal" texto="@DADOS FUNCIONARIOS"/>

    
    </>

  )
}