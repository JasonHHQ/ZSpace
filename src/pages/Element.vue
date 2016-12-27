<template>
  <div id="element">
    <div class="header">
      <a class="logo" href="/">
        <img src="../assets/logo.png" width=30 height=30>
        <h3>Element Example</h3>
      </a>
    </div>
    <main>
      <el-button @click="visible = true">按钮</el-button>
      <el-dialog v-model="visible" title="Hello world">
        <p>欢迎使用 Element</p>
      </el-dialog>
    </main>
    
  </div>
</template>

<script>
  export default {
    name: 'element',
    data () {
    return {
      visible: false
    }
  }
  }
</script>

<style>
#element {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;

  border-bottom: 1px solid #ccc;
  height: 49px;
  line-height: 50px;

  -webkit-user-select: none;
  user-select: none;
}
.header .logo {
  display: flex;
  margin: 0 15px;
  text-decoration: none;
  outline: none;
  color: inherit;
}
.header .logo img {
  float: left;
  margin: 10px;
}
.header .logo h3{
  margin: 0;
  line-height: 50px;
}
</style>
