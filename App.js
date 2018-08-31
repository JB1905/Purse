import React, { Component } from 'react';

import { isSignedIn } from './auth';

import { createRootNavigator } from './Screens';

export default class App extends Component {
  state = { signedIn: false, checkedSignIn: false };

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('An error occurred'));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) return null;

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
