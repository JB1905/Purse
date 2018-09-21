import React, { Component } from 'react';
import { Text } from 'react-native';

import { Content } from '../../components/Content';
import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

import { signUp } from '../../api';

export default class SignUp extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirm: '',
    error: null
  };

  name = name => this.setState({ name });
  surname = surname => this.setState({ surname });
  email = email => this.setState({ email });
  password = password => this.setState({ password });
  confirm = confirm => this.setState({ confirm });

  submit = () => {
    const { name, surname, email, password, confirm } = this.state;

    if ((name && surname && email && password) !== '') {
      if (password === confirm) {
        signUp(email, password, name, surname).then(res => {
          if (res === true) {
            this.props.navigation.navigate('SignIn');
          } else {
            this.setState({ error: res });
          }
        });
      } else {
        this.setState({
          error: 'Password and confirmed password are different.'
        });
      }
    } else {
      this.setState({ error: 'All fields are required.' });
    }
  };

  render() {
    return (
      <Content>
        <SubTitle value="Save Your money. Start today!" />

        <Input action={this.name} placeholder="Name" />
        <Input action={this.surname} placeholder="Surname" />
        <Input action={this.email} placeholder="E-mail" />
        <Input action={this.password} secure={true} placeholder="Password" />

        <Input
          action={this.confirm}
          secure={true}
          placeholder="Confirm Password"
        />

        {this.state.error ? <Error message={this.state.error} /> : null}

        <Btn action={this.submit} title="Sign up" color="#fdfdfd" />
      </Content>
    );
  }
}
