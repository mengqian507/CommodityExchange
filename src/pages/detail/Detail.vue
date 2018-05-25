<template>
    <div>
        <detail-component :data="DetailList"></detail-component>
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
            axios.get('/api/goods/' + this.$route.params.id)
                .then(res => {
                    if (res.data.status === 1 && res.data.data) {
                        this.DetailList = res.data.data
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

</style>
