<template>
    <div class="home">
        <!--<h1 class="header">热门推荐</h1>-->
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
                    } else {
                        alert(res.data.msg)
                    }
                })
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
