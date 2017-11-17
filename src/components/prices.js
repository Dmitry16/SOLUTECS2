import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Button, ButtonCTA } from './styled/buttons'
import { Section } from './styled/wrappers'
// import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
import { H1, H3, P, HR } from './styled/typographies'
import { PriceBox1, PriceBox2, PriceBox3, PriceBox4 } from './priceboxes'

export const Prices = () => {

  const PriceBoxWrapper = styled.div`
    ${ flex.row }
    max-width: 2000px;
    z-Index: 3;
    margin: 5 auto 0%;
    padding: 5% 0 0;
    ${ media.tablet`
      width: 100%;
    `}
    ${ media.handheld`
      ${ flex.column }
    `}
  `
  return (
    <Section id='prices'>
    <H1 style={{color:'rgb(100,100,150)'}}>Desarrollo Web</H1>
    <H3>Todas paginas web las desarrollamos empleando <Link to='/tecnologiasWeb'>las ultimas tecnologías</Link>. Que permiten
    tener maximas velocidades de carga de pagina. También poder añadir cualquier funcionalidad al sitio web empezando desde
    la opción Basica a Premium según necesidad del cliente y en cualquier momento.</H3>
    <HR style={{color:'rgb(214,80,80)'}} />
      <PriceBoxWrapper>
        <PriceBox1 />
        <PriceBox2 />
        <PriceBox3 />
        <PriceBox4 />
      </PriceBoxWrapper>
    </Section>
  )
}
