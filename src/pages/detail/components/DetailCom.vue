<template>
    <div class="detail">
        <div class="item-img-content">
            <img class="item-img" :src="list.imgUrl" >
        </div>
        <div class="content">
            <div class="item-title">
                <div class="title">{{list.title}}</div>
                <div class="price">
                    <div class="bean">
                        <img class="comm-bean-img" src="../../../assets/bean.png" alt="">
                        {{list.bean}}个竞豆
                    </div>
                    <div class="consult-price">参考价¥{{list.money}}</div>
                    <div class="residue">剩余5份</div>
                </div>
            </div>
            <div class="item-introduce">
                <div class="introduce-title">奖品介绍</div>
                <div class="introduce-content">{{list.introduce}}</div>
            </div>
            <div class="item-instructions">
                <div class="instructions-title">兑换说明</div>
                <div class="instructions-content">{{list.instructions}}</div>
            </div>
            <div class="footer">
                <div class="total-bean">我的竞豆：{{bean}}</div>
                <button class="btn">立即兑换</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailComponent',
    props: {
        list: Object,
        bean: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .detail
        color #f7fbff
        font-size .24rem
        .item-img-content
            .item-img
                width 100%
                height 4rem
        .content
            padding .4rem
            text-align left
            .item-title
                border-bottom 2px solid #30343e
                padding-bottom .3rem
                .price
                    margin-top .1rem
                    display flex
                    justify-content space-between
                    .bean
                        color #8493e
                        margin-right -30%
                        color #e8493e
                        font-size .3rem
                        .comm-bean-img
                            width .25rem
                            height .25rem
                    .consult-price
                        color #60646e
                    .residue
                        color #60646e
                        text-align right
            .item-introduce
                padding .4rem 0
                border-bottom 2px solid #30343e
                .introduce-content
                    margin-top .3rem
                    color #60646e
                    line-height .3rem
            .item-instructions
                padding .4rem 0
                border-bottom 2px solid #30343e
                .instructions-content
                    margin-top .3rem
                    color #60646e
                    line-height .3rem
            .footer
                position fixed
                left 0
                right 0
                bottom 0
                background #000
                height 2.5rem
                text-align center
                .total-bean
                    height 1.2rem
                    line-height 1.2rem
                .btn
                    color #fff
                    width 90%
                    height 1rem
                    line-height 1.04rem
                    border-radius .1rem
                    background #e04141
                    font-size .3rem
</style>
