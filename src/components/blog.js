import React, { PropTypes } from 'react'
import Article from './article'
import styled from 'styled-components'
import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import fetchPosts from '../actions/blogActions'

export default class Blog extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {
    let blog = this.props.posts.map((post,ind) => {
      return (
        <Box key={ post.id } className="blog">
          <Article
            postTitle={ post.title.rendered }
            postExcerpt={ post.excerpt.rendered }
          />
        </Box>
      )
    });

    return (
      <Section>
        { blog }
      </Section>
    )
  }
}
