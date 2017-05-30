import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Button, ButtonCTA } from './styled/buttons'
import { Section } from './styled/wrappers'
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
import { H1, H3, P, HR } from './styled/typographies'

const WrapperPriceBox = styled.div`
  width: ${props => props.main ? '33%' : '30%'};
  height: ${props => props.main ? '27em' : '20em'};
  margin: 1%;
  border: 1px solid #999;
  border-radius: 5px;
  background: ${ props => props.theme.iconBGHoverColor };
  ${ media.tablet`
    width: ${props => props.main ? '33%' : '30%'};
    height: ${props => props.main ? '27em' : '20em'};
  `}
  ${ media.handheld`
    width: ${props => props.main ? '100%' : '90%'};
    height: ${props => props.main ? '27em' : '20em'};
  `}
`

export const PriceBox1 = () => {

    return (
      <WrapperPriceBox>
        <H3>Holala!</H3>
      </WrapperPriceBox>
    )
}
export const PriceBox2 = () => {

    return (
      <WrapperPriceBox main>
        <H3>Holala!</H3>
      </WrapperPriceBox>
    )
}
export const PriceBox3 = () => {

    return (
      <WrapperPriceBox>
        <H3>Holala!</H3>
      </WrapperPriceBox>
    )
}
