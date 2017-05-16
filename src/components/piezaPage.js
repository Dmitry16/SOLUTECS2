import React, { Component, PropTypes } from 'react'

//Components
import styled from 'styled-components'
import { Section, PicWrapper } from './styled/wrappers'
import { H1, H3, Icon, P } from './styled/typographies'
import { Button } from './styled/buttons'
import { flex } from './styled/flexes'
import { Img } from './styled/img'
import { WrapperMax1100 } from './styled/wrappers'

export default class PiezaPage extends Component {

  static propTypes = {
    piezaTitle: PropTypes.string.isRequired,
    piezaDescription: PropTypes.string.isRequired,
    piezaImg: PropTypes.string.isRequired
  }

  render() {

    const { piezaTitle, piezaDescription, piezaImg } = this.props

    const ColumnWrapper = styled.div`
      ${ flex.column }
      padding: 3%;
    `

    return (
      <Section>

        <ColumnWrapper>
          <H1 style={{margin:'0 0 2%'}}>{ piezaTitle }</H1>
          <Img src= { piezaImg } alt='zz'/>
        </ColumnWrapper>

        <WrapperMax1100>
          <P>{ piezaDescription.replace(/(<([^>]+)>)/ig,'')
                  .replace('[&hellip;]','...') }</P>
        </WrapperMax1100>

      </Section>
    )
  }
}
