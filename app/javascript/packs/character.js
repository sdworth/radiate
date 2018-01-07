/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import "babel-polyfill"
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import characterReducer from '../reducers/characterReducer'
import CharacterApp from '../components/character/CharacterApp'

let store = createStore(characterReducer);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <CharacterApp />
    </Provider>,
    document.getElementById('character-app')
  )
})
