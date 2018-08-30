import React, { Component } from 'react';

import { db, login } from '../../api';
import { onSignIn } from '../../auth';

import { Content } from '../../Components/Content';
import { Title } from '../../Components/Title';
import { Input } from '../../Components/Input';
import { Btn } from '../../Components/Button';

const ref = db.ref('users');

export default class SignIn extends Component {
  state = { email: '', password: '' };

  email = value => this.setState({ email: value });
  password = value => this.setState({ password: value });

  submit = () => {
    if (this.state.email !== '' && this.state.password !== '') {
      login(this.state.email, this.state.password).then(() =>
        onSignIn().then(() => this.props.navigation.navigate('Home'))
      );
    } else {
    }
  };

  render() {
    return (
      <Content>
        <Title value="Sign in" />

        <Input action={this.email} placeholder="E-mail" />
        <Input action={this.password} secure={true} placeholder="Password" />

        <Btn action={this.submit} title="Sign in" color="#fff" />
      </Content>
    );
  }
}
