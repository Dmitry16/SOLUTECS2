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
    return (
        <WrapperCTA>
          <BoxCTA>
            <Link to="/contact">
              <ButtonCTA>
                Empezar
              </ButtonCTA>
            </Link>
            <Link to="/contact">
              <ButtonCTA>
                Ver las tarifas
              </ButtonCTA>
            </Link>
          </BoxCTA>
        </WrapperCTA>
    )
  }
}
