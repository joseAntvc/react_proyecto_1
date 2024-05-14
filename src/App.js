import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Informacion acerca de unos futbolistas</h1>
        <Testimonio
          nombre='Lionel Andres Messi Cuccittini'
          pais='Argentina'
          imagen='messi'
          cargo='Delantero'
          empresa='Inter de Miami'
          testimonio='Reconocido por muchos como el mejor futbolista y uno de los mejores deportistas de todos los tiempos, ha ganado 44 títulos colectivos y más de 50 títulos individuales en su carrera. Es el jugador con más "Balones de Oro" y uno de los pocos en ganar una medalla de oro en los juegos olímpicos y un Mundial.'/>
        <Testimonio
          nombre='Xavier Hernández Creus'
          pais='España'
          imagen='xavi'
          cargo='Medio campista'
          empresa='Barcelona'
          testimonio='Su debut el 18 de agosto de 1998 a las órdenes de Louis Van Gaal fue el inicio de una trayectoria de casi dos décadas en el primer equipo. Pese a tener un debut prematuro, con 19 años ya empezó a ser un habitual del centro del campo azulgrana, llegando a convertirse en uno de los mejores centrocampistas del mundo y para muchos, uno de los mejores de la historia'/>
        <Testimonio 
          nombre='Ronaldo de Assis Moreira'
          pais='Brasil'
          imagen='dino'
          cargo='Delantero, extrama punta'
          empresa='Barcelona'
          testimonio='Hijo, sobrino y hermano de futbolistas. El más conocido, su hermano mayor Roberto de Assis, que jugó en Brasil, Suiza, Portugal y Francia, y después se convirtió en su manager. Apodado "Ronnie"o "Dinho", ha sido uno de los pocos jugadores del Barça aplaudidos en el Santiago Bernabéu. Se le considera el gran artífice del resurgimiento futbolístico del Barça a principios del siglo XXI.'/>
      </div>
    </div>
  );
}

export default App;