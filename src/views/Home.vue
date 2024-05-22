<script setup>
import { Flex, Tabs, TabPane, theme, ConfigProvider, Checkbox, Input, InputNumber, Button, Tag, Modal, List, ListItem } from 'ant-design-vue';
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

const interfaceControl = ref({
    showChangeLog: false
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

function gotoLink(link) {
    window.location.href = link
}

homepageInit()
</script>
<template>
    <ConfigProvider :theme="{
        algorithm: theme.darkAlgorithm,
    }">
        <Modal title="更新记录" v-model:visible="interfaceControl.showChangeLog">
            <Flex vertical gap="small">
                <List>
                    <ListItem>
                        <Tag>Alpha-1.0</Tag> 2023/05/21
                        基本游戏实现。
                    </ListItem>
                </List>
            </Flex>
            <template #footer>
                <Button type="primary" @click="interfaceControl.showChangeLog = false">我知道了！嗷嗷！</Button>
            </template>
        </Modal>
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
                    这玩意我还没写好QAQ！嗷嗷嗷！
                </TabPane>
                <TabPane :key="3" tab="关于">
                    <Flex vertical gap="small" justify="center" align="center">
                        <Button type="primary" @click="interfaceControl.showChangeLog = true">更新日志</Button>
                        <Button @click="gotoLink('https://github.com/kimsseTheWolf/tingshengbianwei')">在GitHub上查看源代码</Button>
                        <Button @click="gotoLink('https://space.bilibili.com/397311019')">查看这个池沼游戏作者的B站主页（恼）</Button>
                        <Button @click="gotoLink('https://github.com/kimsseTheWolf')">查看这个池沼游戏作者的GitHub主页（恼）</Button>
                        <div>作者：kimsseTheWolf</div>
                        <div>视频素材和音频素材均来自B站。若有侵权会立即删除！本程序根据MIT协议开源，禁止用于商业用途！</div>
                    </Flex>
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