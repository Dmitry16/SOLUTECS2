
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Actions
import { fetchAllPics } from '../actions/picsActions'
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
    dispatch: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    initialPics: PropTypes.array.isRequired,
    pics: PropTypes.array.isRequired,
    modalVisibility: PropTypes.string.isRequired,
    modalPic: PropTypes.string.isRequired,
    nextImg: PropTypes.string,
    prevImg: PropTypes.string
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
    const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
      transition: transform 0.5s;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `
    const { initialPics, nextImg, prevImg, modalPic, showNextImg, showPrevImg,
            modalVisibility, showModal, closeModal } = this.props

    let pics = initialPics
    let pics_arr = pics.map((pic, id) => {
        return (
          <PicWrapper key={pic.id}>
            <Img src={pic.source_url} alt={pic.alt_text} className='albumPics'
              onClick = {(e) => showModal(e)}/>
          </PicWrapper>
        )
    })

    return (
      <Section>
        <H1 style={{margin:'5% 0'}}>Mis Trabajos</H1>
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">

            { pics_arr }

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
