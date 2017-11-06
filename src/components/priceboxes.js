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
  width: ${props => props.main ? '33%' : '23%'};
  height: ${props => props.main ? 'auto' : 'auto'};
  margin: 1% -0.8%;
  padding: 1%;
  border: 1px solid rgba(214,80,80,0.6);
  border-radius: 5px;
  background: ${ props => props.main ? props.theme.iconBGHoverColor : 'rgba(235,235,235,0.6)'};
  &:hover {
    background: ${ props => props.theme.iconBGHoverColor };
    box-shadow: 10px 10px 5px rgba(100,100,100,0.5);
    border: 1px solid rgba(214,80,80,0.6);    
    z-Index: 8;
    > ol { font-size: 1em; }
    > h3 { font-size: 1.5em; }
    > h4 { font-size: 1.2em; }
  }
  > ol {
    font-size: ${ props => props.main ? '1em' : '0.9em'};
    list-style: circle;
    color: ${ props => props.theme.primaryTextColor };
    text-align: left;
    margin: 1em 1em 1em 2em;
    &:hover {
      font-size: 1em;
    }
  }
  > h3 {
    color: ${ props => props.main ? props.theme.iconColor : 'rgb(170,60,60)'};
    font-size: ${ props => props.main ? '1.5em' : '1.3em'};
    font-weight: 100;
  }
  > h4 {
    color: rgb(170,60,60);
    font-weight: 100;
  }
  ${ media.tablet`
    width: ${props => props.main ? '33%' : '30%'};
    height: ${props => props.main ? 'auto' : 'auto'};
    padding: 2%;
    > ol {
      font-size: ${ props => props.main ? '1em' : '0.9em'};
      margin: 1em 0;
    }
    > h3 {
      font-size: ${ props => props.main ? '1.4em' : '1.1em'};
    }
  `}
  ${ media.handheld`
    width: ${props => props.main ? '100%' : '90%'};
    height: ${props => props.main ? 'auto' : 'auto'};
    padding: 2%;
    > ol {
      font-size: ${ props => props.main ? '1em' : '0.9em'};
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
        <h3>Basico</h3>
        <HR />
        <ol>
          <li>Diseño personalizado</li>
          <li>SEO (posicionamiento web) basico</li>
          <li>Activación de servicios de Google (Analytics, Maps)</li>
          <li>Un idioma</li>
          <li>Enlaces a redes sociales</li>
        </ol>
        <HR />
        <h3 style={{margin:'0.5em'}}>299€</h3>
        <Link to='/webNormal'><Button small>Más información</Button></Link>
      </WrapperPriceBox>
    )
}
export const PriceBox2 = () => {
    return (
      <WrapperPriceBox>
        <h3>Completo</h3>
        <h4>Aplicación WEB Autogestionable</h4>
        <HR />
        <ol>
          <li>Diseño personalizado</li>
          <li>Página de gestión/ administración de contenido</li>
          <li>Hosting (alojamiento web)</li>
          <li>SEO (posicionamiento web) basico</li>
          <li>Activación de servicios de Google (Map, Places, Analytics, Calendario, etc.)</li>
          <li>Catálogo/ Album de Foto/ Video/ PowerPoint/ Excell, Google SpreadSheets, etc.</li>
          <li>Enlaces a redes sociales</li>
          <li>Blog</li>
        </ol>
        <HR />
        <h3 style={{margin:'0.5em'}}>499€</h3>
        <Link to='/webCompleta'><Button small>Más información</Button></Link>
      </WrapperPriceBox>
    )
}
export const PriceBox3 = () => {
    return (
      <WrapperPriceBox>
        <h3>Avanzado</h3>
        <h4>Aplicación WEB con Tienda Online Autogestionable</h4>
        <HR />
        <ol>
          <li>Diseño original</li>
          <li>Página de gestión/ administración de contenido y tienda</li>
          <li>Hosting (alojamiento web)</li>
          <li>SEO (posicionamiento web) <u>avanzado</u></li>
          <li>Activación de servicios de Google (Map, Places, Analytics, Calendario, etc.)</li>
          <li>Catálogo/ Album de Foto/ Video/ PowerPoint/ Excell, Google SpreadSheets, etc.</li>
          <li>Enlaces a redes sociales</li>
          <li>Blog</li>
        </ol>
        <HR />
        <h3 style={{margin:'0.5em'}}>desde 899€</h3>
        <Link to='/webEcommerce'><Button small>Más información</Button></Link>
      </WrapperPriceBox>
    )
}
export const PriceBox4 = () => {
    return (
      <WrapperPriceBox>
        <h3>Premium</h3>
        <h4>Aplicacón Web Autogestionable con Intranet Corporativa, Tienda Online, Aplicaciónes Móviles, etc.</h4>
        <HR />
        <h4>Incluye:</h4>
        <ol>
          <li>Diseño original</li>
          <li><u>Intranet Corporativa desarrollada a medida</u></li>
          <li>Sistema de gestión/ administración de contenido y tienda <u>desarrollado a medida</u></li>
          <li><u>Aplicaciones WEB y Móviles (Android, iOS)</u></li>
          <li>Hosting (alojamiento web)</li>
          <li>SEO/SEM (posicionamiento web/ publicidad AdWords) completo</li>
          <li>Activación de servicios de Google</li>
          <li>Catálogo/ Album de Foto/ Video/ PowerPoint/ Excell, Google SpreadSheets, etc.</li>
          <li>Enlaces a redes sociales</li>
          <li>Blog</li>
        </ol>
        <HR />
        <h3 style={{margin:'0.5em'}}>desde 1.499€</h3>
        <Link to='/webEcommerce'><Button small>Más información</Button></Link>
      </WrapperPriceBox>
    )
}
