
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
//Components
import Modal from './modal'
import styled from 'styled-components'
import { Section, PicWrapper } from './styled/wrappers'
import { H1, H3, Icon, P } from './styled/typographies'
import { Button } from './styled/buttons'

export default class AllPics extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    pics: PropTypes.array.isRequired,
  }

  render() {

    const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
      &:hover {
        cursor: pointer;
      }
    `
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

    const { pics } = this.props

    let piezas_arr = this.props.pics.map((pieza, id) => {

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
                  <Button small style={{background:'none',padding:'1em'}}>Más Información</Button>
                </div>

            </div>
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
