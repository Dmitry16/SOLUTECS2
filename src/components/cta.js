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

  showPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {
    const WrapperCTA = styled.div`
      background: ${ props => props.theme.colorCTA };
      text-align: center;
      border: none;
      padding: 0 0.5em;
      width: 50em;
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
      > a { width: 30%; margin: 1%;}
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
    return (
      <Section style={{margin: '7% 0'}}>
        <WrapperCTA>
          <TitleCTA>Que te apetece hacer ahora?</TitleCTA>
          <BoxCTA>
            <Link to="/contact">
              <ButtonCTA style={{border:'1px solid #fff'}}>
                Recibir mas informacion
              </ButtonCTA>
            </Link>
            <Link to="/contact">
              <ButtonCTA primary style={{border:'1px solid #fff'}} >
                Contactar con nosotros
              </ButtonCTA>
            </Link>
            <Link to="/trabajos">
              <ButtonCTA  style={{border:'1px solid #fff'}} onClick={this.showPics.bind(this)}>
                Ver nuestros precios
              </ButtonCTA>
            </Link>
          </BoxCTA>
        </WrapperCTA>
      </Section>
    )
  }
}
