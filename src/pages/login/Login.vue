<template>
    <el-form :model="ruleForm2" ref="ruleForm2" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h1 class="title">登录账户</h1>
        <el-form-item prop="userName">
            <el-input type="text" style="width: 7rem" class="inputValue" v-model="ruleForm2.userName" auto-complete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="Password">
            <el-input type="password" style="width: 7rem" class="inputValue" v-model="ruleForm2.Password" auto-complete="off" placeholder="请输入密码" @keyup.enter.native="handleSubmit2"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width: 100%" class="inputValue" @click.native.prevent="handleSubmit('ruleForm2')" :loading="logining">登录</el-button>
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
                userName: '',
                Password: ''
            },
            checked: true,
            rules: {
                userName: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                Password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.logining = true
                    axios.post('/api/login', {
                        username: this.ruleForm2.userName,
                        password: this.ruleForm2.Password
                    }).then(res => {
                        this.logining = false
                        console.log(res)
                        if (res.data.status === 1) {
//                            sessionStorage.setItem('token', JSON.stringify(res.data.data.token))
                          console.log(JSON.stringify(res.data.data.token))
                            axios.defaults.headers.common['token'] = JSON.stringify(res.data.data.token)
                            this.$router.push({ path: '/' })
                            location.reload()
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            })
                        }
                    })
                } else {
                    console.log('error submit!!')
                    return false
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
                width 2.5rem!important
</style>
