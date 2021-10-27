<template>
  <div id="app">
    <div id="nav">
      <h2>1-vue项目</h2>
      <h2>props-id: {{id}}</h2>
      <div>
        <img src="./assets/bg.png" alt="" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: null
    }
  },
  created() {
      this.id = this._id
  },
  mthods: {

  }
}
</script>
<style lang="scss">
</style>
