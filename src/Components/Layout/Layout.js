import React, { Component } from 'react'

import { Layout, ListItem, ListTitle } from './LayoutStyles'
import { Grid, Col } from 'react-styled-flexboxgrid'

export default class ListItemsComponent extends Component {
  renderItem = ({ full_name }, key) => {
    return (
      <ListItem key={`item:${key}`}>
        <ListTitle>{full_name}</ListTitle>
      </ListItem>
    )
  }
  render () {
    return (
      <Layout>
      </Layout>
    )
  }
}
