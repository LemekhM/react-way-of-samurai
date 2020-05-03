import * as axios from "axios";



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '843a0101-a615-434f-a95f-5cb064fa2f54'
    }
})

export const usersAPI = {
    getUsers (numberPage, pageSize) {
        return instance.get(`users?page=${numberPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }

}


