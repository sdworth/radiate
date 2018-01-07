import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CreateButton from './CreateButton'

class App extends Component {
  characterForm() {
    if (this.props.showForm) {
      return 'FORM GOES HERE'
    }

    return ''
  }

  render() {
    return (
      <div>
        <CreateButton />
        { this.characterForm() }
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
