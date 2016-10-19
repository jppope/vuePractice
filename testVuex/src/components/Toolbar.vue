<template>
  <div id="toolbar">
    <i @click="addContact" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteContact" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { addContact, deleteContact, toggleFavorite } from '../vuex/actions.js'

export default {
  vuex: {
    getters: {
      activeNote: state => state.viewContact
    },
    actions: {
      addContact,
      deleteContact,
      toggleFavorite
    }
  }
}
</script>
