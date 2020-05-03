import {usersAPI} from "../api/api";const FOLLOW = 'FOLLOW';const UNFOLLOW = 'UNFOLLOW';const SET_USERS = 'SETSTATE';const SET_NUMBER_PAGE = 'SET-NUMBER-PAGE';const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USER-COUNT';const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'export const followSuccess = (userId) => ({type: FOLLOW, userId});export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});export const setUsers = (users) => ({type: SET_USERS, users});export const setNumberPage = (page) => ({type: SET_NUMBER_PAGE, page});export const setTotalUsersCount = (users) => ({type: SET_TOTAL_USERS_COUNT, users});export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});export const toggleFollowingInProgress = (inProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, inProgress, userId})let initialState = {    users: [],    totalUsersCount: 0,    pageSize: 100,    numberPage: 1,    isFetching: false,    followingInProgress: []};const usersReducer = (state = initialState, action) => {    switch (action.type) {        case FOLLOW: {          return {              ...state,              users: state.users.map(u => {                   if (u.id === action.userId) {                      return {...u, followed: true}                  }                   return u              })          }        }        case UNFOLLOW: {            return {                ...state,                users: state.users.map(u => {                    if (u.id === action.userId) {                        return {...u, followed: false}                    }                    return u                })            }        }        case SET_USERS: {            return {                ...state, users: action.users            }        }        case SET_NUMBER_PAGE: {            return {                ...state, numberPage: action.page            }        }        case SET_TOTAL_USERS_COUNT: {            return {                ...state, totalUsersCount: action.users            }        }        case TOGGLE_IS_FETCHING: {            return {                ...state, isFetching: action.isFetching            }        }        case TOGGLE_IS_FOLLOWING_PROGRESS: {            return {                ...state,                followingInProgress: action.inProgress ? [...state.followingInProgress, action.userId] :                    state.followingInProgress.filter(id => id !== action.userId)            }        }        default:            return state    }};export const getUsers = (numberPage, pageSize) => (dispatch) => {    dispatch(setIsFetching(true))    dispatch(setNumberPage(numberPage))    usersAPI.getUsers(numberPage, pageSize).then(data => {        dispatch(setUsers(data.items));        dispatch(setTotalUsersCount(data.totalCount));        dispatch(setIsFetching(false));    });}export const follow = (userId) => (dispatch) => {    dispatch(toggleFollowingInProgress(true, userId))    usersAPI.follow(userId)        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {        //     withCredentials: true,        //     headers: {        //         'API-KEY': '843a0101-a615-434f-a95f-5cb064fa2f54'        //     }        // })        .then(responce => {            if (responce.data.resultCode === 0) {                dispatch(followSuccess(userId))            }            dispatch(toggleFollowingInProgress(false, userId))        });}export const unfollow = (userId) => (dispatch) => {    dispatch(toggleFollowingInProgress(true, userId))    usersAPI.unfollow(userId)        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {        //     withCredentials: true,        //     headers: {        //         'API-KEY': '843a0101-a615-434f-a95f-5cb064fa2f54'        //     }        // })        .then(responce => {            if (responce.data.resultCode === 0) {                dispatch(unfollowSuccess(userId))            }            dispatch(toggleFollowingInProgress(false, userId))        });}export default usersReducer;