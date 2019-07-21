import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-lists/card-lists.components'
import {SearchBox} from './components/search-box/search-box.components'
class App extends Component {

  constructor(){
    super();

    this.state= {

       monsters : [
        //  {

        //  name : 'PubgMandaiyan',
        //  id : 'pubg1'
        //  },
        //  {
        //    name : 'RealVijayakanth',
        //    id : 'pubg2'
        //  },
        //  {
        //    name : 'BiriyaniBhai',
        //    id : 'pubg3'
        //  },
        // {
        //   name : 'PraveenRaj',
        //   id : 'pubg4'
        // }
      ]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({

    monsters : users,

    searchField: ''
    }));
  }
  handleChange= (e)=>{
     this.setState({searchField:e.target.value})
    };
  
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  
  return (

    

   
    <div className="App">
            <h1>Monsters Rolodex</h1>
             <SearchBox placeholder='Search Monsters' hc={this.handleChange}></SearchBox>
             <CardList monsters={filteredMonsters} ></CardList>
        </div>
        
  );
}
}

export default App;
