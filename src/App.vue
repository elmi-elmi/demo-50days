<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <router-link to="/">home</router-link> |
  <router-link to="/day1">Day 1</router-link> |
  <router-link to="/day2">Day 2</router-link> |
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
html{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  height: 100vh;
  width: 100vw;
  margin: 0;
}
</style>
