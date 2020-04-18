import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    setNumberPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../Redax/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        numberPage: state.usersPage.numberPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id) => {
            dispatch(unFollowActionCreator(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setNumberPage: (page) => {
            dispatch(setNumberPageActionCreator(page))
        },
        setTotalUsersCount: (users) => {
            dispatch(setTotalUsersCountActionCreator(users))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);