import React from 'react';
import { Container, Group } from 'amazeui-dingtalk';

export default class Page2 extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Group>
          <h2>Page 2</h2>
          <p>页面内容</p>
        </Group>
      </Container>
    );
  }
}
