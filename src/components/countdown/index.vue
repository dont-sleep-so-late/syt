<template>
    <div class="countdown">
        <span>获取验证码({{ time }}s)</span>
    </div>
</template>

<script lang='ts' setup>
import { watch, ref } from 'vue';

var time = ref(60)

var props = defineProps(['flag'])
var $emit = defineEmits(['getFlag'])
watch(() => props.flag, () => {
    var timer = setInterval(() => {
        time.value--
        if (time.value == 0) {
            $emit('getFlag', false)
            clearInterval(timer)
        }
    }, 1000)
}, {
    immediate: true
})
</script>

<style lang='scss' scoped></style>