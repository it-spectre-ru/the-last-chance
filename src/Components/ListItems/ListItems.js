import React, { Component } from 'react'

import { ListContainer, ListItem, ListTitle } from './ListItemsStyles'

export default class ListItemsComponent extends Component {
  renderItem = ({ full_name }, key) => {
    return (
      <ListItem key={`item:${key}`}>
        <ListTitle>{full_name}</ListTitle>
      </ListItem>
    )
  }
  render () {
    const { list } = this.props
    return (
      <ListContainer>
        {list.filter((f, i) => i < 7).map(this.renderItem)}
      </ListContainer>
    )
  }
}
