import React, {Component} from 'react';
import {robots} from './robots';
import { CardList } from './CardList';
import {SearchBox} from './SearchBox';
import {Scroll} from './Scroll';

const state={
   
}

class App extends Component {

    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }//things that can change and affect our app
    }

    componentDidMount(){
        //this.setState({robots:robots})
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
        .then(users=>{
            this.setState({robots:users})
        })
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
        
        // console.log(filteredRobots);
    }

    render(){

        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        if(this.state.robots.length===0){
            return <h1>loading</h1>
        }
        else{
            return (
                <div className='tc'> 
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                   
                </div>
            ); 
        }

        
    }
   
}

export default App;