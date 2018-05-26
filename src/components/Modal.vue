<template>
    <div>
        <div class="md-modal modal-msg md-modal-transition" v-if="reveal">
            <div class="md-modal-inner">
                <div class="md-content" style="margin-top: 20px;">
                    <div class="confirm-tips">
                        <slot></slot>
                    </div>
                    <div class="btn-wrap">
                        <button class="cancel" @click="handleCancel">取消</button>
                        <button class="confirm" @click="handleConfirm">确认</button>
                    </div>
                </div>
            </div>
        </div>
        <!--遮罩层-->
        <div class="md-overlay" v-if="reveal"></div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'ModalPage',
    data () {
        return {
            reveal: false,
            ajaxSucc: true
        }
    },
    props: ['show'],
    mounted () {
        console.log(this.show)
        this.reveal = this.show
    },
    methods: {
        handleCancel () {
            this.reveal = false
        },
        handleConfirm () {
            this.reveal = false
            this.$emit('confirmClick', this.ajaxSucc)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .md-modal
        position fixed
        width 6rem
        height 2.5rem
        background #252933
        left 50%
        top 40%
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
