//Libs
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
//Actions
//Components
import styled from 'styled-components'
import { H1, HR } from './styled/typographies'
import { WrapperMax1100 } from './styled/wrappers'
import { picsRender } from './picsRender'

export default class AllPics extends Component {

  static propTypes = {
    pics: PropTypes.array.isRequired,
    showPiezaPage: PropTypes.func.isRequired
  }

  render() {

    const Wrapper = styled.div`
      position: relative;
      margin: 5% 0; 
    `
    return (
      <WrapperMax1100>
        <H1 style={{margin:'5% 0 0'}}>Todos Productos</H1>
        <HR />
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">
            { picsRender(this.props) }
        </Wrapper>
      </WrapperMax1100>
    )
  }
}
