
import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';
/*
function App() {
  
}*/

class App extends React.Component{
  render(){
    return (
      <div className="App">
      <div className='contenedor-principal'>
      
      <h1 >Esto es lo que dicen nuestros alumnos sobre nosotros</h1>
      <Testimonio 
        nombre='Emma'
        pais='Suecia'
        imagen='emma'
        cargo='Ingenieria'
        empresa='Spotify'
        testimonio='You gotta shove these seeds way up your butt Morty waay up there Looossseeerrrrr. How do you saddle a fart The algorithm learns your preferences better that way. Plus, if you get in kind of a cool enough relationship, you can sort of follow each other and check out each others kinks you know '
      />
      <Testimonio 
        nombre='Sarah'
        pais='Uk'
        imagen='sarah'
        cargo='Ingenieria'
        empresa='Amazon'
        testimonio='You gotta shove these seeds way up your butt Morty waay up there Looossseeerrrrr. How do you saddle a fart The algorithm learns your preferences better that way. Plus, if you get in kind of a cool enough relationship, you can sort of follow each other and check out each others kinks you know '
      />
      <Testimonio 
        nombre='Shawn'
        pais='Venezuela'
        imagen='shawn'
        cargo='Ingenieria'
        empresa='Apple'
        testimonio='You gotta shove these seeds way up your butt Morty waay up there Looossseeerrrrr. How do you saddle a fart The algorithm learns your preferences better that way. Plus, if you get in kind of a cool enough relationship, you can sort of follow each other and check out each others kinks you know '
      />
      
  
      
      </div>
       
      </div>
    );

  }
}


export default App;
