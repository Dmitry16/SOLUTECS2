
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Actions
import { fetchPics, fetchAllPics } from '../actions/picsActions'
import { closeModal } from '../actions/modalActions'
//Components
import Modal from './modal'
import { VerTodoButton } from './verTodoButton'
//Styled componentsimport styled from "styled-components";
import styled from 'styled-components'
import { media } from './styled/medias'
import { Title } from './styled/titles'
import { Button } from './styled/buttons'
import { Box } from './styled/boxes'
import { Section, PicWrapper } from './styled/wrappers'
import { H1, H3, Icon, P } from './styled/typographies'

export default class Slider extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  showAllPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {

    const Wrapper = styled.div`
      position: relative;
      > #wrprBtn { margin: 5%;
        }
    `
    const Pieza = styled.div`

    `
    const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
      &:hover {
        cursor: pointer;
      }
    `
    const A = styled.a`
      width: 100% !important;
    `

    const { initialPics, nextImg, prevImg, modalPic, showNextImg, showPrevImg,
            modalVisibility, showModal, closeModal } = this.props

    let piezas_arr = initialPics.map((pieza, id) => {

        return (
          <div className="pieza" key={ pieza.id }>

            <p className="pieza-name">
              { pieza.id }
            </p>

            <div className="rotate">

                <div className="front">
                    <A href="#pieza-single" className="pieza-image">
                      <Img src={pieza.source_url}
                          alt={pieza.alt_text} className='albumPics'/>
                    </A>
                </div>

                <div className="pieza-col2">
                  <p className="pieza-descr">
                    blabla
                  </p>
                  <button className="boton-pieza">Más Información</button>
                </div>

            </div>
          </div>
        )
      })

    return (
      <Section>
        <H1 style={{margin:'5% 0'}}>Mis Trabajos</H1>
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">

            { piezas_arr }

            <Modal
              modalPic = { modalPic }
              modalVisibility = { modalVisibility }
              nextImg = { nextImg }
              prevImg = { prevImg }
              showNextImg = { showNextImg }
              showPrevImg = { showPrevImg }
              closeModal = { closeModal }
            />

            <VerTodoButton showAllPics={this.showAllPics.bind(this)}/>

        </Wrapper>
      </Section>
    )
  }
}
