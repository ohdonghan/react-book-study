import React, {Component} from 'react'

class LifeCycleSample extends Component{
    state={
        number:0,
        color: null
    }
    myRef = null;

    constructor(props) {
        super(props);

        console.log('constructor');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps, nextState);

        return nextState.number %10 !==4;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        if(prevProps.color != this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);

        if(snapshot)
        {
            this.setState({
                color:snapshot
            })

            console.log("업데이트 되기 직전 색상", snapshot);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
    }

    handleClick=()=>{
        this.setState({
            number:this.state.number+1
        })
    }

    render() {
        console.log('render');

        const style={
            color:this.props.color
        }
        return(<div>
                {this.props.missing.value}
                <h1 style={style} ref={ref=>this.myRef=ref}> {this.state.number}</h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;

/*import React,{Component} from 'react'
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

export default App;*/
