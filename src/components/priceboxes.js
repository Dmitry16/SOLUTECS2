import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Button, ButtonCTA } from './styled/buttons'
import { Section } from './styled/wrappers'
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
import { H1, h3, P, HR } from './styled/typographies'

const WrapperPriceBox = styled.div`
  ${ flex.column }
  width: ${props => props.main ? '33%' : '30%'};
  height: ${props => props.main ? '28em' : 'auto'};
  margin: 3% 1%;
  padding: 1% 0.2% 3%;
  border: 1px solid #999;
  border-radius: 5px;
  background: ${ props => props.main ? props.theme.iconBGHoverColor : 'rgb(235,235,235)'};
  > ol {
    font-size: 1em;
    list-style: circle;
    color: ${ props => props.theme.primaryTextColor };
    text-align: left;
    margin: 1em 1em 1em 2em;
  }
  > h3 {
    color: ${ props => props.main ? props.theme.iconColor : 'rgb(170,60,60)'};
    font-size: ${ props => props.main ? '1.7em' : '1.4em'};
    font-weight: 100;
  }
  > h4 {
    color: rgb(170,60,60);
    font-weight: 100;    
  }
  ${ media.tablet`
    width: ${props => props.main ? '33%' : '30%'};
    height: ${props => props.main ? '27em' : '25em'};
    padding: 1%;
    > ol {
      font-size: 0.8em;
      margin: 1em 0;
    }
    > h3 {
      font-size: ${ props => props.main ? '1.4em' : '1.1em'};
    }
  `}
  ${ media.handheld`
    width: ${props => props.main ? '100%' : '90%'};
    height: ${props => props.main ? '20em' : '18em'};
    padding: 1%;
    > ol {
      font-size: 0.8em;
      margin: 1em 0;
    }
    > h3 {
      font-size: ${ props => props.main ? '1.3em' : '1.1em'};
    }
  `}
`

export const PriceBox1 = () => {
    return (
      <WrapperPriceBox>
        <h3>Sitio Web Normal</h3>
        <HR />
        <h4>Incluye:</h4>
        <ol>
          <li>Optimización SEO</li>
          <li>Activación de servicios de Google</li>
          <li>Sistema de gestión/ administración de contenido</li>
          <li>Blog</li>
          <li>Catalogo</li>
        </ol>
        <HR />
        <h3 style={{margin:'0.5em'}}>199€</h3>
        <Button small>Más información</Button>
      </WrapperPriceBox>
    )
}
export const PriceBox2 = () => {
    return (
      <WrapperPriceBox main>
        <h3>Sitio Web Completo</h3>
        <HR />
        <h4>Incluye:</h4>
        <ol>
          <li>Optimización SEO</li>
          <li>Activación de servicios de Google</li>
          <li>Sistema de gestión/ administración de contenido</li>
          <li>Blog</li>
          <li>Catalogo</li>
        </ol>
        <HR />
        <h3 style={{margin:'0.5em'}}>299€</h3>
        <Button small>Más información</Button>
      </WrapperPriceBox>
    )
}
export const PriceBox3 = () => {
    return (
      <WrapperPriceBox>
        <h3>E-commerce (Tienda Online)</h3>
        <HR />
        <h4>Incluye:</h4>
        <ol>
          <li>Optimización SEO</li>
          <li>Activación de servicios de Google</li>
          <li>Sistema de gestión/ administración de contenido</li>
          <li>Blog</li>
          <li>Catalogo</li>
        </ol>
        <HR />
        <h3 style={{margin:'0.5em'}}>399€</h3>
        <Button small>Más información</Button>
      </WrapperPriceBox>
    )
}
