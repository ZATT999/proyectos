import './App.css';
import Mensaje from './msg';

const Resumen = () =>{
  return <strong>estamos en desarrollo</strong> 
}

function App() {

  return (
    <div className="App">
     <Mensaje color="red" msg='estos en barranca' />
     <Mensaje color="green" msg='con mucha calor' />
     <Mensaje color="yellow" msg='actual mente a 40 grados' />
     <Resumen />    
    </div>
  );
}

export default App;
