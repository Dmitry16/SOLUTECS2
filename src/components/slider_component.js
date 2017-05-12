
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Actions
import { fetchPics, fetchAllPics } from '../actions/picsActions'
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
import { H1, H3, Icon, P, HR } from './styled/typographies'

export default class Slider extends Component {
  constructor() {
    super()
  }

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
      position: relative;
      margin: 5% 0;
      > #wrprBtn { margin: 5% 0 0;
        }
    `
    const Pieza = styled.div`
      width: 20%;
      height: 15em;
      display: flex;
    	flex-direction: column;
      align-items: center;
    	justify-content: center;
    	text-align: center;
    	box-shadow: 0px 0px 30px 5px rgba(0,0,0,.7);
    	border: 1px solid #aaa;
    	margin: 5% 2% 2% 2%;
    	padding: 0;
    	border: 1px solid rgba(255, 255, 255, 0.9);
    	border-radius: 3px;
      ${ media.tablet`
        width: 45%;
      `}
      ${ media.handheld`
        width: 100%;
      `}
    `
    const PiezaTitle = styled.h3`
      color: ${ props => props.theme.buttonTextColor };
      margin: 4%;
      font-weight: 100;
    `
    const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
      &:hover {
        cursor: pointer;
      }
    `
    const InnerWrapper = styled.div`
      margin-bottom: 5%;
    	padding: 0;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
      align-items: center;
    	width: 90%;
    	height: 90%;
    	position: relative;
    	transition: all 1s !important;
      > div > a > p { color: khaki; }
    `
    const { pics, showPiezaPage } = this.props

    let piezas_arr = this.props.pics.map((pieza, id) => {

      const title = pieza.title.rendered,
            description = pieza.content.rendered,
            img = pieza.better_featured_image.source_url,
            alt = pieza.better_featured_image.alt_text

        return (
          <Pieza className="pieza" key={ pieza.id }>

            <PiezaTitle className="pieza-name">
              { title }
            </PiezaTitle>

            <InnerWrapper>

                <div className="front">
                    <a href="#pieza-single" className="pieza-image">
                      <Img src={ img }
                          alt={ alt } className='albumPics'/>
                    </a>
                </div>

                <div className="pieza-col2">
                  <Link to='/piezaPage'>
                    <p className="pieza-descr" onClick={ () => showPiezaPage(title, description, img) }>
                      { pieza.excerpt.rendered.replace(/(<([^>]+)>)/ig,'')
                                .replace('[&hellip;]','...') }
                    </p>
                  </Link>
                </div>


            </InnerWrapper>

            <Link to='/piezaPage'>
              <Button small onClick={ () => showPiezaPage(title, description, img) }
                      style={{background:'none',padding:'0.5em',margin:'0 0 1em'}}>
                Ver detalles
              </Button>
            </Link>

          </Pieza>
        )
      })

      piezas_arr = piezas_arr.slice(piezas_arr.length-4,piezas_arr.length)

    return (
      <Section>
        <H1 style={{margin:'5% 0 0'}}>Productos</H1>
        <HR />
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">

            { piezas_arr }

            <VerTodoButton showAllPics={this.showAllPics.bind(this)}/>

        </Wrapper>
      </Section>
    )
  }
}
