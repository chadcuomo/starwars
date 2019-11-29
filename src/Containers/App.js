import React, { Component } from 'react';
import apiCall from '../API/api';
import * as apiRoutes from '../API/api_routes';
import CardList2 from '../Components/CardList/CardList2';
import Searchbox from '../Components/Searchbox/Searchbox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    
    apiCall(apiRoutes.REQ_PERSON)
    .then(people => this.setState({ people: people.results }))
    };
  

  
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
   

    const filteredPeople = this.state.people.filter(filtpeople => {
      return filtpeople.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="App">
        <h1>StarWars</h1>
        <h2>Character Profiles</h2>
        <div>
          <Searchbox searchChange={this.onSearchChange} />
          <CardList2 people={filteredPeople} />
        </div>
      </div>
    );
  }
}
    
  
export default App;
