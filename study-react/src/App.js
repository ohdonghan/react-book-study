import React,{Component} from 'react'
import ScrollBox from "./chapter_5/ScrollBox"

class App extends Component{

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
