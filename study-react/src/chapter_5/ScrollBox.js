import React,{Component} from 'react'

class ScrollBox extends Component{

    ScrollToBottom=()=>{
        const {scrollHeight,clientHeight} = this.box;

        this.box.scrollTop=scrollHeight-clientHeight;
    }
    render() {
        const style={
            border:'1px solid black',
            height:'300px',
            width:'300px',
            overflow:'auto',
            position:'relative'
        }

        const innerStyle={
            width: '100%',
            height: '650px',
            background:'linear-gradient(white,black)'
        }
        return(
            <div
                style={style}
                ref={(ref)=>{this.box=ref}}>
                <div style={innerStyle}/>
            </div>
        );
    }
}

{/* class App extends Component{

    render() {
        return (
            <div>
                <ScrollBox ref={(ref)=>this.ScrollBox=ref}/>
                <button onClick={()=> this.ScrollBox.ScrollToBottom()}>
                    맨밑으로
                </button>
            </div>
        );
    }
}

export default App;
*/}
export default ScrollBox;
