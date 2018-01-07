import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showForm } from '../../actions/character/characterActions'

class Button extends Component {
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

Button.propTypes = {
  onShowForm: PropTypes.func.isRequired
}

const ButtonContainer = connect(
  null,
  mapDispatchToProps
)(Button)

export default ButtonContainer;
