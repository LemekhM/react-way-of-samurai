import React from 'react';
import s from './Users.module.css';
import photo from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let totalCountPages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= totalCountPages; i++) {
        pages.push(i)
    }
    return <div>
        <div className={s.paginationWrapper}>
            {pages.map(p => <span className={props.numberPage === p && s.selectedPage} onClick={() => {
                props.setNumberPage(p)
            }}> {p} </span>)}
        </div>
        {
            props.users.map(u =>
                <div className={s.wrapperUser}>
                    <div>
                        <NavLink to={'/profile/' + u.id} activeClassName={s.activeLink}>
                            {u.photos.small ?
                                <img className={s.avatar} src={u.photos.small} alt="avatar"/> :
                                <img className={s.avatar} src={photo} alt="avatar"/>}
                        </NavLink>
                        <div>
                            {u.followed === false ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                    // props.toggleFollowingInProgress(true, u.id)
                                    // usersAPI.follow(u.id)
                                    //     .then(responce => {
                                    //         if (responce.data.resultCode === 0) {
                                    //             props.followSuccess(u.id)
                                    //         }
                                    //         props.toggleFollowingInProgress(false, u.id)
                                    //     });
                                }} className={s.button}>Follow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>{
                                    props.unfollow(u.id)
                                    // props.toggleFollowingInProgress(true, u.id)
                                    // usersAPI.unfollow(u.id)
                                    //     .then(responce => {
                                    //         if (responce.data.resultCode === 0) {
                                    //             props.unfollowSuccess(u.id)
                                    //         }
                                    //         props.toggleFollowingInProgress(false, u.id)
                                    //     });
                                }} className={s.button}>Unfollow</button>}
                        </div>
                    </div>

                    <div className={s.wrapperUserData}>
                        <div>
                            <p>{u.name}</p>
                            <p>{u.status}</p>
                        </div>
                        <div>
                            <p>{"u.location.country"}</p>
                            <p>{"u.location.city"}</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
};


export default Users;