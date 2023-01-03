import './App.css';
import NavBar from './components/NavBar';
import Buttom from "./components/Buttom"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
const HolaApp= ()=> {return (
        <h1>Primer Proyecto en REACT</h1>
    )
}

const SubTitle = ()=>{
  return (<h2>Apartir de aqui empezamos</h2>)
}


function App() {
  return(
 <div className="App" >
<NavBar/>
<HolaApp/>
<SubTitle/>
<Buttom/>
<ItemListContainer gretting="Bienvenido a la tienda" user="Jhoan" />
 </div> 

  )
}

export default App;
