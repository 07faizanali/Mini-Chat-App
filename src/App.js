import './App.css';

import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App =() =>{

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
        height="100vh"
        projectID="8f753a22-98d7-45fe-9b1f-5882839aa660"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')} 
        renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} /> }
        />
    )
}

export default App;