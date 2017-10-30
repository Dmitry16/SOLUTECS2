//Libraries
import React from 'react'
import { Link } from 'react-router-dom'
//Actions
import { renderHeaderTop, renderHeaderScrolled } from '../actions/headerActions'
import { notFrontPage } from '../actions/frontPageActions'

import styled from 'styled-components'
import { Button, ButtonCTA } from './styled/buttons'
import { Section } from './styled/wrappers'
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
import { H1, H3, P, HR } from './styled/typographies'


export default class Testimonios extends React.Component {

  render() {
    return (
      <Section id='testimonios'>
        <WrapperMax1100>
          <H1>Testimonios</H1>
          <HR style={{margin:'1% auto 5%'}}/>
          <H3>Testimonio1</H3>
          <H3>Testimonio2</H3>
          <H3>Testimonio3</H3>
        </WrapperMax1100>
      </Section>
    )
  }
}
