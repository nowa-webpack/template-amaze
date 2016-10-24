import React from 'react';
import { Container, Group } from 'amazeui-touch';

export default class <%- name %> extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Group>
          <h2><%- name %></h2>
          <p>页面内容</p>
        </Group>
      </Container>
    );
  }
}
