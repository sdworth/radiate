const defaultState = { showForm: false }

const characterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_FORM':
      return Object.assign({}, state, { showForm: action.showForm })
    default:
      return state
  }
}

export default characterReducer
