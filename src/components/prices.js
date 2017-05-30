import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Button, ButtonCTA } from './styled/buttons'
import { Section } from './styled/wrappers'
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
import { H1, H3, P, HR } from './styled/typographies'
import { PriceBox1, PriceBox2, PriceBox3 } from './priceboxes'

export const Prices = () => {

  const WrapperMax1100 = styled.div`
    ${ flex.row }
    width: 1100px;
    margin: auto;
    z-Index: 3;
    padding: 3%;
    border: 1px solid #ddd;
    ${ media.tablet`
      width: 100%;
      padding: 1%;
    `}
    ${ media.handheld`
      ${ flex.column }
    `}
  `

  return (
    <Section>
      <WrapperMax1100>
        <PriceBox1 />
        <PriceBox2 />
        <PriceBox3 />
      </WrapperMax1100>
    </Section>
  )
}
