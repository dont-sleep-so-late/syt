<template>

</template>

<script lang='ts' setup>
import { SET_TOKEN } from '@/utils/user';
import { useRoute } from 'vue-router';

let route = useRoute();

SET_TOKEN(JSON.stringify(route.query))
let html: any = document.querySelector('html')
html.style.display = 'none'

</script>

<style lang='scss' scoped></style>
