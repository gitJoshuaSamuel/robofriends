import React, {Component} from 'react';
import {robots} from './robots';
import { CardList } from './CardList';
import {SearchBox} from './SearchBox';
import {Scroll} from './Scroll';
import {setSearchField,requestRobots} from './action.js';
import {connect} from 'react-redux';
// import { requestRobots } from './reducers';

// const state={
   
// }

const mapStateToProps=state=>{
    return{
        searchField:state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestRobots())
    }
}

class App extends Component {


    componentDidMount(){
        this.props.onRequestRobots();
    }

   

    render(){
        
        const {searchField,onSearchChange,robots,isPending}=this.props;
        const filteredRobots=robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        });

        
            return isPending? <h1>loading</h1>:
            (
                <div className='tc'> 
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                   
                </div>
            ); 
        

        
    }
   
}

export default connect(mapStateToProps,mapDispatchToProps)(App);