<template>
  <div id="app">
    <toolbar></toolbar>
    <Contacts-list></Contacts-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import ContactsList from './components/ContactsList.vue'
import Editor from './components/Editor.vue'

export default {
  components: {
    Toolbar,
    ContactsList,
    Editor
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
