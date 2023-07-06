<template>
  <div class="login-box">
    <div class="login-title">用户登录</div>
    <div class="login-form">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :style="{ width: '100%' }" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-for="it in count" :key="it" :style="getCircle()" class="item-box"></div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  username: '',
  password: ''
})
const count = ref(Math.floor(Math.random() * 15 + 20))
console.log(count.value)
type style = {
  position: string
  top: string
  left: string
  width: string
  height: string
  backgroundColor: string
}
function getCircle(): style {
  const x = Math.random() * 85 + 5 + '%'
  const y = Math.random() * 85 + 5 + '%'
  const r = Math.random() * 40 + 40
  const color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`
  return {
    position: 'absolute',
    top: y,
    left: x,
    width: 2 * r + 'px',
    height: 2 * r + 'px',
    backgroundColor: color
  }
}
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const login = () => {
  console.log(form)
}
</script>

<style lang="scss" scoped>
.login-box {
  height: 100%;
  width: 100%;
  background-color: rgba(177, 177, 177, 0.575);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .login-title {
    position: absolute;
    top: calc(50% - 180px);
    left: calc(50% - 40px);
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 20px;
    z-index: 3;
  }
  .login-form {
    position: absolute;
    top: calc(50% - 200px);
    padding-top: 120px;
    padding-right: 40px;
    padding-bottom: 60px;
    width: 400px;
    background-color: rgba(231, 231, 231, 0.452);
    border-radius: 20px;
    backdrop-filter: blur(5px);
    z-index: 2;
  }
  .item-box {
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  }
}
</style>
