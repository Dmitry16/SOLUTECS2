//Libs
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Actions
import { showPiezaPage } from '../actions/piezaActions'
//Components
import styled from 'styled-components'
import { Section, PicWrapper } from './styled/wrappers'
import { H1, H3, Icon, P, HR } from './styled/typographies'
import { Button } from './styled/buttons'
import { Img } from './styled/img'
import { media } from './styled/medias'
import { WrapperMax1100 } from './styled/wrappers'
import { picsRender } from './picsRender'

export default class AllPics extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    pics: PropTypes.array.isRequired,
    showPiezaPage: PropTypes.func.isRequired
  }

  render() {

    const Wrapper = styled.div`
      position: relative;
      margin: 5% 0;
      > #wrprBtn { margin: 5% 0 0;
        }
    `

    return (
      <WrapperMax1100>
        <H1 style={{margin:'5% 0 0',textAlign:'center'}}>Todos Productos</H1>
        <HR />
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">
            { picsRender(this.props) }
        </Wrapper>
      </WrapperMax1100>
    )
  }
}
