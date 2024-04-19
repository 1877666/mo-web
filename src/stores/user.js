// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'
import { userLogin } from '@/api/user'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo:{},
    token:''
  }),

  actions: {
    login(userInfo) {
      return new Promise((resolve, reject) => {
        userLogin(userInfo).then(res =>{
          this.userInfo = res.data
          resolve()
        }).catch(reject)
      })
    },
  },


  persist: {
    paths:['userInfo','token'],
  }

})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
