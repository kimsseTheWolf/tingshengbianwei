<script setup>
import { Flex, Button, ConfigProvider, theme } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

function handleBackBtn() {
    router.push("/")
}
</script>
<template>
    <ConfigProvider :theme="{
        algorithm: theme.darkAlgorithm,
    }">
        <Flex vertical align="center" justify="center" gap="small">
            <div class="title">游戏结束</div>
            <div>闯关完成，你的分数为：</div>
            <Button type="primary" @click="handleBackBtn">返回开始页</Button>
        </Flex>
    </ConfigProvider>
    
</template>
<style scoped>

</style>