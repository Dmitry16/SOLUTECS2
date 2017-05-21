import React, { Component, PropTypes } from 'react'
//require ('./components/slider_core.js');
import { Link } from 'react-router-dom'
//Actions
import { fetchPics, fetchAllPics } from '../actions/picsActions'
//Components
import { VerTodoButton } from './verTodoButton'
//Styled componentsimport styled from "styled-components";
import styled from 'styled-components'
import { H1, HR } from './styled/typographies'
import { picsRender } from './picsRender'
import { WrapperMax1100 } from './styled/wrappers'

export default class Slider extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.dispatch(fetchPics())
  }

  showAllPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {

    const Wrapper = styled.div`
      width: 100%;
      position: relative;
      margin: 2% 0 5%;
    `
    let piezas_arr = picsRender(this.props)
    piezas_arr = piezas_arr.slice(piezas_arr.length-4,piezas_arr.length)

    return (
      <WrapperMax1100>
        <H1 style={{margin:'5% 0 0'}}>Productos</H1>
        <HR />
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">
            { piezas_arr }
            <VerTodoButton showAllPics={this.showAllPics.bind(this)}/>
        </Wrapper>
      </WrapperMax1100>
    )
  }
}
