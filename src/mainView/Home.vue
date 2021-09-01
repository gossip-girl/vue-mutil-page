<template>
    <div>
        <p>首页</p>
        <!-- <button @click="jumpTo('two')">点我跳转到two页面</button>
         <button @click="jumpTo('three')">点我跳转到three页面</button> -->
        <a href="/pagetwo">点我跳转到two页面</a>
        <a href="/pagethree">点我跳转到three页面</a>
        <!-- <a href="/mainInner" >mainInner</a> -->
         <button @click="$router.push({path:'/mainInner'})">点我跳转到three页面</button> 
    </div>
</template>

<script>
    export default {
        name: "home",
        methods:{
            
        }
    }
</script>

<style scoped>
    a{
        margin-right: 20px;
    }
</style>
