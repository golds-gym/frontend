<template>
  <div class="home">
    <!-- <img alt="gold's gym logo" src="../assets/logo.png"> -->
    <Login msg="Welcome to Gold's GYM App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
