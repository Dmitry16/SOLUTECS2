//Libs
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
//Actions
import { showPiezaPage } from '../actions/piezaActions'
//Components
import Modal from './modal'
import styled from 'styled-components'
import { Section, PicWrapper } from './styled/wrappers'
import { H1, H3, Icon, P } from './styled/typographies'
import { Button } from './styled/buttons'
import { Img } from './styled/img'

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
      display: flex;
      justifyContent: center;
    `
    const PiezasWrapper = styled.div`
      border: 1px solid #eee;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
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
              { pieza.title.rendered }
            </p>

            <div className="rotate">

                <div className="front">
                    <a href="#pieza-single" className="pieza-image">
                      <Img src={pieza.better_featured_image.source_url}
                          alt={pieza.better_featured_image.alt_text} className='albumPics'/>
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

    return (
      <Section style={{border: 'none'}}>
        <Wrapper className="all_pics_section">

          <H3 className="title-front">Todos mis trabajos</H3>
          <PiezasWrapper>
            { piezas_arr }
          </PiezasWrapper>
        </Wrapper>
      </Section>
    )
  }
}
