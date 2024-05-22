<script setup>
import { nextTick, ref } from 'vue';
import { Flex, ConfigProvider, theme } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
import DirectionButtons from '@/components/DirectionButtons.vue';
import router from '@/router';

let audioContext = null
let audioElement = null
let audioSource = null
let pannerNode = null

const route = useRoute()

const interfaceControl = ref({
    showDirectionButtons: false,
    showWrongVideo: false,
    showDeathVideo: false
})

const gameConfig = ref(JSON.parse(localStorage.getItem("gameConfig")))

const directions = ["NW", "N", "NE", "W", "E", "SW", "S", "SE"]
const currentDirection = ref(directions[0])

function generateGoal() {
    currentDirection.value = directions[Math.floor(Math.random() * directions.length)]
}

function initializeAudio() {
    audioContext = new (window.AudioContext || window.webkitAudioContet)();
    audioElement = new Audio("/audio/dropVoice.MP3");
    audioSource = audioContext.createMediaElementSource(audioElement);
    pannerNode = audioContext.createPanner();
    pannerNode.panningModel = "HRTF";
    pannerNode.distanceModel = "inverse";
    pannerNode.refDistance = 1;
    pannerNode.maxDistance = 10000;
    audioSource.connect(pannerNode);
    pannerNode.connect(audioContext.destination);
    audioElement.addEventListener('ended', handleAudioEnded)
}

function renderSpacialAudio() {
    if (currentDirection.value === "NW") {
        pannerNode.setPosition(-1, 1, 0)
    }
    else if (currentDirection.value === "N") {
        pannerNode.setPosition(0, 1, 0)
    }
    else if (currentDirection.value === "NE") {
        pannerNode.setPosition(1, 1, 0)
    }
    else if (currentDirection.value === "W") {
        pannerNode.setPosition(-1, 0, 0)
    }
    else if (currentDirection.value === "E") {
        pannerNode.setPosition(1, 0, 0)
    }
    else if (currentDirection.value === "SW") {
        pannerNode.setPosition(-1, -1, 0)
    }
    else if (currentDirection.value === "S") {
        pannerNode.setPosition(0, -1, 0)
    }
    else if (currentDirection.value === "SE") {
        pannerNode.setPosition(1, -1, 0)
    }
}

function playAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContet)();
        audioElement = new Audio("/audio/dropVoice.MP3");
        audioSource = audioContext.createMediaElementSource(audioElement);
        pannerNode = audioContext.createPanner();
        pannerNode.panningModel = "HRTF";
        pannerNode.distanceModel = "inverse";
        pannerNode.refDistance = 1;
        pannerNode.maxDistance = 10000;
        audioSource.connect(pannerNode);
        pannerNode.connect(audioContext.destination);
        audioElement.addEventListener('ended', handleAudioEnded)
    }
    audioElement.play()
}

function handleDirectionSelected(direction) {
    console.log(direction)
    interfaceControl.value.showDirectionButtons = false
    if (direction == currentDirection.value) {
        console.log("Correct!")
        // sync
        localStorage.setItem("gameConfig", JSON.stringify(gameConfig.value))
        router.push("/ingame/" + (parseInt(route.params.roundNum) + 1)).then(()=> {
            nextTick(() => router.go(0))
        })
    }
    else {
        console.log("Wrong!")
        if (gameConfig.value.maxLive <= 1) {
            interfaceControl.value.showDeathVideo = true
            // document.getElementById("failedFinal").play()
        }
        else {
            interfaceControl.value.showWrongVideo = true
            gameConfig.value.maxLive -= 1
            // sync
            localStorage.setItem("gameConfig", JSON.stringify(gameConfig.value))
            // document.getElementById("failed1").play()
        }
    }
}

function handleAudioEnded() {

}

function handleVideoEnded() {
    console.log("Video ended")
    if (interfaceControl.value.showDeathVideo) {
        interfaceControl.value.showWrongVideo = false
        interfaceControl.value.showDeathVideo = false
        router.push("/gameover").then(()=> {
            nextTick(() => router.go(0))
        })
    }
    else {
        interfaceControl.value.showWrongVideo = false
        interfaceControl.value.showDeathVideo = false
        router.push("/ingame/" + (parseInt(route.params.roundNum) + 1)).then(()=> {
            nextTick(() => router.go(0))
        })
    }
}




function pageInit() {
    if (gameConfig.value.maxLive < 1) {
        router.push("/gameover")
    }
    else if (parseInt(route.params.roundNum) > gameConfig.value.maxRounds) {
        router.push("/gameover")
    }
    else {
        generateGoal()
        initializeAudio()
        renderSpacialAudio()
        playAudio()
        interfaceControl.value.showDirectionButtons = true
    }
}

pageInit()
</script>
<template>
    <ConfigProvider :theme="{
        algorithm: theme.darkAlgorithm,
    }">
        <Flex vertical gap="small" align="center" justify="center">
            <div class="title">第{{ route.params.roundNum }}轮，共{{ gameConfig.maxRounds }}轮</div>
            <div>佩戴耳机效果更佳</div>
            <div>铜钱落于何方</div>
            <DirectionButtons v-if="interfaceControl.showDirectionButtons" @direction-selected="handleDirectionSelected"/>
        </Flex>

        <video class="hoverVideo" id="failed1" autoplay @ended="handleVideoEnded" v-if="interfaceControl.showWrongVideo">
            <source src="/video/failed1.mp4" type="video/mp4"></source>
        </video>
        <video class="hoverVideo" id="failedFinal" autoplay @ended="handleVideoEnded" v-if="interfaceControl.showDeathVideo">
            <source src="/video/failedFinal.mp4" type="video/mp4"></source>
        </video>
    </ConfigProvider>
</template>
<style>
.hoverVideo {
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 200;
}
</style>