import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    setNumberPage,
    setUsers,
    toggleFollowingInProgress,
    unfollow
} from '../../Redax/users-reducer';
import Preloader from "../common/Preloader/Preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.numberPage, this.props.pageSize)
    }


    setNumberPage = (numberPage) => {
        this.props.getUsers(numberPage, this.props.pageSize)
        // this.props.setIsFetching(true);
        // this.props.setNumberPage(numberPage);
        // usersAPI.getUsers(numberPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setIsFetching(false);
        //     });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users setNumberPage={this.setNumberPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   numberPage={this.props.numberPage}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        numberPage: state.usersPage.numberPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followActionCreator(id))
//         },
//         unfollow: (id) => {
//             dispatch(unFollowActionCreator(id))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setNumberPage: (page) => {
//             dispatch(setNumberPageActionCreator(page))
//         },
//         setTotalUsersCount: (users) => {
//             dispatch(setTotalUsersCountActionCreator(users))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingActionCreator(isFetching))
//         }
//     }
// };


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setNumberPage,
    toggleFollowingInProgress,
    getUsers
})(UsersContainer);