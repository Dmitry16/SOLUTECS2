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
    const WrapperCTA = styled.div`
      background: ${ props => props.theme.colorCTA };
      text-align: center;
      border: none;
      padding: 0 0.5em;
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
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background: ${ props => props.theme.colorCTA };
      text-align: center;
      margin: 0;
      padding: 0 0 5%;
      width: 100%;
      > a { width: 33.3%;}
      ${ media.handheld`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > a { width: 80%; }
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
      border: ${ props => props.theme.buttonCTABorder };
      margin: 0;
      padding: 0;
      background: ${ props => props.theme.colorCTA };
      cursor: pointer;
      &:hover {
        background: ${ props => props.theme.buttonCTAhoverBG };
        border: ${ props => props.theme.buttonCTAhoverBorder };
        box-shadow: 5px 5px 10px #333;
        color: ${ props => props.theme.buttonCTAhoverColor };
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
      <Section style={{margin: '7% 0'}}>
        <WrapperCTA>
          <TitleCTA>Que te apetece hacer ahora?</TitleCTA>
          <BoxCTA>
            <Link to="/contact"><ButtonCTA >
            Recibir mas informacion</ButtonCTA></Link>
            <Link to="/contact"><ButtonCTA primary >
            Contactar con nosotros</ButtonCTA></Link>
            <Link to="/trabajos"><ButtonCTA onClick={this.showPics.bind(this)}>
              Ver nuestros precios</ButtonCTA>
            </Link>
          </BoxCTA>
        </WrapperCTA>
      </Section>
    )
  }
}
