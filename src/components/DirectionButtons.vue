<script setup>
import {Button, Row, Col} from "ant-design-vue"
import { ref } from "vue"

const selectedDirection = ref("")
const buttonSelectable = ref(true)

const emits = defineEmits(["directionSelected"])


function handleOnClick(direction) {
    if (buttonSelectable.value) {
        selectedDirection.value = direction
        buttonSelectable.value = false
        document.getElementById(direction).play()
    }
}

function handleEnded() {
    emits("directionSelected", selectedDirection.value)
    buttonSelectable.value = true
}
</script>
<template>
<row :gutter="[24,16]">
    <col :span="6">
        <Button type="primary" @click="handleOnClick('NW')" :disabled="!buttonSelectable">西北方</Button>
    </col>
    <col :span="6">
        <Button type="primary" @click="handleOnClick('N')" :disabled="!buttonSelectable">北方</Button>
    </col>
    <col :span="6">
        <Button type="primary" @click="handleOnClick('NE')" :disabled="!buttonSelectable">东北方</Button>
    </col>
</row>
<row :gutter="[16,24]">
    <col :span="6">
        <Button type="primary" @click="handleOnClick('W')" :disabled="!buttonSelectable">西方</Button>
    </col>
    <col :span="6">
        <Button type="primary" danger @click="handleOnClick('giveup')" :disabled="!buttonSelectable">听不清楚</Button>
    </col>
    <col :span="6">
        <Button type="primary" @click="handleOnClick('E')" :disabled="!buttonSelectable">东方</Button>
    </col>
</row>
<row :gutter="[16,24]">
    <col :span="6">
        <Button type="primary" @click="handleOnClick('SW')" :disabled="!buttonSelectable">西南方</Button>
    </col>
    <col :span="6">
        <Button type="primary" @click="handleOnClick('S')" :disabled="!buttonSelectable">南方</Button>
    </col>
    <col :span="6">
        <Button type="primary" @click="handleOnClick('SE')" :disabled="!buttonSelectable">东南方</Button>
    </col>
</row>

<audio id="E" @ended="handleEnded()">
    <source src="../assets/E.MP3" type="audio/mp3"/>
</audio>
<audio id="N" @ended="handleEnded()">
    <source src="../assets/N.MP3" type="audio/mp3"/>
</audio>
<audio id="NE" @ended="handleEnded()">
    <source src="../assets/NE.MP3" type="audio/mp3"/>
</audio>
<audio id="W" @ended="handleEnded()">
    <source src="../assets/W.MP3" type="audio/mp3"/>
</audio>
<audio id="NW" @ended="handleEnded()">
    <source src="../assets/NW.MP3" type="audio/mp3"/>
</audio>
<audio id="S" @ended="handleEnded()">
    <source src="../assets/S.MP3" type="audio/mp3"/>
</audio>
<audio id="SE" @ended="handleEnded()">
    <source src="../assets/SE.MP3" type="audio/mp3"/>
</audio>
<audio id="SW" @ended="handleEnded()">
    <source src="../assets/SW.MP3" type="audio/mp3"/>
</audio>
<audio id="giveup" @ended="handleEnded()">
    <source src="../assets/giveup.MP3" type="audio/mp3"/>
</audio>
</template>
<style>
</style>