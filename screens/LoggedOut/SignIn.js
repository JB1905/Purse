import React, { Component } from 'react';
import { Button, View } from 'react-native';

import { Loader } from '../../components/Loader';
import { KeyboardContent, Content } from '../../components/Content';
import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

import { onSignIn } from '../../auth';
import { login } from '../../api';

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

  render() {
    const { navigate } = this.props.navigation;

    return (
      <KeyboardContent>
        <Content keyboard={true}>
          <Title value="Purse" />
          <SubTitle value="Your personal expenses assistant." />

          <Input
            action={this.email}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="E-mail"
          />

          <Input action={this.password} secure={true} placeholder="Password" />

          {this.state.error ? <Error message={this.state.error} /> : null}

          <Btn action={this.submit} title="Sign in" color="#fdfdfd" />

          <View style={{ marginTop: 10 }}>
            <Button
              onPress={() => navigate('Reset')}
              title="Reset password"
              color="#56ad97"
            />

            <Button
              onPress={() => navigate('SignUp')}
              title="Sign up"
              color="#56ad97"
            />
          </View>
        </Content>

        {this.state.checking ? <Loader /> : null}
      </KeyboardContent>
    );
  }
}
