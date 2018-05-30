<template>
    <el-form :model="ruleForm2" ref="ruleForm2" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h1 class="title">登录账户</h1>
        <el-form-item prop="userName">
            <el-input type="text" style="width: 100%" class="inputValue" v-model="ruleForm2.userName" auto-complete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="Password">
            <el-input type="password" style="width: 100%" class="inputValue" v-model="ruleForm2.Password" auto-complete="off" placeholder="请输入密码" @keyup.enter.native="handleSubmit2"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
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
            checked: false,
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
            let name = this.ruleForm2.userName
            let pass = this.ruleForm2.Password
            if (this.checked === true) {
                this.setCookie(name, pass, 7)
            } else {
                this.clearCookie()
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.logining = true
                    axios.post('/api/login', {
                        username: this.ruleForm2.userName,
                        password: this.ruleForm2.Password
                    }).then(res => {
                        this.logining = false
                        if (res.data.status === 1) {
                            axios.defaults.headers.common['token'] = res.data.data.token
                            localStorage.setItem('token', JSON.stringify(res.data.data.token))
                            this.$router.push({ path: '/' })
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
        },
        setCookie (name, pass, exdays) {
            let exdate = new Date()
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)
            window.document.cookie = 'userName' + '=' + name + ';path=/;expires=' + exdate.toGMTString()
            window.document.cookie = 'userPwd' + '=' + pass + ';path=/;expires=' + exdate.toGMTString()
        },
        getCookie () {
            let arr = window.document.cookie.split('; ')
            for (let i = 0; i < arr.length; i++) {
                let arr2 = arr[i].split('=')
                console.log(arr2)
                if (arr2[0] === 'userName') {
                    this.ruleForm2.userName = arr2[1]
                } else if (arr2[0] === 'userPwd') {
                    this.ruleForm2.Password = arr2[1]
                }
            }
        },
        clearCookie () {
            this.setCookie('', '', -1)
        },
        rememberCookie () {
            this.checked = false
            this.ruleForm2.userName = ''
            this.ruleForm2.Password = ''
            if (window.document.cookie.length > 0) {
                this.getCookie()
                this.checked = true
            } else {
                this.checked = false
            }
        }
    },
    mounted () {
        this.rememberCookie()
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
