import './App.css';
import NavBar from './components/NavBar';

const HolaApp= ()=> {return (
        <h1>Primer Proyecto en REACT</h1>
    )
}

const SubTitle = ()=>{
  return (<h2>Apartir de aqui empezamos</h2>)
}


function App() {
  return(
 <div className="App">
<NavBar/>
<HolaApp/>
<SubTitle/>
 </div> 

  )
}

export default App;
