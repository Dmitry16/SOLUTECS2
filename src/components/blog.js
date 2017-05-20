import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Article from './article'
import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import { fetchFrontPosts, fetchPosts } from '../actions/blogActions'
import { H1, HR } from './styled/typographies'
import { Button } from './styled/buttons'

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

          <Box key={ post.id } className='blog'>
            <Link to='/post'>
              <Article
                postTitle={ post.title.rendered }
                postExcerpt={ post.excerpt.rendered.replace(/(<([^>]+)>)/ig,'')
                              .replace('[&hellip;]','...')}
                postContent={ post.content.rendered.replace(/(<([^>]+)>)/ig,'')
                              .replace('[&hellip;]','...')}
                dispatch={ this.props.dispatch }
              />
            </Link>
          </Box>
        )
    });

    return (
      <Section>

        <H1>Blog</H1>
        <HR />

        { blog }

        <Link to="/blog">
          <Button>
            Ver todos articulos
          </Button>
        </Link>

      </Section>
    )
  }
}
