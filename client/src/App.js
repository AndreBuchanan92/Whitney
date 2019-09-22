import React,{Component} from 'react';
import './App.css';
import Nav from './components/Navbar';
import Map from './components/Map';
import AddLoc from './components/AddLocation';
import LocInfo from './components/LocationInfo';
import { WhitneyProvider } from './Context';
import SideContainer from './components/SideContainer.jsx';
import Axios from 'axios'
class App extends Component {
  state= {
    location:'',
    address:'',
    comments:'',
    rating:'',
    mapdata:'',
    tab:''
  }

    
    toggleTab=(data)=>{
              let setTab=data
              this.setState({tab:setTab})
          }
    handleInput=(data,val)=>{
      console.log("hit"+data)
      this.setState({
        [data]: val
      });
    }
    
    
  
  render(){
    return (
      <div className="App">
        <Nav onChange={this.handleInput} {...this.state}/>
          <Map/>
         {/* <AddLoc/>
         <LocInfo/>  */}
      </div>
    );
  }
}

export default App;
