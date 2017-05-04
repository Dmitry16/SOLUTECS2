
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Actions
import { fetchPics, fetchAllPics } from '../actions/picsActions'
import { showPiezaPage } from '../actions/piezaActions'
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

  showPiezaPage(title, description, img) {
    this.props.dispatch(showPiezaPage(title, description, img))
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
    const { pics, showPiezaPage } = this.props

    let piezas_arr = this.props.pics.map((pieza, id) => {

      const title = pieza.title.rendered,
            description = pieza.content.rendered,
            img = pieza.better_featured_image.source_url,
            alt = pieza.better_featured_image.alt_text

        return (
          <div className="pieza" key={ pieza.id }>

            <p className="pieza-name">
              { title }
            </p>

            <div className="rotate">

                <div className="front">
                    <a href="#pieza-single" className="pieza-image">
                      <Img src={ img }
                          alt={ alt } className='albumPics'/>
                    </a>
                </div>

                <div className="pieza-col2">
                  <p className="pieza-descr">
                    { pieza.excerpt.rendered.replace(/(<([^>]+)>)/ig,'')
                              .replace('[&hellip;]','...') }
                  </p>
                </div>

            </div>

            <Link to='/piezaPage'>
              <Button small onClick={ () => showPiezaPage(title, description, img) }
                      style={{background:'none',padding:'0.5em',margin:'0 0 1em'}}>
                Ver detalles
              </Button>
            </Link>

          </div>
        )
      })

      piezas_arr = piezas_arr.slice(piezas_arr.length-4,piezas_arr.length)

    return (
      <Section>
        <H1 style={{margin:'5% 0'}}>Mis Trabajos</H1>
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">

            { piezas_arr }

            <VerTodoButton showAllPics={this.showAllPics.bind(this)}/>

        </Wrapper>
      </Section>
    )
  }
}
