import React from 'react';
import './App.css';

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      id: null,
      gender: null,
      height: null,
      image: null,
    }
  }
  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data.image,
          name: data.name,
          id: data.id,
          gender: data.gender,
          height: data.height,
          loadedCharacter: true,
        })
      })
    
  }
  render() {
    return (
      <div>
        {
          this.state.loadedCharacter &&
            <div>
              <img src={this.state.image} alt='name' className='pic'/>
              <h1>{this.state.name} {this.state.id}</h1>
              <h1>{this.state.gender}</h1>
              <p>{this.state.height} m</p>
            </div>
        }
        
          <button 
          type='button' 
          onClick={() => this.getNewCharacter()} 
          className='btn'>Randomize Character</button>
      </div>
    )
  }
} 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
