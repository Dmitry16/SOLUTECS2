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
import { frontPage } from '../actions/frontPageActions'

export default class CtaInit extends React.Component {

  componentWillMount() {
    this.props.dispatch(frontPage())
  }

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
      ${ flex.row }
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
            <a href='/#services'>
              <ButtonCTA>
                Empezar
              </ButtonCTA>
            </a>
            <a href='/#prices'>
              <ButtonCTA>
                Ver precios
              </ButtonCTA>
            </a>
          </BoxCTA>
        </WrapperCTA>
    )
  }
}
