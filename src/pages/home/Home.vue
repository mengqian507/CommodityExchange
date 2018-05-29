<template>
    <div class="home">
        <div class="header">
            <h1 class="title">商品列表</h1>
            <div class="loginOut" @click="loginOutClick">退出</div>
            <div class="search">
                <div class="search-content">
                    <span class="iconfont">&#xe632;</span>
                    <input @change="changePosts()" type="text" v-model="keyword" class="header-input" placeholder="请输入商品名称">
                </div>
                <button type="button" class="btn" @click="getHomeInfo">搜索</button>
            </div>
        </div>
        <home-list :list="CommodityList" style="margin-top: 1.8rem"></home-list>
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
            mdShow2: false,
            keyword: ''
        }
    },
    mounted () {
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/goods', {
                params: {
                    offset: 0,
                    limit: 100000,
                    goodsName: this.keyword
                }
            }).then(res => {
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
        },
        changePosts () {
            if (this.keyword === '') {
                this.getHomeInfo()
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .header
        position fixed
        top 0
        left 0
        right 0
        width 100%
        z-index 99
        background #171722
        padding-bottom .2rem
        .title
            font-style oblique
            color #fff
            font-size .4rem
            font-weight bolder
            margin .3rem 0 0.2rem 0
        .loginOut
            display inline-block
            width .8rem
            height .4rem
            line-height .43rem
            background #f46061
            color #fff
            border-radius .1rem
            font-size .24rem
            position fixed
            top .2rem
            right .6rem
            z-index 99
        .search
            display flex
            .search-content
                margin-top .1rem
                width 80%
                position relative
                .iconfont
                    display inline-block
                    position absolute
                    top .14rem
                    left .5rem
                .header-input
                    width 90%
                    height .64rem
                    line-height .64rem
                    border-radius .1rem
                    padding-left .6rem
                    box-sizing border-box
                    background #707381
            .btn
                width 1rem
                height .64rem
                border-radius .1rem
                line-height .64rem
                text-align center
                margin .1rem 0 0 .1rem
                background rgba(70, 72, 86, 0.81)
                color rgba(193, 193, 193, 0.78)
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
