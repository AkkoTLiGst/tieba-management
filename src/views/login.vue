<template>
  <div class="login">
    <div class="loginForm">
      <div class="formName">贴吧后台管理系统</div>
      <div class="userInput">
        <el-form :model="param" :rules="rules" ref="login">
          <el-form-item prop="username">
            <el-input
                :prefix-icon="User"
                placeholder="用户名"
                v-model="param.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop='password'>
            <el-input
                :prefix-icon="Lock"
                type="password"
                placeholder="密码"
                v-model="param.password"
                @keyup.enter="loginSubmit(login)"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="loginSubmit(login)">登录</el-button>
      </div>
      <div class="tips"><span>Tips：用户名admin和密码123</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Lock, User} from '@element-plus/icons-vue';
import {FormInstance, FormRules} from "element-plus";
import {reactive, ref} from "vue";
import {adminLogin, userData} from "../server/apis/login.ts";
import {userType} from "../types";
import {userStore} from "../store";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";

// el-form校验规则
const rules: FormRules = {
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '必须输入密码', trigger: 'blur'},
    {min: 3, max: 20, message: '密码长度在 3 到 20 个字符', trigger: 'blur'},
  ]
}

// 用户输入的用户名和密码
const param = reactive({
  username: '',
  password: ''
})

// 用于手动验证表单
const login = ref<FormInstance>()

const store = userStore();
const router = useRouter();

// 登录事件
const loginSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  formEl.validate(async (valid: boolean) => {
    // 如果表单校验成功（不是登录成功，是符合上面的rules）
    if (valid) {
      // 发起登录请求
      const getToken: { token: string } = await adminLogin(`uid:${param.username}`, param.password);
      if(getToken.token){
        ElMessage.success('登录成功')
        localStorage.setItem('adminToken', getToken.token);
        // token获取用户信息
        const data: userType = await userData(getToken.token);
        store.saveUserData(data);
        await router.push('/');
      }
    }
  })
}
</script>

<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/loginbg.jpg");
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginForm {
    width: 350px;
    background-color: rgba(white, .6);
    border-radius: 5px;
    margin-bottom: 50px;

    .formName {
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid white;
    }

    .userInput {
      padding: 30px;

      :deep(.el-input) {
        margin-bottom: 5px;
      }

      :deep(.el-button) {
        width: 100%;
      }
    }

    .tips {
      padding: 0 30px 30px;
      font-size: 12px;
    }

  }
}
</style>