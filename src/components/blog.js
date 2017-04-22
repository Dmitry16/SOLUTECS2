import React, { PropTypes } from 'react'
import Article from './article'
import styled from 'styled-components'
import { Box } from './styled/boxes'
import fetchPosts from '../actions/blogActions'

export default class Blog extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  // componentWillMount() {
  //   this.props.dispatch(fetchPosts())
  // }

  render() {

    return (
      <Box className="blog">
        <Article />
      </Box>
    )
  }
}
