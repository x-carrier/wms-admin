<template>
  <div>
    <el-button>HOME</el-button>
  </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
import { login } from '@/api/user'
import { ElMessage } from 'element-plus'

onMounted(() => {
  login('kevin', 'kevin123').then(res => {
    ElMessage({
      message: res.data.message,
      type: 'success',
      duration: 1000
    })
    // console.log(res)
  })
})

</script>
<style lang='less' scoped>
</style>
