<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Landing page</router-link></li>
      <li><router-link to="/viewPage/123">New route</router-link></li>
      <li><a href="http://localhost:8080?view=oldUrl&key=456">old link</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
