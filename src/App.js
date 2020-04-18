import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.store.getState()}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}
                        // dialogsPage={props.state.dialogsPage}
                        // dispatch={props.dispatch}
                    />}
                />
                <Route path='/profile' render={() =>
                    <Profile store={props.store}
                    />}
                />
                <Route path='/users' render={() =>
                    <UsersContainer/>
                }
                />
            </div>
        </div>
    )
};

export default App;
