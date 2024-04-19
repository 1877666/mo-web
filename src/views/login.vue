<template>
    <div class=" w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-200 max-[650px]:from-indigo-300">
      <div>
        <p class="text-center text-3xl font-bold mb-6 text-gray-600" >欢迎登陆</p>
      <div class="flex items-center " >
        <div class="h-[40vh] rounded-tl-xl rounded-bl-xl overflow-hidden shadow-lg max-[650px]:hidden">
          <img class="h-full" src="../assets/images/login.jpg" alt="">
        </div>
        <div class="w-[40vh] h-[40vh] bg-white rounded-tr-xl rounded-br-xl shadow-lg max-[650px]:rounded-xl">
          <el-form
          ref="ruleFormRef"
          :model="loginInfo"
          :rules="rules"
          class="px-8 h-full flex flex-col justify-center max-[650px]:px-4"
          >
          <el-form-item class="mt-20" label="账号" prop="username">
            <el-input v-model="loginInfo.username">
              <template #prefix>
                <User />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginInfo.password" show-password>
              <template #prefix>
                <Lock size="18" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="mt-auto mb-10">
            <el-button  class="mx-auto " type="primary" @click='login'>登陆</el-button>
          </el-form-item>
          </el-form>
        </div>
      </div>
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import User from '@/assets/icon/user.vue'
import Lock from '@/assets/icon/lock.vue'
import { useUserStore } from '@/stores/user';
import md5 from 'md5';
import {message} from '@/uilts/message'
import { useRouter } from 'vue-router';
const ruleFormRef = ref(null)
const router = useRouter()
const loginInfo = ref({
  username:'admin',
  password:'123456'
})
const rules = []

const login = () =>{
  useUserStore().login({
    username:loginInfo.value.username,
    password:md5(loginInfo.value.password)
  }).then(res =>{
    message('登陆成功')
    //router.push('/')
  })
}
</script>

<style lang="postcss" scoped>

</style>