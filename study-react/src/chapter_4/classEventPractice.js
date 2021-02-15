import React, {Component} from 'react'

class ClassEventPractice extends Component{
    state={
        userName:'',
        message:''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleKeyPress=(e)=> {
       if(e.key=='Enter')
       {
           alert(this.state.userName+' '+this.state.message);
           this.setState({
              userName:'',
              message:''
           });
       }
    }

    render() {
        return(<div>
            <h1>이벤트연습</h1>
                <input
                    type='text'
                    name='userName'
                    placeholder="사용자 이름"
                    value={this.state.userName}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder="메시지를 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
        </div>
        );
    }
}

export default ClassEventPractice;