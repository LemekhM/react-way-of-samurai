import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar state={props.store.getState()}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}
                        // dialogsPage={props.state.dialogsPage}
                        // dispatch={props.dispatch}
                    />}
                />
                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainer/>}
                />
                <Route path='/users' render={() =>
                    <UsersContainer/>
                }
                />
                <Route path='/login' render={() =>
                    <LoginPage/>
                }
                />
            </div>
        </div>
    )
};

export default App;
