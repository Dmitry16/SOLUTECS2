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
      margin: 5% auto 0; padding: 0;
      ${ media.tablet`

      `}
      ${ media.handheld`
        ${flex.column}
      `}
    `
    const Folio = styled.a`
      position: relative;
      ${flex.column}
      width: 33%;
      height: auto;
      padding: 5% 0;
      margin: 0.1%;
      border: 1px solid #aaa;
      ${ media.tablet`

      `}
      ${ media.handheld`
        ${flex.column}
        width: 95%;
      `}
    `
    const Img = styled.img`
      width: 100%;
      position: absolute;
      top: 0; left: 0;
      z-index: 0;
    `

    return (
      <WrapperMax1100 id='portfolio'>
      <H1 style={{color:'rgb(100,100,150)',margin:'5% auto 0'}}>Portfolio</H1>
      <HR style={{color:'rgb(214,80,80)'}} />
        <WrapperPortfolio>
          <Folio>
            <Img src='http://solutecs.biz/wp-content/uploads/2017/06/columpiu_sm.jpg'></Img>
            <H3 style={{zIndex:1}}>Folio1</H3>
            <P style={{zIndex:1}}>blabla</P>
          </Folio>
          <Folio>
            <Img src='http://solutecs.biz/wp-content/uploads/2017/06/impexa_sm.jpg'></Img>
            <H3>Folio2</H3>
            <P>blabla</P>
          </Folio>
          <Folio>
            <Img src='http://solutecs.biz/wp-content/uploads/2017/06/nolimits_sm.jpg'></Img>
            <H3>Folio3</H3>
            <P>blabla</P>
          </Folio>
          <Folio>

              <Img src='http://solutecs.biz/wp-content/uploads/2017/06/llop_sm.jpg'></Img>

            <H3>Folio1</H3>
            <P>blabla</P>
          </Folio>
          <Folio>

              <Img src='http://solutecs.biz/wp-content/uploads/2017/06/receptum_sm.jpg'></Img>

            <H3>Folio2</H3>
            <P>blabla</P>
          </Folio>
          <Folio>

              <Img src='http://solutecs.biz/wp-content/uploads/2017/06/magicpics_sm.jpg'></Img>

            <H3>Folio3</H3>
            <P>blabla</P>
          </Folio>
        </WrapperPortfolio>
      </WrapperMax1100>
    )
  }
}
