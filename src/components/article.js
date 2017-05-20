import React from 'react'

import { Box } from './styled/boxes'
import { MT } from  './styled/titles'
import { WrapperMax1100 } from  './styled/wrappers'
import styled from 'styled-components'
import { showPost } from '../actions/postActions'

export default class Article extends React.Component {
  constructor() {
    super()
  }

  render() {

    const { postTitle, postExcerpt, postContent } = this.props

    const Box = styled.div`
       border: 1px solid #fff;
       margin: 3% 3%;
       padding: 3%;
       background: rgba(255, 255, 255, .2);
       &:hover {
         background: ${ props => props.theme.hoverColor };
         box-shadow: 5px 5px 10px #aaa;
         cursor: pointer;
       }
    `
    const showThePost = (postTitle, postContent) => {
      this.props.dispatch(showPost(postTitle, postContent))
    }

    return (
      <WrapperMax1100>
        <Box onClick={ () => showThePost(postTitle, postContent) }>
          <MT> { postTitle } </MT>
          { postExcerpt || postContent }
        </Box>
      </WrapperMax1100>
    )
  }
}
