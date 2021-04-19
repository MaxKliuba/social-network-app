import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
    return ( <
        BrowserRouter >
        <
        div className = 'app_wrapper' >
        <
        Header / >
        <
        Navbar / >
        <
        div className = 'app_wrapper_content' >
        <
        Route path = '/profile'
        component = { Profile }
        /> <
        Route path = '/dialogs'
        component = { Dialogs }
        /> <
        /div> <
        /div> <
        /BrowserRouter>
    );
}

export default App;