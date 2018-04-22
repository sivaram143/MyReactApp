import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, CardHeader } from 'reactstrap';

export default  class ButtonComponent extends Component  {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
          <Card>
              <CardHeader onClick={this.toggle}>Header</CardHeader>
              <Collapse isOpen={this.state.collapse}>
                  <CardBody>
                     <p> content Here</p>
                  </CardBody>
              </Collapse>
          </Card>

      </div>
    );
  }
}
