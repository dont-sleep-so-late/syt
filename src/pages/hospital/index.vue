<template>
    <div>我是医院</div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(() => {
    console.log(router.addRoute);
}),

</script>

<style lang='scss' scoped></style>