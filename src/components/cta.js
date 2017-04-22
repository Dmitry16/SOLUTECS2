import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { TitleCTA } from './styled/titles'
import { Button, ButtonCTA } from './styled/buttons'
import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
//Actions
import { fetchAllPics } from '../actions/picsActions'

export default class CTA extends React.Component {
  constructor(props) {
    super(props);
  }

  showPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {
    const Wrapper = styled.div`
      background: steelblue;
      text-align: center;
      border: none;
      ${ flex.column }
    `
    const TitleCTA = styled.h3`
      font-weight: 300;
      font-size: 1.8em;
      color: #fff;
      ${ media.desktop`
      font-size: 1.8em;
      text-align: center;
      `};
      ${ media.tablet`
      font-size: 1.6em;
      text-align: center;
      `};
      ${ media.handheld`
      font-size: 1.5em;
      text-align: center;
      `};
    `
    const BoxCTA = styled.div`

      background: steelblue;
      text-align: center;
      margin: 0;
      padding: 0;
      width: 100%;
      > a { width: 33.3%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      ${ media.handheld`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        > a { width: 80%;

        `};
      ${ media.tablet`
        width: 100%;
        `};
      ${ media.desktop`
        width: 100%;
        `};
    `
    const ButtonCTA = styled.button`
      width: ${props => props.primary ? '80%' : '70%'};
      height: ${props => props.primary ? '4.5em' : '4em'};
      color: #fff;
      font-size: ${props => props.primary ? '1.2em' : '1em'};
      border: 2px solid #fff;
      margin: 0;
      padding: 0;
      background: steelblue;
      cursor: pointer;
      &:hover {
        background: lightblue;
        border: 2px solid darkviolet;
        box-shadow: 5px 5px 10px #333;
        color: darkviolet;
      }
      ${ media.desktop`
        font-size: ${props => props.primary ? '1.2em' : '1em'};
      `}
      ${ media.tablet`
        font-size: ${props => props.primary ? '1em' : '0.9em'};
        width: 90%;
      `}
      ${ media.handheld`
        font-size: ${props => props.primary ? '0.9em' : '0.8em'};
        width: 100%;
        margin-top: 1%;
        height: 3em;
      `}
      `
    return (
      <Section >
        <Wrapper className="cta">
          <TitleCTA>Que te apetece hacer ahora?</TitleCTA>
          <BoxCTA className="cta-buttons-wrapper">
            <Link to="/fotos"><ButtonCTA >
            Conocer quien somos</ButtonCTA></Link>
            <Link to="/fotos"><ButtonCTA primary >
            Saber que ofrecemos</ButtonCTA></Link>
            <Link to="/fotos"><ButtonCTA onClick={this.showPics.bind(this)}>
              Ver las fotos</ButtonCTA>
            </Link>
          </BoxCTA>
        </Wrapper>
      </Section>
    )
  }
}
