import React, {Component} from 'react'

class iterationSample extends Component {

    state={
        names:[{id:1,text:'눈사람'},
            {id:2,text:'얼음'},
            {id:3,text:'눈'},
            {id:4,text:'바람'}],
        inputText:'',
        nextId:5
    }

    onChange=(e)=>{
        this.setState({
            inputText:e.target.value
        });
    }

    addNames=()=>{
        const nextNames=this.state.names.concat({id:this.state.nextId,
            text:this.state.inputText});
        this.setState({
            names:nextNames,
            inputText:'',
            nextId:this.state.nextId+1
        });
        console.log(nextNames)
        console.log(this.state.names)
    }

    removeName=(id)=>{
        const nextNames = this.state.names.filter(name=>name.id !==id);
        this.setState({
            names:nextNames,
            inputText:'',
            nextId:this.state.nextId
        });
        console.log(this.namesList)
        console.log(this.state.names)
    }

    namesList = this.state.names.map(name=>(
        <li key={name.id} onDoubleClick={()=>this.removeName(name.id)}>{name.text}</li>
    ));

    render() {
        return(
            <div>
                <input value={this.state.inputText} onChange={this.onChange}/>
                <button onClick={this.addNames}>추가</button>
                <ul>{this.namesList}</ul>
            </div>
        );
    }
}

export default iterationSample;