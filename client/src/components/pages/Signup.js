import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.signup(this.state.email, this.state.password);
    //reset email and password
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Sign up</h1>
        <Form.Field>
          <label>Email</label>
          <input name='email' type='email' value={ this.state.email } onChange={ e => this.setState({ email: e.target.value }) } placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name='password' type='password' value={ this.state.password } onChange={ e => this.setState({ password: e.target.value }) } placeholder='Password' />
        </Form.Field>
        <Button type='submit'>sign up</Button>
      </Form>
    );
  }
}
export default Signup;