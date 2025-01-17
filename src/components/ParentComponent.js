import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export class ParentComponent extends Component {
    state = {
    firstName: "",
    lastName: "",
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
        <>
      <Form
        formData={this.state}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
      />
      <DisplayData formData={this.state} />
      </>
    )
  }
}

export default ParentComponent
