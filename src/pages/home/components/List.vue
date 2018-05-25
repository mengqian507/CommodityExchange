<template>
    <ul class="comm-list">
        <router-link class="comm-list-li"
                     v-for="item in list"
                     :key="item._id"
                     :to="'/detail/' + item._id"
                     tag="li"
        >
            <div class="img-content">
                <img :src="item.iconUrl" class="comm-img">
                <span v-if="item.label == 1" class="icon">普通</span>
                <span v-if="item.label == 2" class="icon new">新品</span>
                <span v-if="item.label == 3" class="icon">热门</span>
                <span v-if="item.label == 4" class="icon">折扣</span>
                <span v-if="item.label == 5" class="icon">人气</span>
            </div>
            <div class="comm-title">{{item.goodsName}}</div>
            <div class="comm-price">(参考价：{{item.referencePrice}}元)</div>
            <div class="comm-bean">
                <img class="comm-bean-img" src="../../../assets/bean.png" alt="">
                {{item.coinPrice}}个竞豆
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
    .comm-list
        .comm-list-li
            display inline-block
            border-right 2px solid #30343e
            border-bottom 2px solid #30343e
            padding .3rem 0
            float left
            width 49.4%
            color #f7fbff
            font-size .24rem
            background-color:#292b37;
            height 4rem
            overflow hidden
            .img-content
                position relative
                .comm-img
                    width 2.15rem
                    height 2.5rem
                    margin-bottom .5rem
                .icon
                    position absolute
                    top 0
                    left 18%
                    display inline-block
                    width .55rem
                    height .55rem
                    line-height .55rem
                    text-align center
                    background red
                    border-radius 50%
                    font-size .20rem;
                    webkit-transform scale(0.84, 0.84)
                    transform scale(0.84, 0.84)
                    &.new
                        background green!important
            .comm-price
                margin .15rem 0 .2rem 0
                color #60646e
                text-decoration:line-through
            .comm-bean
                font-size .26rem
                .comm-bean-img
                    width .3rem
                    height .3rem
                    margin-top -.05rem
</style>
