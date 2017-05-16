import React from 'react'
import styled from 'styled-components'

import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import { MT } from  './styled/titles'
import { P } from  './styled/typographies'
import { WrapperMax1100 } from './styled/wrappers'

export default class Article extends React.Component {
  constructor() {
    super()
  }

  render() {

    const Box = styled.div`
       border: 1px solid #fff;
       margin: 3% 3%;
       padding: 3%;
       background: ${ props => props.theme.articleBG };
       &:hover {
         background: ${ props => props.theme.hoverColor };
         box-shadow: 0 0 20px 10px #aaa;
         cursor: pointer;
       }
    `
    return (
      <WrapperMax1100>
        <Box>
          <MT> { this.props.postTitle } </MT>
          <P> { this.props.postExcerpt } </P>
        </Box>
      </WrapperMax1100>
    )
  }
}
