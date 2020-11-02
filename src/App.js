import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state ={
      monsters:[],
      searchField:''
    };
  }
changeHandler = e=>
{
  this.setState({searchField:e.target.value},()=>console.log(this.state.searchField))
}
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users=>this.setState({monsters:users}));
}
render(){
  const{monsters,searchField}=this.state;
  const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return(
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeHolder='Search monsters' changeHandler={this.changeHandler}
      />
        <CardList monsters={filteredMonsters}/>
        </div>
      );
}
}
export default App;
