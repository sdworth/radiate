import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class CharacterForm extends Component {
  constructor() {
    super();
    this.handleChange  =  this.handleChange .bind(this);
    this.state = {
      name: "",
      trickery: 0,
      smarts: 0,
      empathy: 0,
      muscle: 0
    }
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <h2>Create Your Character:</h2>
        <div>
          <label htmlFor="character_name">Name:</label>
          <input type="text" value={ this.state.name } onChange={ this.handleChange } name="name" id="character_name" />
        </div>

        <h3>Stats:</h3>

        <div>
          <label htmlFor="character_trickery">Trickery:</label>
          <input type="number" value={ this.state.trickery } onChange={ this.handleChange } name="trickery" id="character_trickery" />
        </div>

        <div>
          <label htmlFor="character_smarts">Smarts:</label>
          <input type="number" value={ this.state.smarts } onChange={ this.handleChange } name="smarts" id="character_smarts" />
        </div>

        <div>
          <label htmlFor="character_empathy">Empathy:</label>
          <input type="number" value={ this.state.empathy } onChange={ this.handleChange } name="empathy" id="character_empathy" />
        </div>

        <div>
          <label htmlFor="character_muscle">Muscle:</label>
          <input type="number" value={ this.state.muscle } onChange={ this.handleChange } name="muscle" id="character_muscle" />
        </div>
      </form>
    )
  }
}

export default CharacterForm;
