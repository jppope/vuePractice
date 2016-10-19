
export const addContact = ({ dispatch }) => {
  dispatch('ADD_NOTE')
}

export const editContact = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE', e.target.value)
}

export const deleteContact = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const updateViewContact = ({ dispatch }, contact) => {
  dispatch('SET_ACTIVE_NOTE', contact)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}