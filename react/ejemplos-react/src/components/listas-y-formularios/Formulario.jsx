import React, { Component } from 'react'

export default class Formulario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'angel@gmail.com',
      password: ''
    }

    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChangeEmail(event) {
  //   // console.log(event.target)
  //   // console.log(event.target.value)
  //   this.setState({
  //     email: event.target.value
  //   })
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
