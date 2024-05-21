<script setup>
import { ref } from 'vue';
import { Flex, ConfigProvider, theme } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
import DirectionButtons from '@/components/DirectionButtons.vue';

const route = useRoute()

const interfaceControl = ref({
    showDirectionButtons: true,
    showWrongVideo: false,
    showDeathVideo: false
})

const gameConfig = ref(JSON.parse(localStorage.getItem("gameConfig")))

function handleDirectionSelected(direction) {
    console.log(direction)
    interfaceControl.value.showDirectionButtons = false
}
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
    </ConfigProvider>
</template>
<style>
</style>