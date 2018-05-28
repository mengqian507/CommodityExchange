<template>
    <div class="home">
        <h1 class="header">热门推荐</h1>
        <div class="loginOut" @click="loginOutClick">退出</div>
        <home-list :list="CommodityList"></home-list>
        <!--弹框-->
        <div class="model">
            <div class="md-modal modal-msg md-modal-transition" v-if="mdShow1">
                <div class="md-modal-inner">
                    <div class="md-content" style="margin-top: 20px;">
                        <div class="confirm-tips">
                            确定要退出？
                        </div>
                        <div class="btn-wrap">
                            <button class="cancel" @click="handleCancel">取消</button>
                            <button class="confirm" @click="handleConfirm">确认</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--遮罩层-->
            <div class="md-overlay" v-if="mdShow2"></div>
        </div>
    </div>
</template>

<script>
import HomeList from './components/List'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HomeList
    },
    data () {
        return {
            CommodityList: [],
            mdShow1: false,
            mdShow2: false
        }
    },
    mounted () {
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/goods')
                .then(res => {
                    if (res.data.status === 1 && res.data.data) {
                        const data = res.data.data
                        this.CommodityList = data.list
                    } else if (res.data.status === 300011) {
                        this.$router.forward('/login')
                    } else {
                        alert(res.data.msg)
                    }
                })
        },
        loginOutClick () {
            this.mdShow1 = true
            this.mdShow2 = true
        },
        handleConfirm () {
            axios.post('/api/logout')
                .then(res => {
                    if (res.data.status === 1) {
                        this.mdShow1 = false
                        this.mdShow2 = false
                        this.$router.push({ path: '/login' })
                    } else {
                        console.log(res.data.msg)
                    }
                })
        },
        handleCancel () {
            this.mdShow1 = false
            this.mdShow2 = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .header
        font-style oblique
        color #fff
        font-size .5rem
        font-weight bolder
        margin-top .3rem
    .loginOut
        display inline-block
        width .8rem
        height .4rem
        line-height .4rem
        background #ff654f
        color #fff
        border-radius .1rem
        font-size .24rem
        position fixed
        top .3rem
        right .3rem
        z-index 99
    .model
        .md-modal
            position fixed
            width 6rem
            height 2.5rem
            background #252933
            left 50%
            top 45%
            transform translate(-50%,-50%)
            z-index 999
            border-radius .3rem
            border 3px solid #2c3038
            .confirm-tips
                font-size .4rem
                color #fff
                margin .5rem 0 .5rem 0
            .btn-wrap
                display flex
                justify-content space-around
                .cancel, .confirm
                    border-radius .07rem
                    font-size .34rem
                    background #4e505d
                    color #fff
                    width 2.3rem
                    height .8rem
                    &.confirm
                        background #ee5040
        .md-overlay
            background #000
            opacity 0.7
            width 100%
            height 100%
            position fixed
            top 0
            left 0
            right 0
            z-index 99
</style>
