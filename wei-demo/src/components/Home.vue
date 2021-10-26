<template>
  <div class="home">
    <div class="list">
      <div class="list__item">
        <el-button size="small" @click="handleLink('/subapp')">1-vue项目应用</el-button>
      </div>
      <div class="list__item">
        <el-button size="small" @click="handleLink('/subapp2')">2-vue项目应用</el-button>
      </div>
      <div class="list__item">
        <el-button size="small" @click="handleLink('/reactapp')">2-react子项目应用</el-button>
      </div>
    </div>
    <div class="content">
      <!-- vue子项目1 -->
      <div id="subapp"></div>
      <!-- vue子项目2 -->
      <div id="subapp2"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLink(path) {
      if(path === '/reactapp') {
        this.$message.error('未接入react项目')
        return
      } else {
        this.$router.push(path)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  float: left;
  padding-left: 10px;
  width: 200px;
  height: 100%;
  background-color: red;
  &__item {
    margin: 12px 0;
  }
}
.content{
  margin-left: 200px;
  position: relative;
  left: 0;
  right: 0;
  background-color: rosybrown;
}

</style>
