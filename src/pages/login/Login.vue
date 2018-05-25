<template>
    <el-form :model="ruleForm2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h1 class="title">登录账户</h1>
        <el-form-item>
            <el-input type="text" class="inputValue" v-model="ruleForm2.userName" auto-complete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" class="inputValue" v-model="ruleForm2.Password" auto-complete="off" placeholder="请输入密码" @keyup.enter.native="handleSubmit2"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width: 100%" class="inputValue" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data () {
        return {
            logining: false,
            ruleForm2: {
                userName: '15910489436',
                Password: 'e10adc3949ba59abbe56e057f20f883e'
            },
            checked: true
        }
    },
    methods: {
        handleSubmit2 () {
            this.logining = true
            axios.post('http://47.93.223.69:8066/admin/login', {
                username: this.ruleForm2.userName,
                password: this.ruleForm2.Password
            }).then(data => {
                this.logining = false
                let { msg, status } = data
                let { token } = data.data
                this.$router.push({ path: '/' })
                sessionStorage.setItem('token', JSON.stringify(token))
                if (status !== 1) {
                    this.$message({
                        message: msg,
                        type: 'error'
                    })
                } else {
                    sessionStorage.setItem('token', JSON.stringify(token))
                    this.$router.push({ path: '/' })
                    location.reload()
                }
            })
        }
    }
}

</script>

<style lang="stylus" scoped>
    .login-container
        margin: 1.7rem auto;
        width: 100%;
        padding: 35px 35px 15px 35px;
        box-sizing border-box;
        .title
            margin-bottom: 40px;
            color: #fff;
            font-size .5rem
            font-weight bolder
        .remember
            float: left
            margin: 0px 0px 35px 0px;
            .inputValue
                width 3.5rem
</style>
