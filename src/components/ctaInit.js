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

export default class CtaInit extends React.Component {

  showPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {
    const WrapperCTA = styled.div`
      ${ flex.column };
      border: 1px solid red;
      position: absolute;
      top: 60vh;
      text-align: center;
      border: none;
      padding: 0;
      width: 30em;
      ${ media.handheld`
        top: 15vh;
      `};
    `
    const BoxCTA = styled.div`
      border: 1px solid blue;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 0;
      padding: 0;
      width: 19em;
      > a { width: 45%; margin: 2%}
      ${ media.tablet`
        width: 15em;
        `};
      ${ media.handheld`
        width: 7em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > a { width: 80%; }
      `};
    `
    const ButtonCTA = styled.button`
      width: ${props => props.primary ? '100%' : '100%'};
      height: ${props => props.primary ? '3em' : '3em'};
      color: #fff;
      font-size: ${props => props.primary ? '1em' : '1em'};
      border: ${ props => props.theme.buttonCTABorder };
      border-radius: ${ props => props.theme.buttonCTABorderRadius };
      margin: 1%; padding: 0;
      background: ${ props => props.theme.colorCTA };
      cursor: pointer;
      &:hover {
        background: ${ props => props.theme.buttonCTAhoverBG };
        border: ${ props => props.theme.buttonCTAhoverBorder };
        box-shadow: 5px 5px 10px #333;
        color: ${ props => props.theme.buttonCTAhoverColor };
      }
      ${ media.tablet`
        font-size: ${props => props.primary ? '0.9em' : '0.9em'};
        width: 100%;
      `}
      ${ media.handheld`
        font-size: ${props => props.primary ? '0.8em' : '0.8em'};
        width: 100%;
        height: 3em;
      `}
      `
    return (
        <WrapperCTA>
          <BoxCTA>
            <Link to="/contact">
              <ButtonCTA>
                Ver las ofertas
              </ButtonCTA>
            </Link>
            <Link to="/contact">
              <ButtonCTA primary>
                Ver las tarifas
              </ButtonCTA>
            </Link>
          </BoxCTA>
        </WrapperCTA>
    )
  }
}
