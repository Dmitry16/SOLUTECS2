import React, { Component, PropTypes } from 'react'

//Components
import styled from 'styled-components'
import { Section, PicWrapper } from './styled/wrappers'
import { H1, H3, Icon, P } from './styled/typographies'
import { Button } from './styled/buttons'
import { flex } from './styled/flexes'
import { Img } from './styled/img'


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
      border: 1px solid #ddd;
      padding: 3%;
    `

    return (
      <Section>

        <ColumnWrapper>
          <H1>{ piezaTitle }</H1>
          <Img src= { piezaImg } alt='zz'/>
        </ColumnWrapper>

        <ColumnWrapper>
          <P>{ piezaDescription.replace(/(<([^>]+)>)/ig,'')
                  .replace('[&hellip;]','...') }</P>
        </ColumnWrapper>

      </Section>
    )
  }
}
