<script setup>
import {useRouter, useRoute} from "vue-router"

const router = useRouter()
function gotoQuestion() {
    router.push("/ingame/1")
}
</script>
<template>
    <video class="video" id="introVideo" autoplay @ended="gotoQuestion">
        <source src="../assets/intro.mp4" type="video/mp4"></source>
    </video>
</template>
<style>
.video {
    width: 100%;
    z-index: 100;
}
</style>