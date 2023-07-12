<template>
    <div>
        <p>Hello!</p>
    <div :parent="post.age">{{post.age}}</div>
    <span>{{post.name}}</span>
    <el-button type="primary" @click="childClick">触发子传父</el-button>
</div>
</template>
<script>
    export default {
        name: "Child",
        props: ["parent"],
        data() {
            return {
                post: {
                    name: 'skyme',
                    age: 18
                }
            }
        },
        methods:{
            childClick(){
                this.$emit('childV', this.post.name)
            }
        }
        
    }
</script>
