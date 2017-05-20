import React from 'react'
import styled from 'styled-components'

import Article from './article'
import { Section } from './styled/wrappers'

export class PostPage extends React.Component {

  render () {
    console.log(this.props.postTitle);
    return (
      <Section>
        <Article
          postTitle={ this.props.postTitle }
          postContent={ this.props.postContent }
        />
      </Section>
    )
  }
}
