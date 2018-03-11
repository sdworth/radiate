import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CreationButton from './CreationButton'
import CharacterForm from './CharacterForm'

class App extends Component {
  displayCharacterForm() {
    if (this.props.showForm) {
      return <CharacterForm />
    }

    return ''
  }

  render() {
    return (
      <div>
        <CreationButton />
        { this.displayCharacterForm() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showForm: state.showForm
  }
}

App.propTypes = {
  showForm: PropTypes.bool.isRequired
}

const AppContainer = connect(
  mapStateToProps
)(App)

export default AppContainer;
