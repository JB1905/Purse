import React, { Component } from 'react';

import { Content } from '../../Components/Content';
import { Title } from '../../Components/Title';
import { SubTitle } from '../../Components/SubTitle';
import { Btn } from '../../Components/Button';

export default class LoggedIn extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Content>
        <Title value="Purse" />
        <SubTitle value="Your personal expenses assistant." />

        <Btn action={() => navigate('SignIn')} title="Sign in" color="#fff" />
        <Btn action={() => navigate('SignUp')} title="Sign up" color="#fff" />
      </Content>
    );
  }
}
