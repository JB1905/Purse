import React, { Component } from 'react';

import { Content } from '../../Components/Content';

export default class Add extends Component {
  state = { opened: false, color: '', name: '' };

  color = color => this.setState({ color: color });
  value = value => this.setState({ name: value });

  toggle = () =>
    this.state.opened
      ? this.setState({ opened: false })
      : this.setState({ opened: true });

  submit = () => {
    if (this.state.color !== '' && this.state.name !== '') {
    }
  };

  render() {
    return (
      <Content>
      </Content>
    );
  }
}
