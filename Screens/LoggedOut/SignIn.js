import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';

import { login } from '../../api';
import { onSignIn } from '../../auth';

import { Content } from '../../Components/Content';
import { Title } from '../../Components/Title';
import { Input } from '../../Components/Input';
import { Btn } from '../../Components/Button';
import { Error } from '../../Components/Error';

export default class SignIn extends Component {
  state = { email: '', password: '', error: null, checking: false };

  email = email => this.setState({ email });
  password = password => this.setState({ password });

  submit = () => {
    if ((this.state.email && this.state.password) !== '') {
      this.setState({ checking: true });

      login(this.state.email, this.state.password).then(res => {
        if (res === true) {
          onSignIn().then(() => this.props.navigation.navigate('Home'));
        } else {
          this.setState({ error: res, checking: false });
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

        <Btn action={this.submit} title="Sign in" color="#fdfdfd" />

        {this.state.checking ? (
          <ActivityIndicator size="large" color="#56ad97" />
        ) : null}
      </Content>
    );
  }
}
