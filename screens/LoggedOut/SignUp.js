import React, { Component } from 'react';

import { Content } from '../../Components/Content';
import { Title } from '../../Components/Title';
import { SubTitle } from '../../Components/SubTitle';
import { Input } from '../../Components/Input';
import { Btn } from '../../Components/Button';

import { db, signup } from '../../api';

const ref = db.ref('users');

export default class SignUp extends Component {
  state = { name: '', surname: '', email: '', password: '', confirm: '' };

  email = value => this.setState({ email: value });
  password = value => this.setState({ password: value });
  confirm = value => this.setState({ confirm: value });

  submit = () => {
    const { name, surname, email, password, confirm } = this.state;

    if (
      /*name && surname && */ (email && password) !== '' &&
      password === confirm
    ) {
      signup(email, password).then(res => console.log(true));
    }
  };

  render() {
    return (
      <Content>
        <Title value="Sign up" />
        <SubTitle value="Save Your money. Start today!" />

        <Input action={this.email} placeholder="E-mail" />
        <Input action={this.password} secure={true} placeholder="Password" />

        <Input
          action={this.confirm}
          secure={true}
          placeholder="Confirm Password"
        />

        <Btn action={this.submit} title="Sign up" color="#fff" />
      </Content>
    );
  }
}
