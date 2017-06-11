//Libraries
import React from 'react'
import { Link } from 'react-router-dom'
//Actions
import { renderHeaderTop, renderHeaderScrolled } from '../actions/headerActions'
import { notFrontPage } from '../actions/frontPageActions'

import styled from 'styled-components'
import { Button, ButtonCTA } from './styled/buttons'
import { Section } from './styled/wrappers'
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
import { H1, H3, P, HR } from './styled/typographies'


export default class Testimonios extends React.Component {

  render() {

    const WrapperPortfolio = styled.div`
      ${flex.row}
      ${ media.tablet`

      `}
      ${ media.handheld`
        ${flex.column}
      `}
    `
    const Folio = styled.div`
      ${flex.column}
      width: 33.3%;
      height: auto;
      padding: 5% 0;
      border: 1px solid steelblue;
      ${ media.tablet`

      `}
      ${ media.handheld`
        ${flex.column}
        width: 95%;
      `}
    `

    return (
      <WrapperMax1100 id='portfolio'>
        <H1>Portfolio</H1>
        <HR style={{margin:'1% auto 5%'}}/>
        <WrapperPortfolio>
          <Folio>
            <H3>Folio1</H3>
            <P>blabla</P>
          </Folio>
          <Folio>
            <H3>Folio2</H3>
            <P>blabla</P>
          </Folio>
          <Folio>
            <H3>Folio3</H3>
            <P>blabla</P>
          </Folio>
        </WrapperPortfolio>
      </WrapperMax1100>
    )
  }
}
