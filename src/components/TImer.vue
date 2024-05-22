<script setup>
import { ref, watchEffect, onUnmounted } from 'vue';
const props = defineProps(["time", "needContinue"])
const emits = defineEmits(["timeIsUp"])
const currTime = ref(props.time)

let intervalId = null

function startTimer() {
    clearInterval(intervalId)
    if (props.needContinue) {
        if (currTime.value > 0) {
            intervalId = setInterval(()=> {
                currTime.value -= 1;
            }, 1000)
        }
    }
}

watchEffect(() => {
    startTimer()
    if (currTime.value <= 0) {
        emits("timeIsUp")
        clearInterval(intervalId)
    }
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>
<template>
    <div class="timer-box">
        倒计时：{{ currTime }}
    </div>
</template>
<style>
.timer-box {
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>