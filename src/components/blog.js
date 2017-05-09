import React, { PropTypes } from 'react'
import Article from './article'
import styled from 'styled-components'
import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import { fetchFrontPosts, fetchPosts } from '../actions/blogActions'
import { LT } from './styled/titles'

export default class Blog extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentWillMount() {

    if (this.props.frontPage===true) {
      this.props.dispatch(fetchFrontPosts())
    } else {
      this.props.dispatch(fetchPosts())
    }
  }

  render() {
    let blog = this.props.posts.map((post,ind) => {
      return (
        <Box key={ post.id } className="blog">
          <Article
            postTitle={ post.title.rendered }
            postExcerpt={ post.excerpt.rendered.replace(/(<([^>]+)>)/ig,'')
                    .replace('[&hellip;]','...') }
          />
        </Box>
      )
    });

    return (
      <Section>

        <LT>Blog</LT>

        { blog }
      </Section>
    )
  }
}
