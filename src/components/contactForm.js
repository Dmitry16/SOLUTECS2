import React from 'react'
// import styled from 'styled-components'

export default class ContactForm extends React.Component {
  constructor() {
    super()
    this.state = { Name: '',
                   Email: '',
                   Message: '' }
  }

  handleSubmit(e) {
    console.log(this.state);
    // e.preventDefault()
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  render() {

    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input name="Name" value={ this.state.valueName }
                  onChange={this.handleChange.bind(this)}
                  placeholder="Tu Nombre"
            />
          </div>
          <div>
            <input name="Email"  value={ this.state.valueEmail }
                  onChange={this.handleChange.bind(this)}
                  placeholder="Tu Email"
            />
          </div>
          <div>
            <textarea name="Message" value={ this.state.valueMessage }
                      onChange={this.handleChange.bind(this)}
                      placeholder="Tu Email"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
    )
  }
}
