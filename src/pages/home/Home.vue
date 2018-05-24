<template>
    <div class="home">
        <h1 class="header">热门推荐</h1>
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
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            if (res.data.ret && res.data.data) {
                const data = res.data.data
                this.CommodityList = data.List
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .header
        color #fff
        font-size .5rem
        font-weight bolder
        margin-top .5rem
</style>
