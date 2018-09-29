import React, { Component } from 'react';
import { Text, ActivityIndicator, Alert } from 'react-native';

import { resetPassword } from '../../api';

import { Content } from '../../components/Content';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

export default class ResetPassword extends Component {
  state = { error: null, email: '' };

  email = email => this.setState({ email });

  send = () => {
    if (this.state.email !== '') {
      resetPassword(this.state.email).then(res => {
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
      <Content>
        <Input
          action={this.email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Your account email"
        />

        {this.state.error ? <Error message={this.state.error} /> : null}

        <Btn action={this.send} title="Send reset message" color="#fdfdfd" />

        {this.state.checking ? (
          <ActivityIndicator size="large" color="#56ad97" />
        ) : null}
      </Content>
    );
  }
}
