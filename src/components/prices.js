import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Button, ButtonCTA } from './styled/buttons'
import { Section } from './styled/wrappers'
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
import { H1, H3, P, HR } from './styled/typographies'

export const Prices = () => {

  const WrapperMax1100 = styled.div`
    ${ flex.row }
    width: 1100px;
    margin: auto;
    z-Index: 3;
    padding: 3%;
    border: 1px solid #ddd;
  `
  const WrapperPriceBox = styled.div`
    width: ${props => props.main ? '33%' : '30%'};
    height: ${props => props.main ? '27em' : '20em'};
    margin: 1%;
    border: 1px solid #999;
    border-radius: 5px;
    background: ${ props => props.theme.iconBGHoverColor };
  `
  return (
    <Section>
      <WrapperMax1100>
        <WrapperPriceBox>
          <H3>Holala!</H3>
        </WrapperPriceBox>
        <WrapperPriceBox main>
          <H3>Holala!</H3>
        </WrapperPriceBox>
        <WrapperPriceBox>
          <H3>Holala!</H3>
        </WrapperPriceBox>
      </WrapperMax1100>
    </Section>
  )
}
