import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialodItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    const messagesElements = props.dialogsPage.messages.map(message =>
        <Message message={message.message}/>);

    const addMessage = () => {
        props.addMessage()
    };

    const addTextMessage = (e) => {
        let text = e.target.value;
        props.addTextMessage(text)
    };


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
                        <textarea value={props.newDialogs} onChange={addTextMessage}/>
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