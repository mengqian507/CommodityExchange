<template>
    <ul class="comm-list">
        <router-link class="comm-list-li"
            v-for="item in list"
            :key="item.id"
            :to="'/detail/' + item.id"
        >
            <img :src="item.imgUrl" class="comm-img">
            <div class="comm-title">{{item.title}}</div>
            <div class="comm-price">(参考价：{{item.money}})</div>
            <div class="comm-bean">
                <img class="comm-bean-img" src="../../../assets/bean.png" alt="">
                {{item.bean}}个竞豆
            </div>
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'HomeList',
    props: {
        list: Array
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .comm-list-li
        border-right 2px solid #30343e
        border-bottom 2px solid #30343e
        padding .3rem 0
        float left
        width 49%
        color #f7fbff
        font-size .24rem
        .comm-img
            width 2.15rem
            height 2.5rem
            margin-bottom .5rem
        .comm-price
            margin .15rem 0 .2rem 0
            color #60646e
            text-decoration:line-through
        .comm-bean
            font-size .3rem
            .comm-bean-img
                width .25rem
                height .25rem
</style>
