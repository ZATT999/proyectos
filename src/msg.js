const Mensaje = (parametros) =>{
    console.log(parametros)
    return <h1 style={{color: parametros.color}}>{parametros.msg}</h1> 
  }
  export default Mensaje