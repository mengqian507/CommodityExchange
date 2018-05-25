<template>
    <div class="detail">
        <div class="item-img-content">
            <img class="item-img" :src="list.iconUrl" >
        </div>
        <div class="content">
            <div class="item-title">
                <div class="title">{{list.goodsName}}</div>
                <div class="price">
                    <div class="bean">
                        <img class="comm-bean-img" src="../../../assets/bean.png" alt="">
                        <span>{{list.coinPrice}}个竞豆</span>
                    </div>
                    <div class="consult-price">参考价 ¥ {{list.referencePrice}}元</div>
                    <div class="residue">剩余{{list.exchangeNum}}份</div>
                </div>
            </div>
            <div class="item-introduce">
                <div class="introduce-title">商品介绍</div>
                <div class="introduce-content">{{list.goodsDesc}}</div>
            </div>
            <div class="item-instructions">
                <div class="instructions-title">兑换说明</div>
                <div class="instructions-content">1.中奖后，可在订单页填写收件信息，请按格式正确填写收件信息；
                若应收件信息填写错误导致的损失，平台不予承担；2.该奖品降由京东于3个工作日内安排派奖；在订单详情页中可查询
                派奖信息；3.请尽快填写收货信息，超过30天未填写将取消中奖资格。</div>
            </div>
            <div class="footer">
                <div class="total-bean">我的竞豆：{{list.user.coin}}</div>
                <button class="btn">立即兑换</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailComponent',
    props: {
        list: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .detail
        color #f7fbff
        font-size .24rem
        .item-img-content
            width: 100%;
            height: 4rem;
            text-align: center;
            vertical-align: middle;
            overflow:hidden;
            .item-img
                width 100%
        .content
            padding .4rem
            text-align left
            .item-title
                border-bottom 2px solid #30343e
                padding-bottom .3rem
                .price
                    margin-top .15rem
                    display flex
                    justify-content space-between
                    .bean
                        margin-right -30%
                        color #e8493e
                        font-size .3rem
                        font-weight bolder
                        .comm-bean-img
                            margin-top -.05rem
                            width .3rem
                            height .3rem
                    .consult-price
                        color #60646e
                    .residue
                        color #60646e
                        text-align right
            .item-introduce
                padding .4rem 0
                border-bottom 2px solid #30343e
                .introduce-content
                    margin-top .2rem
                    color #60646e
                    line-height .3rem
            .item-instructions
                padding .4rem 0
                border-bottom 2px solid #30343e
                .instructions-content
                    margin-top .2rem
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
