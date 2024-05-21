<script setup>
import { Flex, Tabs, TabPane, theme, ConfigProvider, Checkbox, Input, InputNumber, Button, Tag } from 'ant-design-vue';
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const currentTab = ref(1)

const gameConfig = ref({
    skipIntro: false,
    maxRounds: 5,
    maxLive: 3,
    timeLimits: 60,
    username: ""
})

function homepageInit() {
    localStorage.removeItem("gameConfig")
}

function handleStartOnClick() {
    localStorage.setItem("gameConfig", JSON.stringify(gameConfig.value))
    if (gameConfig.value.skipIntro) {
        router.push("/ingame/1")
    }
    else {
        router.push("/intro")
    }
}

homepageInit()
</script>
<template>
    <ConfigProvider :theme="{
        algorithm: theme.darkAlgorithm,
    }">
        <Flex vertical justify="center" align="center" gap="small">
            <img src="../assets/iconCopper.png" width="150px"/>
            <div class="title">听声辩位</div>
            <div>本关考验你听声辩位功夫，选择好游戏配置后即可开始游戏</div>
            <Tag>Alpha-1.0</Tag>
            <Tabs v-model:active-key="currentTab">
                <TabPane :key="1" tab="游戏配置">
                    <Flex vertical gap="small">
                        <Input placeholder="玩家名（可以为相同的名字）" v-model:value="gameConfig.username"/>
                        <Checkbox v-model:checked="gameConfig.skipIntro">跳过开头视频（不建议第一次游玩的玩家跳过）</Checkbox>
                        <Flex gap="small" align="center">
                            <div>游戏轮数</div>
                            <InputNumber v-model:value="gameConfig.maxRounds" :min="5" :max="100"></InputNumber>
                        </Flex>
                        <Flex gap="small" align="center">
                            <div>最高生命值</div>
                            <InputNumber v-model:value="gameConfig.maxLive" :min="3" :max="100"></InputNumber>
                        </Flex>
                        <Flex gap="small" align="center">
                            <div>每轮时间限制（秒）</div>
                            <InputNumber v-model:value="gameConfig.timeLimits" :min="10" :max="120"></InputNumber>
                        </Flex>
                        <Button type="primary" @click="handleStartOnClick">弟子明白！</Button>
                    </Flex>
                </TabPane>
                <TabPane :key="2" tab="排行榜">
                    Rankings
                </TabPane>
            </Tabs>
        </Flex>
    </ConfigProvider>
</template>
<style>
body {
    background-color: black;
    color: white;
    height: 100vh;
    font-family: Inter;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
}
</style>