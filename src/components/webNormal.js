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

export class WebNormal extends React.Component {

  componentWillMount() {
    this.props.dispatch(notFrontPage())
  }

  render() {

    return (
      <WrapperMax1100 style={{margin:'15% auto 5%'}}>
        <H1>Sitio Web Normal</H1>
        <H3>Te desarrollamos un sitio web que va a incluir los siguientes elementos y servicios :</H3>
        <ol>
          <li>
            <P>Un sistema de gestión y administración de contenidos. Trabajamos con la mejor CMS
            (content management system) del mercado- WordPress.
            </P>
          </li>
          <li>
            <P>Un sistema de gestión y administración de contenidos. Trabajamos con la mejor CMS
            (content management system) del mercado- WordPress.
            </P>
          </li>
          <li>
            <P>Un sistema de gestión y administración de contenidos. Trabajamos con la mejor CMS
            (content management system) del mercado- WordPress.
            </P>
          </li>
          <li>
            <P>Un sistema de gestión y administración de contenidos. Trabajamos con la mejor CMS
            (content management system) del mercado- WordPress.
            </P>
          </li>
          <li>
            <P>Un sistema de gestión y administración de contenidos. Trabajamos con la mejor CMS
            (content management system) del mercado- WordPress.
            </P>
          </li>
        </ol>
      </WrapperMax1100>
    )
  }
}
