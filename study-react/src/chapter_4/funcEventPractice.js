import React,{useState} from 'react'

const funcEventPractice=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userName,setUsername]=useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [message,setMessage]=useState('');

    const onChangeUsername = e =>setUsername(e.target.value);
    const onChangeMessage = e =>setMessage(e.target.value);

    const onKeyPress = e=>{
        if(e.key=='Enter'){
            alert(userName+''+message);
            setUsername('');
            setMessage('');
        }
    };

    return(<div>
        <h1>이벤트연습</h1>
        <input
            type='text'
            name='userName'
            placeholder="사용자 이름"
            value={userName}
            onChange={onChangeUsername}
        />
        <input
            type='text'
            name='message'
            placeholder="메시지를 입력해 보세요"
            value={message}
            onChange={onChangeMessage}
            onKeyPress={onKeyPress}
        />
    </div>
    );

};

export default funcEventPractice;