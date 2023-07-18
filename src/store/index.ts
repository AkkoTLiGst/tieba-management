import {defineStore} from 'pinia';
import {userType} from "../types";
import {reactive} from "vue";

export const userStore = defineStore(
    'User',
    () => {
        const user: userType = reactive<userType>({
            name: '',
            uid: ''
        })

        // 存储用户信息
        function saveUserData(data: userType) {
            Object.assign(user, data);
        }

        return {user, saveUserData};
    },
    {
        persist: true
    }
)