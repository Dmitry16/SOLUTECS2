import React from 'react'
import styled from 'styled-components'
import { media } from './styled/medias'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from './styled/buttons'

export const picsRender = (props) => {

  const PiezasWrapper = styled.div`
    border: 1px solid #eee;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
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
  const { pics, showPiezaPage } = props

  let piezas_arr

  return ( piezas_arr = props.pics.map((pieza, id) => {

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
  )
}
