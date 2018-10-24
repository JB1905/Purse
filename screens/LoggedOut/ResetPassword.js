import React, { Component } from 'react';
import { Button, Alert } from 'react-native';

import { Loader } from '../../components/Loader';
import { KeyboardContent, Content } from '../../components/Content';
import { SubTitle } from '../../components/SubTitle';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

import { resetPassword } from '../../api';

export default class ResetPassword extends Component {
  state = { email: '', error: null, checking: false };

  email = email => this.setState({ email });

  send = () => {
    if (this.state.email !== '') {
      this.setState({ checking: true });

      resetPassword(this.state.email).then(res => {
        this.setState({ checking: false });

        if (res === true) {
          Alert.alert(`Message sent to: ${this.state.email}`, null, [
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('SignIn')
            }
          ]);
        } else {
          this.setState({ error: res });
        }
      });
    } else {
      this.setState({ error: 'Email is required.' });
    }
  };

  render() {
    return (
      <KeyboardContent>
        <Content keyboard={true}>
          <SubTitle value="Have you forgotten your password?" />

          <Input
            action={this.email}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Your account email"
          />

          {this.state.error ? <Error message={this.state.error} /> : null}

          <Btn action={this.send} title="Send reset message" color="#fdfdfd" />

          {this.state.checking ? <Loader /> : null}
        </Content>
      </KeyboardContent>
    );
  }
}
