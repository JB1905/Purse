import React, { Component } from 'react';
import { Text, Button, ActivityIndicator, View } from 'react-native';

import { login } from '../../api';
import { onSignIn } from '../../auth';

import { Content } from '../../components/Content';
import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

export default class SignIn extends Component {
  state = { email: '', password: '', error: null, checking: false };

  email = email => this.setState({ email });
  password = password => this.setState({ password });

  submit = () => {
    if ((this.state.email && this.state.password) !== '') {
      this.setState({ checking: true });

      login(this.state.email, this.state.password).then(res => {
        if (res.verify === true) {
          onSignIn(res.data).then(() => this.props.navigation.navigate('Home'));
        } else {
          this.setState({ error: res, checking: false });
        }
      });
    } else {
      this.setState({ error: 'Email and password are required.' });
    }
  };

  resetPassword = () => this.props.navigation.navigate('Reset');

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Content>
        <Title value="Purse" />
        <SubTitle value="Your personal expenses assistant." />

        <Input action={this.email} placeholder="E-mail" />
        <Input action={this.password} secure={true} placeholder="Password" />

        {this.state.error ? <Error message={this.state.error} /> : null}

        <Btn action={this.submit} title="Sign in" color="#fdfdfd" />

        <View style={{ marginTop: 10 }}>
          <Button
            onPress={this.resetPassword}
            title="Reset password"
            color="#56ad97"
          />

          <Button
            onPress={() => navigate('SignUp')}
            title="Sign up"
            color="#56ad97"
          />
        </View>

        {this.state.checking ? (
          <ActivityIndicator size="large" color="#56ad97" />
        ) : null}
      </Content>
    );
  }
}
