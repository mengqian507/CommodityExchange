<template>
    <div class="home">
        <h1 class="header">热门推荐</h1>
        <div class="loginOut" @click="loginOutClick">退出</div>
        <home-list :list="CommodityList"></home-list>
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
            CommodityList: []
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
                        sessionStorage.clear()
                        this.$router.push('/login')
                    } else {
                        alert(res.data.msg)
                    }
                })
        },
        loginOutClick () {
            axios.post('/api/logout')
                .then(res => {
                    if (res.data.status === 1) {
                        alert(res.data.msg)
                        this.$router.push({ path: '/login' })
                    }
                })
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
</style>
