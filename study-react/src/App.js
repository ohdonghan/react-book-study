import React,{Component} from 'react'
import LifeCycleSample from "./chapter_7/LifeCycleSample"
import ErrorBoundary from "./chapter_7/ErrorBoundary"
class App extends Component{

    state={
        color:'#000000'
    }
    getRandomColor(){
        return '#'+Math.floor(Math.random()*16777215).toString(16)
    }

    handleClick=()=>{
        this.setState({
            color:this.getRandomColor()
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
