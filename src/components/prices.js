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
    margin: 3em auto 0;
    padding: 0;
    ${ media.tablet`
      width: 100%;
    `}
    ${ media.handheld`
      ${ flex.column }
    `}
  `
  return (
    <Section id='prices'>
      <H1>Nuestras Tarifas</H1>
      <HR />
      <PriceBoxWrapper>
        <PriceBox1 />
        <PriceBox2 />
        <PriceBox3 />
        <PriceBox4 />
      </PriceBoxWrapper>
    </Section>
  )
}
