import React, { Component } from 'react';
import './reset.css'
import './App.css';
import List from './Components/List'
import Barchart from './Components/Barchart'
import Piechart from './Components/Piechart'
import BarIcon from '@material-ui/icons/Assessment'
import ListIcon from '@material-ui/icons/ViewList'
import DonutIcon from '@material-ui/icons/DonutLarge'
import routes from './routes'
import {Link} from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      analysis: {},
    }
  }

  updateInput = e => {
    this.setState({input:e.target.value})
  }

  counter = text => {
    let analysis = {}
    let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let newText = []
    for (let i = 0; i < text.length; i++) {
      if (characters.includes(text[i].toUpperCase())) { newText.push(text[i].toUpperCase()) }
    }
    newText.forEach(letter => analysis[letter] ? ++analysis[letter] : analysis[letter] = 1)
    this.setState({ analysis })
  }
  
  render() {
    console.log(this.state)
    let { analysis } = this.state
    let keys = Object.keys(analysis).sort()
    let data = keys.map((letter, i) => {
      return (
        <List key={i} letter={letter} analysis={analysis}/>
      )
    })
    return (
      <div className="App">
        <h1>Textalyzer</h1>
        <div className="inputArea">
          <textarea placeholder="Type  to textalyze..." id="" cols="30" rows="10"
            onChange={this.updateInput} ></textarea>
          <button onClick={() => this.counter(this.state.input)} >Textalyze <br/>me!</button>
        </div>
        <div className="resultsContainer">
        {data.length>0 ? <div className='icons'>
            <Link to= '/'><ListIcon style={{ color: '#29F89C', height: 45, width: 45, margin: '10px' }} /></Link>
            <Link to='/bar'><BarIcon style={{ color: '#29F89C', height: 45, width: 45, margin: '10px' }} /></Link>
            <Link to='/pie'><DonutIcon style={{ color: '#29F89C', height: 45, width: 45, margin: '10px' }} /></Link>
        </div> : null}
        {routes(analysis, keys)}  
        </div>
      </div>
    );
  }
}

export default App;
