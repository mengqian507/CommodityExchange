<template>
    <div>
        <detail-component :list="DetailList"></detail-component>
    </div>
</template>

<script>
import DetailComponent from './components/DetailCom'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailComponent
    },
    data () {
        return {
            DetailList: {},
            bean: ''
        }
    },
    mounted () {
        this.getDetailInfo()
        console.log(this.$route.params.id)
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/goods/' + this.$route.params.id)
                .then(this.getDetailInfoSucc)
        },
        getDetailInfoSucc (res) {
            if (res.status === 200 && res.data.data) {
                const data = res.data.data
                this.DetailList = data
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
