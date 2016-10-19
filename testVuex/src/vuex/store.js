import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
  contacts: [],
  viewContact: {}
}

// define the possible mutations that can be applied to our state
const mutations = {
  ADD_NOTE (state) {
    const newContact = {
      text: 'New note',
      favorite: false
    }
    state.contacts.push(newContact)
    state.viewContact = newContact
  },

  EDIT_NOTE (state, text) {
    state.viewContact.text = text
  },

  DELETE_NOTE (state) {
    state.contacts.$remove(state.viewContact)
    state.viewContact = state.contacts[0]
  },

  TOGGLE_FAVORITE (state) {
    state.viewContact.favorite = !state.viewContact.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.viewContact = contact
  }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations
})