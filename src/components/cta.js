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
      ${ flex.column }
      background: ${ props => props.theme.colorCTA };
      text-align: center;
      border: none;
      padding: 0 0.5em;
      width: 80%;
      margin: auto;
      ${ media.handheld`
        width: 90%;
        `};
      ${ media.tablet`
        width: 90%;
      `};
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
      ${ flex.row }
      background: ${ props => props.theme.colorCTA };
      margin: 0;
      padding: 0 0 5%;
      width: 100%;
      > a { width: 30%; margin: 1%;}
      ${ media.tablet`
        `};
      ${ media.handheld`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > a { width: 80%; }
      `};
    `
    // background:
    // linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px,
    // linear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px),
    // linear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px);
    // background-color:#e1ebbd;
    // background-size: 128px 128px;
    // background-attachment: fixed;

    return (
      <Section dark style={{margin: '0 0 3em',padding:'5% 0'}}>
        <WrapperCTA>
          <TitleCTA>Que vas a hacer ahora?</TitleCTA>
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
