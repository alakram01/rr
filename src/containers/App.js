import React, {Component} from "react";
import CardList from "../components/CardList";
import {robots} from '../robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

 

const state ={

    robots: [],
    searchfield: '',
}

class App extends React.Component  {

        
    constructor(){
        super()
        this.state ={
            robots: robots,
    searchfield: '',
        }


    }

componentDidMount(){
    fetch({robots})
    .then(response => response.json())
        .then(users=> this.setState({robots:users}));
    

   
}

onSearchContent =(event)=>{
    this.setState({searchfield: event.target.value})
    
}


render(){
   
    const filteredRobots =this.state.robots.filter(robot=>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length ===0){
        return <h1>Loading</h1>
    }
    else{
    return (
        <div className='tc'>
        <h1 className="f1 ">ROBO - PAL</h1>
        <Searchbox searchChange ={this.onSearchContent}/>
<Scroll>
    <ErrorBoundary>
        <CardList robots = {filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        
        
        </div>

    );
    }
}
}

export default App;