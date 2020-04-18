import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import photo from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUsersCount(responce.data.totalCount);
        });
    }


    setNumberPage = (numberPage) => {
        this.props.setNumberPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
        });
    };

    render() {
        let totalCountPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= totalCountPages; i++) {
            pages.push(i)
        }

        return <div>
            <div className={s.paginationWrapper}>
                {pages.map(p => <span className={this.props.numberPage === p && s.selectedPage} onClick={() => {
                    this.setNumberPage(p)
                }}> {p} </span>)}
            </div>

            {
                this.props.users.map(u =>
                    <div className={s.wrapperUser}>
                        <div>
                            {u.photos.small ?
                                <img className={s.avatar} src={u.photos.small} alt="avatar"/> :
                                <img className={s.avatar} src={photo} alt="avatar"/>}

                            <div>
                                {u.followed === false ?
                                    <button onClick={() => this.props.follow(u.id)} className={s.button}>Follow</button> :
                                    <button onClick={() => this.props.unfollow(u.id)} className={s.button}>Unfollow</button>}
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
    }
}

export default Users;
