import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ListItems from './ListItems'

import Actions from 'Stores/MainStore'

const ListItemsContainer = (props) => <ListItems {...props} />

const mapStateToProps = (state) => {
  return {
    list: state.main.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: params => dispatch(Actions.updateStore(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListItemsContainer))
