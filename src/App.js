import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
    return ( <
        BrowserRouter >
        <
        div className = "app_wrapper" >
        <
        Header / >
        <
        Navbar / >
        <
        div className = "app_wrapper_content" >
        <
        Route path = '/profile'
        render = {
            () => < Profile profilePage = { props.state.profilePage }
            />}/ >
            <
            Route path = '/dialogs'
            render = {
                () => < Dialogs / > }
            /> <
            /div> <
            /div> <
            /BrowserRouter>
        );
    }

    export default App;