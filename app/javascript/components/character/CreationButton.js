import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showForm } from '../../actions/character/characterActions'

class CreationButton extends Component {
  constructor() {
    super();
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    this.props.onShowForm();
  }

  render() {
    return (
      <button onClick={this.renderForm}>Create Character</button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowForm: () => {
      dispatch(showForm(true))
    }
  }
}

CreationButton.propTypes = {
  onShowForm: PropTypes.func.isRequired
}

const CreationButtonContainer = connect(
  null,
  mapDispatchToProps
)(CreationButton)

export default CreationButtonContainer;
