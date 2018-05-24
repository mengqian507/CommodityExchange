<template>
    <div>
        <detail-component :list="DetailList" :bean="bean"></detail-component>
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
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/index.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.getDetailInfoSucc)
        },
        getDetailInfoSucc (res) {
            if (res.data.ret && res.data.data) {
                const data = res.data.data
                this.DetailList = data.Detail
                this.bean = data.bean
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
