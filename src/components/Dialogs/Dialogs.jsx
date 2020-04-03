import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialodItem';
import Message from './Message/Message'
import {addMessageActionCreator, addTextMessageActionCreator} from "../../Redax/dialogs-reducer";



const Dialogs = (props) => {

    // const newMessageElem = React.createRef();

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    };

    const addTextMessage = (e) => {
        let text = e.target.value;
        // let text = newMessageElem.current.value;
        props.dispatch(addTextMessageActionCreator(text))
    };


    const dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    const messagesElements = props.dialogsPage.messages.map(message =>
        <Message message={message.message}/>);


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div>
                    <div className={s.messages}>
                        {messagesElements}
                    </div>
                    <div>
                        <textarea  value={props.dialogsPage.newDialogs} onChange={addTextMessage}/>
                        <div>
                            <button onClick={addMessage}>Send</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default Dialogs;