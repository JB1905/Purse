import React, { Component } from 'react';
import { Text } from 'react-native';

import { db, login } from '../../api';
import { onSignIn } from '../../auth';

import { Content } from '../../Components/Content';
import { Title } from '../../Components/Title';
import { Input } from '../../Components/Input';
import { Btn } from '../../Components/Button';
import { Error } from '../../Components/Error';

const ref = db.ref('users');

export default class SignIn extends Component {
  state = { email: '', password: '', error: null };

  email = value => this.setState({ email: value });
  password = value => this.setState({ password: value });

  submit = () => {
    if ((this.state.email && this.state.password) !== '') {
      login(this.state.email, this.state.password).then(res => {
        if (res === true) {
          onSignIn().then(() => this.props.navigation.navigate('Home'));
        } else {
          this.setState({ error: res });
        }
      });
    } else {
      this.setState({ error: 'Email and password are required.' });
    }
  };

  render() {
    return (
      <Content>
        <Title value="Sign in" />

        <Input action={this.email} placeholder="E-mail" />
        <Input action={this.password} secure={true} placeholder="Password" />

        {this.state.error ? <Error message={this.state.error} /> : null}

        <Btn action={this.submit} title="Sign in" color="#fff" />
      </Content>
    );
  }
}
