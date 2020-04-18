import React from 'react';
import {addMessageActionCreator, addTextMessageActionCreator} from "../../Redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//
//             let state = store.getState();
//
//             const addMessage = () => {
//                 store.dispatch(addMessageActionCreator())
//             };
//
//             const addTextMessage = (text) => {
//                 store.dispatch(addTextMessageActionCreator(text))
//             };
//
//             return <Dialogs addTextMessage={addTextMessage}
//                             addMessage={addMessage}
//                             dialogsPage={state.dialogsPage}
//                             newDialogs={state.dialogsPage.newDialogs}
//             />
//         }}
//     </StoreContext.Consumer>
//
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newDialogs: state.dialogsPage.newDialogs
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        addTextMessage: (text) => {
            dispatch(addTextMessageActionCreator(text))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;